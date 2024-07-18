import React from 'react';
import ExpandableTile from '../expandable_tile/ExpandableTile';
import { FormProvider } from '../../utils/FormProvider';
import './Form.css';

const Form = () => {
  return (
    <FormProvider>
      <div className="Form">
        <h2>Form</h2>
        <h3>Please enter your details to generate your CV</h3>
        <ExpandableTile header="Personal Information" section="personalInfo" showAddButton={false} />
        <ExpandableTile header="Work Experience" section="workExperience" showAddButton={true} showDeleteButton={true}/>
        <ExpandableTile header="Education" section="education" showAddButton={true}  showDeleteButton={true}/>
      </div>
    </FormProvider>
  );
};

export default Form;
