import React from "react";
import { Input } from "../input/input";
import { MultipleFieldErrors, UseControllerProps } from "react-hook-form";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";

interface IProps {
  errors?: { type?: string; message?: string; types?: MultipleFieldErrors } | undefined;
}

export const FormInput = <T,>(props: IProps & Pick<UseControllerProps<T>, "control" | "name">) => {
  const { control, name, errors } = props;

  return (
    <Content>
      <Input control={control} name={name} />
      {errors ? <p> {errors.message}</p> : null}
    </Content>
  );
};

const Content = styled.div`
  background: ${theme.colors.white};
  color: ${theme.colors.black};
`;
