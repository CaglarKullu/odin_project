import React from 'react';
import './TemplateSelector.css';

const TemplateSelector = ({ setTemplate }) => {
  return (
    <div className="template-selector">
      <h3>Select Template</h3>
      <button onClick={() => setTemplate('template1')}>Template 1</button>
      <button onClick={() => setTemplate('template2')}>Template 2</button>
      <button onClick={() => setTemplate('template3')}>Template 3</button>
    </div>
  );
};

export default TemplateSelector;
