import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import './PrintButton.css';

const PrintButton = ({ targetId }) => {
  const printPDF = () => {
    const input = document.getElementById(targetId);
    input.querySelector('h2').textContent = '';
    console.log(input);
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('form-data.pdf');
    });
  };

  return (
    <div className="print-button">
    <button onClick={printPDF}>Print as PDF</button>
    </div>
  );
};

export default PrintButton;
