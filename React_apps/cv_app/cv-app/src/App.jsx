import React, { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import DownloadButton from "./components/DownloadButton";

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
      <Form cvData={cvData} setCvData={setCvData} />
      <Preview cvData={cvData} />
      <DownloadButton cvData={cvData} />
    </div>
  );
}

export default App;
