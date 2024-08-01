import { EventEmitter } from 'events';

export interface PersistenceLayer<T> {
  save(state: T): Promise<void>;
  load(): Promise<T>;
}

type Selector<T, U> = (state: T) => U;

type Middleware<T> = (next: (state: T) => void, state: T) => void;

export declare class StateNotifier<T> {
  constructor(
    initialState: T,
    persistenceLayer?: PersistenceLayer<T>,
    throttleLimit?: number,
    debounceDelay?: number
  );

  getState(): T;
  getDerivedState<U>(name: string, selector: Selector<T, U>): U;
  setState(newState: T): Promise<void>;
  subscribe(listener: (state: T) => void): () => void;
  subscribeToSelector<U>(selector: Selector<T, U>, listener: (selectedState: U) => void): () => void;
  subscribeToDerivedState<U>(name: string, selector: Selector<T, U>, listener: (derivedState: U) => void): () => void;
  memoize<R>(fn: (...args: any[]) => R): (...args: any[]) => R;
  applyMiddleware(middleware: Middleware<T>): void;
}
