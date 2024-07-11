import React, { forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGraduationCap, faBriefcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Preview.css';

const Preview = forwardRef(({ cvData }, ref) => {
  return (
    <div ref={ref} className="preview-container">
      <h2 className="preview-name">{cvData.name}</h2>
      <h4 className="preview-title">Professional Summary</h4>
      <p className="preview-summary">
        Passionate and goal-driven financial analyst with over 3 years of experience in financial planning, analysis, and projection. Proven ability to support financial operations and analysis of multiple projects.
      </p>

      <div className="preview-section">
        <h3 className="preview-section-title"><FontAwesomeIcon icon={faEnvelope} /> Contact Information</h3>
        <p><FontAwesomeIcon icon={faPhone} /> {cvData.phone}</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> {cvData.email}</p>
      </div>

      <div className="preview-section">
        <h3 className="preview-section-title"><FontAwesomeIcon icon={faBriefcase} /> Experience</h3>
        <p>{cvData.experience}</p>
      </div>

      <div className="preview-section">
        <h3 className="preview-section-title"><FontAwesomeIcon icon={faGraduationCap} /> Education</h3>
        <p>{cvData.education}</p>
      </div>
    </div>
  );
});

export default Preview;