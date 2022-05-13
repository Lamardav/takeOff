import * as yup from "yup";
import { emailRegexp } from "../regexp/regexp";

export const schemaSignIn = yup.object().shape({
  email: yup.string().required("Данное поле является обязательным").matches(emailRegexp, "Пожалуйста, ввведите email"),
  password: yup
    .string()
    .required("Данное поле является обязательным")
    .min(8, "Минимальное количество символов - 8")
    .max(20, "Максимальное количество символов - 20"),
});
