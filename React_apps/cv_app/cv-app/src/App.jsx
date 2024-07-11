import React, { useState } from "react";
import Form from "./components/form/Form";
import Preview from "./components/preview/Preview";
import DownloadButton from "./components/DownloadButton";
import "./App.css";

function App() {
  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: ""
  });

  return (
    <div className="App">
      <h1>CV Creator</h1>
      <div className="container">
        <Form cvData={cvData} setCvData={setCvData} />
        <Preview cvData={cvData} />
      </div>
      <DownloadButton cvData={cvData} />
    </div>
  );
}

export default App;