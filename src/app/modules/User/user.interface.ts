import { IMedicine } from "../Medicine/med.interface";

export interface IUser {
  id?: string;
  name: string;
  age: number;
  relation: string;
  image?: string;
  medicines?: IMedicine[];
}
