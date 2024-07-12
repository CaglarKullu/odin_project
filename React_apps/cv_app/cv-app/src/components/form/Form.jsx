import React, { useState } from 'react';
import ExpandableTile from '../expandable_tile/ExpandableTile';
import './Form.css';
import FormGroup from '../../models/FormGroupData.js';

const Form = () => {

  const personalInfo = [
    new FormGroup('name', 'Name', 'text', ''),
    new FormGroup('summary', 'Proffessional Summary', 'textarea', ''),
    new FormGroup('', 'Email', 'email', ''),
    new FormGroup('phone', 'Phone', 'tel', '')
  ];

  const workExperience = [
    new FormGroup('jobTitle', 'Job Title', 'text', ''),
    new FormGroup('company', 'Company', 'text', ''),
    new FormGroup('location', 'Location', 'text', ''),
    new FormGroup('startDate', 'Start Date', 'date', ''),
    new FormGroup('endDate', 'End Date', 'date', ''),
    new FormGroup('description', 'Description', 'textarea', '')
  ];

  const education = [
    new FormGroup('school', 'School', 'text', ''),
    new FormGroup('degree', 'Degree', 'text', ''),
    new FormGroup('startDate', 'Start Date', 'date', ''),
    new FormGroup('endDate', 'End Date', 'date', ''),
    new FormGroup('description', 'Description', 'textarea', '')
  ];
  return (
    <div className="Form">
      <h2>Form</h2>
      <h3>Please enter your details to generate your CV</h3>
      <ExpandableTile header="Personal Information" formGroups={personalInfo} showAddButton={false}/>
      <ExpandableTile header="Work Experience" formGroups={workExperience} showAddButton={true}/>
      <ExpandableTile header="Education" formGroups={education} showAddButton={true} />
    </div>
  )
}

export default Form