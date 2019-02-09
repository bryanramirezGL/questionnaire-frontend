import { IAddress } from './address.model';

export interface IPerson {
  id?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  suffix?: string;
  ssn?: string;
  birthDate?: string;
  birthPlace?: string;
  birthCountry?: string;
  address?: IAddress;
}
