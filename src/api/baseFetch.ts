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
//
// export class BaseRequest {
//   static handleError = async (error: Record<string, any>) => {
//     const err = { Status: error.status } as IHttpErro;
//     console.log("ERROR: ", error);
//
//     throw new HttpError(err);
//   };
//
//   protected baseurl = "http://localhost:3001/";
//
//   static token = "";
//   private static _profileInfo: AuthenticationTokenDto | null = null;
//   static get profileInfo() {
//     return BaseRequest._profileInfo;
//   }
//   static setProfileInfo(info: AuthenticationTokenDto) {
//     BaseRequest._profileInfo = info;
//   }
//   static clearProfileInfo() {
//     BaseRequest._profileInfo = null;
//   }
//
//   fetch(url: string, config: Record<string, any>): Promise<any> {
//     let headers = {};
//
//     const language = config?.["Accept-Language"] ? config?.["Accept-Language"] : getAcceptLanguage();
//
//     if (config.headers != undefined) {
//       config.headers.set("Accept-Language", language);
//       if (BaseRequest.profileInfo) {
//         config.headers.set("mmk", BaseRequest.profileInfo.userId);
//       }
//     } else {
//       headers = {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//         "Accept-Language": language,
//         ...(BaseRequest.profileInfo ? { mmk: BaseRequest.profileInfo.userId } : {}),
//       };
//     }
//
//     const configExists = config != undefined;
//     const abort = configExists ? config.abort : false;
//     delete config.abort;
//
//     const signal = AbortHub.instance.getSignal(url, abort);
//
//     return fetch(this.baseurl + url, Object.assign({ headers, signal }, config)).then((response) => {
//       if (!response.status || response.status < 200 || response.status >= 300) {
//         if (response.status == 401 && url !== "/api/Authentication/logout" && !isPublicPage()) {
//           eventRegister.emitEvent(EventNames.logout);
//         }
//         throw response;
//       }
//       return response;
//     });
//   }
//
//   protected q(params: { [key: string]: string | number | boolean | Date | null }): string {
//     const query = Object.keys(params)
//       .filter((k) => params[k] != null)
//       .map((k) => `${k}=${encodeURIComponent(assertNotNull(params[k]).toString())}`)
//       .join("&");
//
//     return query ? `?${query}` : "";
//   }
//
//   getObjectFlatter(): (node: Record<string, any>, parentName?: string) => string {
//     const flatObject: Record<string, any> = {};
//
//     return function objectToFlat(node: Record<string, any>, parentName = ""): string {
//       Object.keys(node).forEach((key) => {
//         const newKey = parentName ? parentName + "." + key : key;
//         node[key] instanceof Object ? objectToFlat(node[key], newKey) : (flatObject[newKey] = node[key]);
//       });
//
//       return Object.keys(flatObject).reduce((q, key) => {
//         // Изменил key на key.replace(/.[0-9]{1,}/g,"") что бы убрать .0 .1 .2 ... в query params
//         return flatObject[key] ? `${q}${!!q ? "&" : "?"}${key.replace(/.[0-9]{1,}/g, "")}=${flatObject[key]}` : q;
//       }, "");
//     };
//   }
// }
