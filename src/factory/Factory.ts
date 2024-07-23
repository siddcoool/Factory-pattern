import Button from "./button";
import TextBox from "./input";

export interface FormField {
  component: string;
  key: string;
  type?: string;
  label?: string;
  required?: boolean;
  initial_value?: string;
}

class Factory {
  schema: FormField;

  constructor(schema: FormField) {
    this.schema = schema;
  }
  create() {
    switch (this.schema.component) {
      case "TextBox":
        
        return TextBox

      case "Button":
        return Button

      default:
        break;
    }
  }
}

export default Factory;
