import { IPerson } from './person.model';

export interface IQuestionnaire {
    id: number;
    content: string;
    submitDate: Date;
    person: IPerson;
}
