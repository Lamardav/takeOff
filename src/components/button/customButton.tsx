import styled from "styled-components";
import { theme } from "../../assets/theme/theme";

interface IProps {
  typeButton: "red" | "opacity";
  withGap?: boolean;
  disabled?: boolean;
}

export const CustomButton = styled.input<IProps>`
  border: 1px solid
    ${({ typeButton, disabled }) =>
      typeButton === "opacity" ? theme.colors.white : disabled ? theme.colors.grayDark : theme.colors.red};
  background: ${({ typeButton, disabled }) =>
    typeButton === "opacity" ? "none" : disabled ? theme.colors.grayDark : theme.colors.red};
  color: ${({ disabled }) => (disabled ? theme.colors.gray : theme.colors.white)};

  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: ${(props) => (props.withGap ? "0.52vw" : "0")};
  align-items: center;
  height: fit-content;

  font-size: 0.73vw;
  text-transform: uppercase;
  font-family: FCSM-Normal, sans-serif;
  padding: 0.78vw 1.25vw;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: 1.83vw;
    padding: 1.96vw 3.13vw;
    grid-column-gap: ${(props) => (props.withGap ? "1.3vw" : "0")};
  }

  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: 3.73vw;
    padding: 2.93vw 4.27vw;
    grid-column-gap: ${(props) => (props.withGap ? "2.67vw" : "0")};
  }
`;
