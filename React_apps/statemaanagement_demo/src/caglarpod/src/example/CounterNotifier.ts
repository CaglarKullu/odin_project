import { StateNotifier } from "../core/StateNotifier";

interface CounterState {
  count: number;
}
export default class CounterNotifier extends StateNotifier<CounterState> {
  state: any;
  constructor() {
    super({ count: 0 });
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
}
