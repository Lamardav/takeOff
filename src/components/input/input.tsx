import * as React from "react";
import { InputHTMLAttributes } from "react";
import { useController, UseControllerProps } from "react-hook-form";

export const Input = <T,>(props: Pick<UseControllerProps<T>, "control" | "name">) => {
  const { control, name } = props;
  const { field } = useController({ control, name });

  return <input {...(field as InputHTMLAttributes<any>)} />;
};
