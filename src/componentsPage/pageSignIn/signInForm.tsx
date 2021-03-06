import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { IFormSignIn } from "../../api/dto/IFormInput";
import { FormInput } from "../../components/formInput/formInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignIn } from "../../helpers/validation/yup/yup";
import styled from "styled-components";
import { CustomButton } from "../../components/button/customButton";
import { theme } from "../../assets/theme/theme";
import { Link } from "react-router-dom";
import { authRoutes } from "../../core/routes/path/authRoutes";
import { useAppDispatch } from "../../core/redux/store/store";
import { useNavigate } from "react-router";
import { authDispatches } from "../../core/redux/thunk/authThunk";
import { contactsRoutes } from "../../core/routes/path/listRoutes";
import { addToLocalStorage } from "../../helpers/hook/adduserToLocalStorage";
import { useTranslation } from "react-i18next";
import { ErrToast } from "../../components/toast/toast";

export const SignInForm = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormSignIn>({
    mode: "onSubmit",
    resolver: yupResolver(schemaSignIn),
  });

  const onSubmit = useCallback(
    (data: IFormSignIn) => {
      dispatch(authDispatches.logIn(data))
        .then((res) => {
          if (res.payload) {
            addToLocalStorage<IFormSignIn>(data);
            history(contactsRoutes.contacts.link);
          } else {
          }
        })
        .catch(() => ErrToast("Неверные данные"));
    },
    [dispatch, history]
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
      <FormInput<IFormSignIn> control={control} name="email" errors={errors.email} />
      <FormInput<IFormSignIn> control={control} name="password" errors={errors.password} type={"password"} />

      <Button typeButton={"red"} type={"submit"} value={t("signIn")} />
      <Register>
        {t("notMemberYet")} &nbsp;<CustomLink to={authRoutes.signup.link}>{t("signUp")}</CustomLink>&nbsp;
      </Register>
    </Form>
  );
};

const Form = styled.form`
  width: 25.06vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    width: 80vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    width: 90vw;
  }
`;

const Button = styled(CustomButton)`
  margin-top: 1.1vw;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    margin-top: 2.5vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    margin-top: 2.9vw;
  }
`;

const Register = styled.div`
  color: ${theme.colors.white};
  font-size: 0.72vw;
  text-align: center;
  margin-top: 1.2vw;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: 1.92vw;
    margin-top: 3.9vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: 3.6vw;
    margin-top: 7vw;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.red};
`;
