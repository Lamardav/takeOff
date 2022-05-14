import { baseFetch } from "../../baseFetch";
import { IFormSignIn } from "../../dto/IFormInput";

export const signInFetch = async (data: IFormSignIn, thunkApi: { rejectWithValue: (arg0: unknown) => void }) => {
  try {
    return await baseFetch({
      url: "signin",
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (err: unknown) {
    return thunkApi.rejectWithValue(typeof err === "object" ? err : "Unknown Error");
  }
};
