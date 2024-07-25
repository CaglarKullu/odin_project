import ProviderScope from './caglarpod/src/core/ProviderScope.js';
import CounterComponent from './caglarpod/src/example/CounterComponent';
import './App.css'

function App() {
 return (
  <ProviderScope>
  <CounterComponent />
</ProviderScope>
 )
}

export default App
