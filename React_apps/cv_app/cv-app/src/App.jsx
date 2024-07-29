import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Preview from "./components/preview/Preview";
import { FormProvider } from "./utils/FormProvider";
import PrintButton from "./components/print_pdf/PrintButton";

function App() {
  return (
    <FormProvider>
    <div className="App">
      <Header />
      <main className="main-container">
      <Form/>
      <Preview/>
      </main>
      <PrintButton targetId="Preview" />
      <Footer />
    </div>
    </FormProvider>
  );
}

export default App;