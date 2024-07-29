import React, { createContext, useContext, useState } from 'react';
import FormGroup from '../models/FormGroupData.js';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalInfo: [
      [
      new FormGroup('name', 'Name', 'text', ''),
      new FormGroup('summary', 'Professional Summary', 'textarea', ''),
      new FormGroup('email', 'Email', 'email', ''),
      new FormGroup('phone', 'Phone', 'tel', ''),
      new FormGroup('linkedin', 'LinkedIn', 'text', ''),
      new FormGroup('github', 'GitHub', 'text', ''),
      new FormGroup('skills', 'Skills', 'textarea', '')
      ]
    ],
    workExperience: [
      [
        new FormGroup('jobTitle', 'Job Title', 'text', ''),
        new FormGroup('company', 'Company', 'text', ''),
        new FormGroup('location', 'Location', 'text', ''),
        new FormGroup('startDate', 'Start Date', 'date', ''),
        new FormGroup('endDate', 'End Date', 'date', ''),
        new FormGroup('description', 'Description', 'textarea', '')
      ]
    ],
    education: [
      [
        new FormGroup('school', 'School', 'text', ''),
        new FormGroup('degree', 'Degree', 'text', ''),
        new FormGroup('startDate', 'Start Date', 'date', ''),
        new FormGroup('endDate', 'End Date', 'date', ''),
        new FormGroup('description', 'Description', 'textarea', '')
      ]
    ]
  });

  const updateFormData = (section, index, value, fieldIndex) => {
    setFormData(prevData => {
      const newData = { ...prevData };
      newData[section][index][fieldIndex].value = value;
      return newData;
    });
  };

  const addFormGroup = (section, newGroup) => {
    setFormData(prevData => {
      const newData = { ...prevData };
      newData[section] = [...newData[section], newGroup];
      return newData;
    });
  };

  const addNewSection = (section) => {
    const defaultGroups = {
      personalInfo: [
        new FormGroup('name', 'Name', 'text', ''),
        new FormGroup('summary', 'Professional Summary', 'textarea', ''),
        new FormGroup('email', 'Email', 'email', ''),
        new FormGroup('phone', 'Phone', 'tel', ''),
        new FormGroup('linkedin', 'LinkedIn', 'text', ''),
        new FormGroup('github', 'GitHub', 'text', ''),
        new FormGroup('skills', 'Skills', 'textarea', '')
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
    };

    addFormGroup(section, defaultGroups[section]);
  };

  const deleteSection = (section, index) => {
    setFormData(prevData => {
      const newData = { ...prevData };
      if (newData[section].length === 1) {
        window.alert('Cannot delete the last section');
        return newData;
      }
      if(window.confirm('Are you sure you want to delete this section?')) {
        newData[section] = newData[section].filter((_, i) => i !== index);
        return newData;
      }
      return prevData;
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, addNewSection, deleteSection }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
