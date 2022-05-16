import { IContact } from "../IContact";

export interface IContactshSlice {
  loading: boolean;
  contacts: IContact[];
  totalContacts: number;
  pageSize: 5;
  searchVal: "";
}
