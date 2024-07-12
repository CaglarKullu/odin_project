import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Preview from "./components/preview/Preview";

function App() {


  return (
    <div className="App">
      <Header />

      <div className="main-container">
      <Form/>
      <Preview/>
      </div>
      <Footer />

    </div>
  );
}

export default App;