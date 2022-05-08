import { baseFetch } from "../../baseFetch";

export const getContactsFetch = async (_ = "", thunkApi: { rejectWithValue: (arg0: unknown) => void }) => {
  try {
    return await baseFetch({
      url: "contacts",
      method: "GET",
    });
  } catch (err: unknown) {
    return thunkApi.rejectWithValue(typeof err === "object" ? err : "Unknown Error");
  }
};
