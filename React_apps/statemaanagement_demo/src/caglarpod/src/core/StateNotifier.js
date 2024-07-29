import { EventEmitter } from 'events';
import { memoize } from '../utils/memoize';
import connectToDevTools from './devtools';
import { handleError } from '../utils/errorHandler';
import { throttle, debounce } from '../utils/throttle';

export class StateNotifier {
  constructor(initialState, persistenceLayer, throttleLimit = 100, debounceDelay = 300) {
    this.state = initialState;
    this.listeners = new Set();
    this.derivedListeners = new Map();
    this.derivedStateCache = new Map();
    this.lock = new EventEmitter();
    this.lock.setMaxListeners(1); // Ensure only one update at a time
    this.persistenceLayer = persistenceLayer;
    this.isBatching = false;
    this.pendingState = null;
    this.throttledNotifyListeners = throttle(this.notifyListeners.bind(this), throttleLimit);
    this.debouncedNotifyListeners = debounce(this.notifyListeners.bind(this), debounceDelay);
    this.middlewares = [];
    this.init().catch(error => handleError(error, 'StateNotifier Initialization'));
    connectToDevTools(this); // Connect to DevTools by default
  }

  async init() {
    if (this.persistenceLayer) {
      try {
        const persistedState = await this.persistenceLayer.load();
        if (persistedState) {
          this.state = persistedState;
          this.notifyListeners();
        }
      } catch (error) {
        handleError(error, 'StateNotifier Persistence Load');
      }
    }
  }

  getState() {
    return this.state;
  }

  getDerivedState(name, selector) {
    const memoizedSelector = memoize(selector);
    if (!this.derivedStateCache.has(name)) {
      this.derivedStateCache.set(name, memoizedSelector(this.state));
    }
    return this.derivedStateCache.get(name);
  }

  async setState(newState) {

    this.applyMiddlewares(newState, (finalState) => {
      this.state = finalState;
      this.notifyListeners();
    });


    this.state = newState;
    this.notifyListeners();



    this.isBatching = true;
    await this.acquireLock();

    if (this.persistenceLayer) {
      try {
        await this.persistenceLayer.save(newState);
      } catch (error) {
        handleError(error, 'StateNotifier Persistence Save');
      }
    }
    this.state = newState;
    this.notifyListeners();
    this.releaseLock();
    this.isBatching = false;

    if (this.pendingState) {
      const nextState = this.pendingState;
      this.pendingState = null;
      await this.setState(nextState);
    }
    this.state = newState;
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  subscribeToSelector(selector, listener) {
    const memoizedSelector = memoize(selector);
    let previousSelectedState = memoizedSelector(this.state);

    const wrappedListener = () => {
      const newSelectedState = memoizedSelector(this.state);
      if (previousSelectedState !== newSelectedState) {
        listener(newSelectedState);
        previousSelectedState = newSelectedState;
      }
    };

    this.listeners.add(wrappedListener);

    return () => this.listeners.delete(wrappedListener);
  }

  subscribeToDerivedState(name, selector, listener) {
    const wrappedListener = () => {
      const derivedState = this.getDerivedState(name, selector);
      listener(derivedState);
    };

    this.derivedListeners.set(name, wrappedListener);
    wrappedListener();

    return () => this.derivedListeners.delete(name);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
    this.derivedListeners.forEach((listener, name) => {
      const derivedState = this.derivedStateCache.get(name);
      listener(derivedState);
    });
  }

  acquireLock() {
    return new Promise(resolve => {
      this.lock.once('release', resolve);
    });
  }

  releaseLock() {
    this.lock.emit('release');
  }

  // Memoize function within StateNotifier
  memoize(fn) {
    return memoize(fn);
  }

  applyMiddleware(middleware) {
    this.middlewares.push(middleware);
    this.applyMiddlewares(this.state, this.notifyListeners.bind(this));
  }

  applyMiddlewares(state, next) {
    let nextMiddleware = next;
    for (let i = this.middlewares.length - 1; i >= 0; i--) {
      const middleware = this.middlewares[i];
      const oldNext = nextMiddleware;
      nextMiddleware = (newState) => {
        middleware(oldNext, newState);
      };
    }
    nextMiddleware(state);
  }
}

export default StateNotifier;
