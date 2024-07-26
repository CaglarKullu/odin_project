import ProviderScope from './caglarpod/src/core/ProviderScope.jsx';
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
