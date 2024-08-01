
import './App.css'
import CounterComponent from './example/counter_example/CounterComponent'
import ItemListComponent from './example/derived_state_example/ItemListComponent'
import StreamComponent from './example/use_stream_query_example/StreamComponent'
import UsersComponent from './example/usequery_example/UseQueryExample'

function App() {

  return (
    <>
    <h1>Welcome to the CaglarPod Examples</h1>
    
    <h2>Counter Example</h2>
    <p>If you check the console, you will see that there is also a middleware logger</p>
    <CounterComponent />
    <br/>
    <h2>UseQuery Example</h2>
    <p>UseQuery for handle the API calls</p>
    <UsersComponent />
    <br/>
    <h2>UseStreamQuery Example</h2>
    <StreamComponent />
    <br/>
    <h2>Derived State Example</h2>
    <p>You can bind a derived state to another state</p>
    <ItemListComponent />
    </>


  )
}

export default App
