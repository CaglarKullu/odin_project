import React from 'react';
import './TemplateTwo.css';

const TemplateTwo = ({ formData }) => (
  <div className="template2">
    <div className="header">
      <h2>{formData.personalInfo[0][0].value}</h2>
      <p>{formData.personalInfo[0][1].value}</p>
    </div>
    <div className="sidebar">
      <div className="section">
        <h3>Contact</h3>
        <p>Phone: {formData.personalInfo[0][2].value}</p>
        <p>Email: {formData.personalInfo[0][3].value}</p>
        <p>LinkedIn: {formData.personalInfo[0][4]?.value}</p>
      </div>
      <div className="section">
        <h3>Skills</h3>
        {formData.skills?.map((skill, index) => (
          <p key={index}>{skill.value}</p>
        ))}
      </div>
      <div className="section">
        <h3>Languages</h3>
        {formData.languages?.map((language, index) => (
          <p key={index}>{language.value}</p>
        ))}
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

export default TemplateTwo;
