import * as React from "react";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { IconEyeClosed } from "../../assets/icons/iconEyeClosed";
import { IconEyeOpen } from "../../assets/icons/iconEyeOpen";

interface IProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> {
  field?: Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">;
  label?: string;
  error?: boolean;
}

export const Input = (props: IProps) => {
  const [type, setType] = useState(props.type || "text");

  return (
    <Container>
      <Label>
        {props.label} {props.required && " *"}
      </Label>

      <InputWrapper>
        <InputStyle
          error={!!props.error}
          {...props}
          type={type}
          value={props.value || ""}
          {...props.field}
          autoComplete={"off"}
        />

        {props.type === "password" && (
          <HideShowEye onClick={() => setType(type === "text" ? "password" : "text")}>
            {type === "text" ? <IconEyeOpen /> : <IconEyeClosed />}
          </HideShowEye>
        )}
      </InputWrapper>
    </Container>
  );
};

const Container = styled.label`
  display: block;
  position: relative;
  width: 100%;
`;

export const InputStyle = styled.input<{ error?: boolean; lightStyle?: boolean; paddingPosition?: "right" | "left" }>`
  outline: none;
  box-sizing: border-box;
  font-size: 0.83vw;
  width: 100%;
  height: 2.5vw;
  border: 0.05vw solid;
  border-color: ${({ error, lightStyle }) => theme.colors[error ? "red" : lightStyle ? "grayLight" : "grayDark"]};
  padding-right: ${({ paddingPosition }) => (paddingPosition === "right" ? "2.5vw" : "0.83vw")};
  padding-left: ${({ paddingPosition }) => (paddingPosition === "left" ? "2.05vw" : "0.83vw")};
  background-color: ${({ lightStyle }) => theme.colors[lightStyle ? "grayLightest" : "blackLight"]};
  color: ${({ lightStyle }) => theme.colors[lightStyle ? "black" : "white"]};
  border-radius: 0;
  appearance: unset;
  font-weight: 400;

  ::placeholder {
    color: ${theme.colors.gray};
  }

  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    border-width: 0.2vw;
    height: 7vw;
    font-size: 2vw;
    padding-right: ${({ paddingPosition }) => (paddingPosition === "right" ? "6.05vw" : "2.09vw")};
    padding-left: ${({ paddingPosition }) => (paddingPosition === "left" ? "6.05vw" : "2.09vw")};
  }

  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    height: 12.8vw;
    font-size: 4.27vw;
    padding-right: ${({ paddingPosition }) => (paddingPosition === "right" ? "12.5vw" : "3.74vw")};
    padding-left: ${({ paddingPosition }) => (paddingPosition === "left" ? "12.5vw" : "3.74vw")};
  }

  &:disabled {
    color: ${theme.colors.grayDark};
  }

  &[type="date"] {
    cursor: pointer;
    font-size: 0.83vw;
    border: 0.05vw solid ${theme.colors.grayDark};
    box-sizing: border-box;
    padding: 0.597vw 0.83vw;
    border: ${(props) => (props.error ? `0.05vw solid ${theme.colors.red}` : `0.05vw solid ${theme.colors.grayDark}`)};

    @media screen and (max-width: ${theme.rubberSize.desktop}) {
      font-size: 4.27vw;
      margin-bottom: 3.2vw;
      padding: 3.045vw 4.27vw;
    }
  }
`;

const Label = styled.div`
  font-size: 0.83vw;
  line-height: 1.24vw;
  color: ${theme.colors.grayDark};

  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: 2.08vw;
    line-height: 2.6vw;
  }

  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: 4.26vw;
    line-height: 5.33vw;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const HideShowEye = styled.span`
  position: absolute;
  font-size: 1.25vw;
  right: 0.625vw;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.black};
  display: flex;

  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    right: 1.56vw;
    font-size: 3.12vw;
  }

  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    right: 3.2vw;
    font-size: 6.4vw;
  }
`;
