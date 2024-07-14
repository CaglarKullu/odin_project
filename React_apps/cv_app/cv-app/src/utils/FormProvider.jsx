// FormContext.js
import React, { createContext, useContext, useState } from 'react';
import FormGroup from '../models/FormGroupData.js';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalInfo: [
      new FormGroup('name', 'Name', 'text', ''),
      new FormGroup('summary', 'Professional Summary', 'textarea', ''),
      new FormGroup('email', 'Email', 'email', ''),
      new FormGroup('phone', 'Phone', 'tel', '')
    ],
    workExperience: [
      new FormGroup('jobTitle', 'Job Title', 'text', ''),
      new FormGroup('company', 'Company', 'text', ''),
      new FormGroup('location', 'Location', 'text', ''),
      new FormGroup('startDate', 'Start Date', 'date', ''),
      new FormGroup('endDate', 'End Date', 'date', ''),
      new FormGroup('description', 'Description', 'textarea', '')
    ],
    education: [
      new FormGroup('school', 'School', 'text', ''),
      new FormGroup('degree', 'Degree', 'text', ''),
      new FormGroup('startDate', 'Start Date', 'date', ''),
      new FormGroup('endDate', 'End Date', 'date', ''),
      new FormGroup('description', 'Description', 'textarea', '')
    ]
  });

  const updateFormData = (section, index, value) => {
    setFormData(prevData => {
      const newData = { ...prevData };
      newData[section][index].value = value;
      return newData;
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
