import { IContact } from "../IContact";

export interface IAuthSlice {
  loading: boolean;
  contacts: IContact[];
  totalContacts: number;
}
