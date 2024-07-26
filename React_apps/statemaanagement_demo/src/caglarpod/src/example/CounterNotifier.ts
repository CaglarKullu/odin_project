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
    console.log("increment");
    console.log(this.state.count);
    this.setState({ count: this.getState().count + 1 });
  }

  decrement() {
    console.log("decrement");
    this.setState({ count: this.getState().count - 1 });
  }
}
