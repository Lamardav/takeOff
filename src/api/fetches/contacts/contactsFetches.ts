import { baseFetch } from "../../baseFetch";
import { IDeleteContact, IGetContacts, IUpdateContact } from "../../dto/ISlices/IContactsSlice";

export const getContactsFetch = async (
  params: IGetContacts,
  thunkApi: { rejectWithValue: (arg0: unknown) => void }
) => {
  try {
    return await baseFetch({
      url: `contacts?_limit=${params.pageSize}`,
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

export const getAllContactsFetch = async (_ = {}, thunkApi: { rejectWithValue: (arg0: unknown) => void }) => {
  try {
    return await baseFetch({
      url: "contacts",
      method: "GET",
    });
  } catch (err: unknown) {
    return thunkApi.rejectWithValue(typeof err === "object" ? err : "Unknown Error");
  }
};
