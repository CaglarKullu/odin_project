import { useStateNotifier } from "../../core/useStateNotifier";
import CounterNotifier from "./CounterNotifier";

interface CounterState {
  count: number;
}

const counterNotifier = new CounterNotifier();

// Create a CounterComponent as a React functional component
const CounterComponent: React.FC = () => {
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