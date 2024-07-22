import React, { useState } from 'react';
import { useFormContext } from '../../utils/FormProvider';
import TemplateSelector from './templete_selector/TempleteSelector';
import './Preview.css';
import './templete_selector/TemplateSelector.css';

const Preview = () => {
  const { formData } = useFormContext();
  const [template, setTemplate] = useState('template1');

  return (
    <div className={`preview ${template}`} id='Preview'>
      <TemplateSelector setTemplate={setTemplate} />
      <h2>Preview</h2>
      <div id="preview-content">
        <div className="preview-section">
          <h3>Personal Info</h3>
          {formData.personalInfo.map((group, index) => (
            <div key={index}>
              {group.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  <strong>{field.label}:</strong> <span>{field.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="preview-section">
          <h3>Work Experience</h3>
          {formData.workExperience.map((group, index) => (
            <div key={index}>
              {group.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  <strong>{field.label}:</strong> <span>{field.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="preview-section">
          <h3>Education</h3>
          {formData.education.map((group, index) => (
            <div key={index}>
              {group.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  <strong>{field.label}:</strong> <span>{field.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
