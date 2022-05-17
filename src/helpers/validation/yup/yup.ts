import * as yup from "yup";
import { emailRegexp, phoneRegexp } from "../regexp/regexp";
import i18next from "i18next";

export const schemaSignIn = yup.object().shape({
  email: yup.string().required(i18next.t("requiredField")).matches(emailRegexp, i18next.t("enterEmail")),
  password: yup
    .string()
    .required(i18next.t("requiredField"))
    .min(8, i18next.t("minimalSymbols") + "- 8")
    .max(20, i18next.t("maximumSymbols") + "- 20"),
});

export const schemaSignUp = yup.object().shape({
  email: yup.string().required(i18next.t("requiredField")).matches(emailRegexp, i18next.t("enterEmail")),
  password: yup
    .string()
    .required(i18next.t("requiredField"))
    .min(8, i18next.t("minimalSymbols") + "- 8")
    .max(20, i18next.t("maximumSymbols") + "- 20"),
  passwordConfirmation: yup
    .string()
    .required(i18next.t("requiredField"))
    .oneOf([yup.ref("password"), null], i18next.t("passwordsMatch")),
  firstName: yup
    .string()
    .required(i18next.t("requiredField"))
    .max(32, i18next.t("maximumSymbols") + "- 32"),
});

export const schemaContactsAdd = yup.object().shape({
  name: yup.string().required(i18next.t("requiredField")),
  username: yup
    .string()
    .required(i18next.t("requiredField"))
    .min(1, i18next.t("minimalSymbols") + "- 1")
    .max(20, i18next.t("maximumSymbols") + "- 20"),
  phone: yup.string().required(i18next.t("requiredField")).matches(phoneRegexp, "Пожалуйста, ввведите номер телефона"),
});
