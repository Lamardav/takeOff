import { IContactshSlice } from "../../../api/dto/ISlices/IAuthSlice";

export const initialContacts: IContactshSlice = {
  loading: false,
  contacts: [],
  totalContacts: 0,
  pageSize: 5,
  searchVal: "",
};
