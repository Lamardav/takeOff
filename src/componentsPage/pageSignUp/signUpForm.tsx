import React, { useState } from "react";
import { FormInput } from "../../components/formInput/formInput";
import { IFormSignUp } from "../../api/dto/IFormInput";
import { Checkbox } from "../../components/checkbox/checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignUp } from "../../helpers/validation/yup/yup";
import { CustomButton } from "../../components/button/customButton";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { Link } from "react-router-dom";
import { authRoutes } from "../../core/routes/path/authRoutes";

export const SignUpForm = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormSignUp>({
    mode: "onSubmit",
    resolver: yupResolver(schemaSignUp),
  });
  const onSubmit = (data: IFormSignUp) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput<IFormSignUp> control={control} name="email" errors={errors.email} />
      <FormInput<IFormSignUp> control={control} name="firstName" errors={errors.firstName} />
      <FormInput<IFormSignUp> control={control} name="password" type={"password"} errors={errors.password} />
      <FormInput<IFormSignUp>
        control={control}
        name="passwordConfirmation"
        errors={errors.passwordConfirmation}
        type={"password"}
      />
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        label={
          <>
            <p>Подтвердив, вы согласитесь на персональную обработку ваших данных</p>
          </>
        }
      />
      <CustomButton typeButton={"red"} type={"submit"} value={"Зарегистрироваться"} withGap disabled={!checked} />
      <Register>
        Уже зарегистрированы? &nbsp;<CustomLink to={authRoutes.signin.link}>Войти</CustomLink>&nbsp;
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
