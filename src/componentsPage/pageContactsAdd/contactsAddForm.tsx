import React, { useCallback } from "react";
import { FormInput } from "../../components/formInput/formInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaContactsAdd } from "../../helpers/validation/yup/yup";
import { CustomButton } from "../../components/button/customButton";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../core/redux/store/store";
import { ErrToast, UIToastContainer } from "../../components/toast/toast";
import { IContact } from "../../api/dto/IContact";
import { contactsDispatches } from "../../core/redux/thunk/contactsThunk";
import { useTranslation } from "react-i18next";

export const ContactsAddForm = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IContact>({
    mode: "onSubmit",
    resolver: yupResolver(schemaContactsAdd),
  });

  const onSubmit = useCallback(
    (data: IContact) => {
      dispatch(contactsDispatches.addContact(data))
        .then((res) => {
          if (res.payload) {
          }
        })
        .catch(() => ErrToast("Ошибка Сервера!"));
    },
    [dispatch, history]
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput<IContact> control={control} name="name" errors={errors.name} />
      <FormInput<IContact> control={control} name="username" errors={errors.username} />
      <FormInput<IContact> control={control} name="phone" errors={errors.phone} />
      <CustomButton typeButton={"red"} type={"submit"} value={`${t("create")}`} withGap />
      <UIToastContainer />
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
