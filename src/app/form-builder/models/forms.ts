export interface DynamicFormConfig {
  type: 'text' | 'number';
  name: string;
  label?: string;
  hint?: string;
  placeholder?: string;
  required?: boolean;
}
