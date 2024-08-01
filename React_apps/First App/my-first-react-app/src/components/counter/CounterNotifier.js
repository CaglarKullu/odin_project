import {StateNotifier} from 'caglarpods/src/core/StateNotifier'

export default class CounterNotifier extends StateNotifier {
    constructor() {
      super({ count: 0 });
    }
  
    increment() {
      this.setState({ count: this.getState().count + 1 });
    }
  
    decrement() {
      if (this.getState().count > 0)
      this.setState({ 
        count: this.getState().count - 1 });
    }

  }