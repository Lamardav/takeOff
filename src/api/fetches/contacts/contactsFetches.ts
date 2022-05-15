import { baseFetch } from "../../baseFetch";

interface IGetContacts {
  pageSize: number;
}
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
