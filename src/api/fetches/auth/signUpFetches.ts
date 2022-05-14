import { IFormSignIn } from "../../dto/IFormInput";
import "react-toastify/dist/ReactToastify.css";
import { baseFetch } from "../../baseFetch";

export const signUpFetch = async (data: IFormSignIn, thunkApi: { rejectWithValue: (arg0: unknown) => void }) => {
  try {
    return await baseFetch({
      url: "register",
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (err: unknown) {
    return thunkApi.rejectWithValue(typeof err === "object" ? err : "Unknown Error");
  }
};
