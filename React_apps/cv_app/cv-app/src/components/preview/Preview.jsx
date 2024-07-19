import React from 'react';
import { useFormContext } from '../../utils/FormProvider';
import './Preview.css';

const Preview = () => {
  const { formData, updateFormData, addNewSection, deleteSection } = useFormContext();

  return (
    <div className="Preview">
      <h2>Preview</h2>
      
      <div className="preview-section">
        <h3>Personal Info</h3>
        {formData.personalInfo.map((group, index) => (
          <div key={index}>
            {group.map((field, fieldIndex) => (
              <div key={fieldIndex}>
                <strong>{field.label}:</strong> {field.value}
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
                <strong>{field.label}:</strong> {field.value}
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
                <strong>{field.label}:</strong> {field.value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
