import { v4 as uuidv4 } from 'uuid';
export default class FormGroup {
    constructor( name, label, type, value = '') {
      this.uuid = new uuidv4();
      this.name = name;
      this.label = label;
      this.type = type;
      this.value = value;
    }
  }