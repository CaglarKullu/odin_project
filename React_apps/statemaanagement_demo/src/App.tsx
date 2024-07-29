import ProviderScope from './caglarpod/src/core/ProviderScope.jsx';
import CounterComponent from './caglarpod/src/example/counter_example/CounterComponent.js';
import './App.css'

function App() {
 return (
  <ProviderScope>
  <CounterComponent />
</ProviderScope>
 )
}

export default App
