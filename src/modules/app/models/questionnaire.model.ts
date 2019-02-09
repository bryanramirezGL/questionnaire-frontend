export interface IFormField {
  id?: string;
  label?: string;
  description?: string;
  requred: boolean;
  value: string;
}

export interface IFormSection {
  name?: string;
  description?: string;
  fields?: IFormField[];
}

export interface IForm {
  id?: string;
  sections?: IFormSection[];
}

export interface IQuestionnaire {
  id?: number;
  person_id?: string;
  submitDate?: string;
  status?: string;
  form: IForm;
}
