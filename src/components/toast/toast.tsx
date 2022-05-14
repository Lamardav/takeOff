import { toast, ToastContainer } from "react-toastify";
import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";

export const ErrToast = (text: string) => {
  return toast(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });
};

export const UIToastContainer = () => {
  return (
    <StyledToast
      className={"UIToastContainer"}
      toastClassName={"UIToastContainerToast"}
      bodyClassName={"UIToastContainerBody"}
      closeButton={false}
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

const StyledToast = styled(ToastContainer)`
  @media screen and (min-width: ${theme.rubberSize.desktop}) {
    width: fit-content;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    justify-content: center;
  }
  & .UIToastContainerToast {
    background: ${theme.colors.red};
    color: ${theme.colors.white};
  }
`;
