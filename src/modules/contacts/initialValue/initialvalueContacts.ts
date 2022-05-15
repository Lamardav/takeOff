import { IAuthSlice } from "../../../api/dto/ISlices/IAuthSlice";

export const initialContacts: IAuthSlice = {
  loading: false,
  contacts: [],
  totalContacts: 0,
};
