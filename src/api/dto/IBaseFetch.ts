type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface IBaseFetch {
  url: string;
  method: Method;
  headers?: HeadersInit;
  body?: BodyInit;
}
