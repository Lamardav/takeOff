import { IBaseFetch } from "./dto/IBaseFetch";

const api_Url = "http://localhost:3001/";
const token = "01G2FJJ49MKYR4B6354ACMRMRT01G2FJJ6BDXEJ18DVZXEP51Y74";

export const baseFetch = async ({ url = "", method = "GET", headers = {}, body }: IBaseFetch) => {
  const queryUrl = new URL(api_Url + url);
  try {
    const response = await fetch(queryUrl.toString(), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        ...headers,
      },
      method,
      body,
    });
    if (response.ok) {
      return response.json();
    }
    console.log(response);

    if (!response.ok) {
      switch (response.status) {
        case 403:
          throw new Error("Error authorization");
        case 409:
          throw new Error("Conflict error");
        default:
          throw new Error("Error!");
      }
    }
  } catch (e: any) {
    console.log(e.message);
  }
};
