import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Preview from "./preview/Preview";

function DownloadButton({ cvData }) {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div style={{ display: "none" }}>
        <Preview ref={componentRef} cvData={cvData} />
      </div>
      <button onClick={handlePrint}>Download PDF</button>
    </div>
  );
}

export default DownloadButton;