import React, { useState } from "react";
import { FormInput } from "../../components/formInput/formInput";
import { IFormSignUp } from "../../api/dto/IFormInput";
import { Checkbox } from "../../components/checkbox/checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignUp } from "../../helpers/validation/yup/yup";
import { CustomButton } from "../../components/button/customButton";

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
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
};
