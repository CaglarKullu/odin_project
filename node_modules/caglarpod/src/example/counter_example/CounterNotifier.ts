import { StateNotifier } from "../../core/StateNotifier";

interface CounterState {
  count: number;
}
export default class CounterNotifier extends StateNotifier<CounterState> {
  state: any;
  constructor() {
    super({ count: 0 });
    this.applyMiddleware(this.loggerMiddleware);
  }

  increment() {
    this.setState({ count: this.getState().count + 1 });
  }

  decrement() {
    if (this.getState().count > 0)
    this.setState({ 
      count: this.getState().count - 1 });
  }
  loggerMiddleware = (next: (state: CounterState) => void, state: CounterState) => {
    const previousState = this.state;
    console.log('Previous State:', previousState);
    next(state);
    const nextState = this.state;
    console.log('Next State:', nextState);
  };
}

