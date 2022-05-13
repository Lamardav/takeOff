import React from "react";
import { useForm } from "react-hook-form";
import { IFormInput } from "../../api/dto/IFormInput";
import { FormInput } from "../../components/formInput/formInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignIn } from "../../helpers/validation/yup/yup";

export const SignInForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onSubmit",
    resolver: yupResolver(schemaSignIn),
  });
  const onSubmit = (data: IFormInput) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      email <FormInput<IFormInput> control={control} name="email" errors={errors.email} />
      password
      <FormInput<IFormInput> control={control} name="password" errors={errors.password} />
      <input type="submit" />
    </form>
  );
};
