import {useStateNotifier}  from 'caglarpods/src/core/useStateNotifier';
import CounterNotifier from './CounterNotifier';

const counterNotifier = new CounterNotifier();

// Create a CounterComponent as a React functional component
const CounterComponent= () => {
  const state = useStateNotifier<CounterState>(counterNotifier);

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => counterNotifier.increment()}>Increment</button>
      <button onClick={() => counterNotifier.decrement()}>Decrement</button>
    </div>
  );
};

export default CounterComponent;