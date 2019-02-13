import { IPerson } from './person.model';

export interface IFormField {
  id?: string;
  label?: string;
  description?: string;
  type?: string;
  required?: number;
  value?: string;
  key?: string;
}

export interface IFormSection {
  name?: string;
  description?: string;
  fields?: IFormField[];
}

export interface IForm {
  id?: string;
  sections?: IFormSection[];
  name?: string;
  description?: string;
}

export interface IQuestionnaire {
  id?: number;
  person?: IPerson;
  submitDate?: string;
  status?: string;
  form: IForm;
}
