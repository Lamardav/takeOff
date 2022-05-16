import { baseFetch } from "../../baseFetch";
import { IDeleteContact, IGetAllContacts, IGetContacts, IUpdateContact } from "../../dto/ISlices/IContactsSlice";
import { IContact } from "../../dto/IContact";

export const getContactsFetch = async (
  params: IGetContacts,
  thunkApi: { rejectWithValue: (arg0: unknown) => void }
) => {
  try {
    return await baseFetch({
      url: `contacts?_limit=${params.pageSize}`.concat(params.searchVal && `&name_like=${params.searchVal}`),
      method: "GET",
    });
  } catch (err: unknown) {
    return thunkApi.rejectWithValue(typeof err === "object" ? err : "Unknown Error");
  }
};

export const deleteContactFetch = async (
  params: IDeleteContact,
  thunkApi: { rejectWithValue: (arg0: unknown) => void }
) => {
  try {
    return await baseFetch({
      url: `contacts/${params.id}`,
      method: "DELETE",
    });
  } catch (err: unknown) {
    return thunkApi.rejectWithValue(typeof err === "object" ? err : "Unknown Error");
  }
};

export const updateContactFetch = async (
  { id, ...rest }: IUpdateContact,
  thunkApi: { rejectWithValue: (arg0: unknown) => void }
) => {
  try {
    return await baseFetch({
      url: `contacts/${id}`,
      method: "PUT",
      body: JSON.stringify({ ...rest }),
    });
  } catch (err: unknown) {
    return thunkApi.rejectWithValue(typeof err === "object" ? err : "Unknown Error");
  }
};

export const addContactFetch = async (
  params: Omit<IContact, "id">,
  thunkApi: { rejectWithValue: (arg0: unknown) => void }
) => {
  try {
    return await baseFetch({
      url: "contacts",
      method: "POST",
      body: JSON.stringify({ ...params }),
    });
  } catch (err: unknown) {
    return thunkApi.rejectWithValue(typeof err === "object" ? err : "Unknown Error");
  }
};

export const getAllContactsFetch = async (
  params: IGetAllContacts,
  thunkApi: { rejectWithValue: (arg0: unknown) => void }
) => {
  try {
    return await baseFetch({
      url: "contacts".concat(params.searchVal && `?name_like=${params.searchVal}`),
      method: "GET",
    });
  } catch (err: unknown) {
    return thunkApi.rejectWithValue(typeof err === "object" ? err : "Unknown Error");
  }
};
