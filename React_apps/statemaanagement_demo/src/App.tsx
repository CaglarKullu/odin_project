import ProviderScope from './caglarpod/src/core/ProviderScope.jsx';
import CounterComponent from './caglarpod/src/example/counter_example/CounterComponent.js';
import './App.css'
import UsersComponent from './caglarpod/src/example/usequery_example/UseQueryExample.js';
import StreamComponent from './caglarpod/src/example/use_stream_query_example/StreamComponent';

function App() {
 return (
  <ProviderScope>
  <CounterComponent />
  <UsersComponent />
  <StreamComponent />
</ProviderScope>
 )
}

export default App
