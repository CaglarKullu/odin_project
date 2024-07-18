import FormGroup  from './FormGroupData';
export default class FormGroupList {
    constructor() {
      this.formGroups = [];
    }
  
    addFormGroup(name, label, type, value = '') {
      const formGroup = new FormGroup(name, label, type, value);
      this.formGroups.push(formGroup);
    }
  
    removeFormGroup(name) {
      this.formGroups = this.formGroups.filter(formGroup => formGroup.name !== name);
    }
  
    getFormGroup(name) {
      return this.formGroups.find(formGroup => formGroup.name === name);
    }
  
    getAllFormGroups() {
      return this.formGroups;
    }
  
    updateFormGroup(name, newProperties) {
      const formGroup = this.getFormGroup(name);
      if (formGroup) {
        Object.assign(formGroup, newProperties);
      }
    }
  }