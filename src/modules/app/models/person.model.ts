import { IAddress } from './address.model';
import { IQuestionnaire } from './questionnaire.model';

export interface IPerson {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  email: string;
  ssn: number;
  birthDate: Date;
  birthPlace: Date;
  birthCountry: string;
  address: IAddress;
  questionnaire: IQuestionnaire;
}
