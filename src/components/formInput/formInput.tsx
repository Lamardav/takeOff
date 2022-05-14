import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { MultipleFieldErrors, useController, UseControllerProps } from "react-hook-form";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { Input } from "../input/input";

interface IProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> {
  errors?: { type?: string; message?: string; types?: MultipleFieldErrors } | undefined;
}

export const FormInput = <T,>({
  control,
  name,
  errors,
  ...rest
}: IProps & Pick<UseControllerProps<T>, "control" | "name">) => {
  const { field } = useController({ control, name });

  return (
    <Content>
      <Label>{name}</Label>
      <Input
        field={field as Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">}
        {...rest}
        error={errors && "message" in errors}
      />
      {errors ? <P> {errors.message}</P> : null}
    </Content>
  );
};

const Content = styled.div`
  margin-bottom: 1.9vw;
  position: relative;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    margin-bottom: 3.9vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    margin-bottom: 7.2vw;
  }
`;

const Label = styled.p`
  font-size: 0.83vw;
  margin: 0 0 0.21vw;
  color: ${theme.colors.gray};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    margin-bottom: 0.52vw;
    font-size: 2.09vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: 4.27vw;
    margin-bottom: 1.07vw;
  }
`;

const P = styled.p`
  margin: 0;
  position: absolute;
  color: ${theme.colors.red};
  top: calc(100% + 0.16vw);
  z-index: 30;
  font-size: 0.83vw;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: 2.09vw;
    top: calc(100% + 0.34vw);
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: 4.27vw;
    top: calc(100% + 0.58vw);
  }
`;
