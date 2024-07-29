export default class FormGroup {
    constructor( name, label, type, value = '') {
      this.name = name;
      this.label = label;
      this.type = type;
      this.value = value;
    }
  }