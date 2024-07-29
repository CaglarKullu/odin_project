import React, { useEffect } from 'react';
import './TemplateOne.css';

const TemplateOne = ({ formData, color }) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--main-color', color);
  }, [color]);

  return (
    <div className="template1">
      <div className="sidebar">
        <h3>{formData.personalInfo[0][0].value}</h3>
        <p>{formData.personalInfo[0][1].value}</p>
        <div className="section">
          <h3>Contact</h3>
          <p>Phone: {formData.personalInfo[0][2].value}</p>
          <p>Email: {formData.personalInfo[0][3].value}</p>
          <p>LinkedIn: {formData.personalInfo[0][4]?.value}</p>
          <p>Github: {formData.personalInfo[0][5]?.value}</p>
        </div>
        <div className="section">
          <h3>Skills</h3>
          <p>{formData.personalInfo[0][6].value}</p>
        </div>
      </div>
      <div className="content">
        <div className="preview-section">
          <h3>Experience</h3>
          {formData.workExperience.map((group, index) => (
            <div key={index} className="experience-item">
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
            <div key={index} className="education-item">
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

export default TemplateOne;
