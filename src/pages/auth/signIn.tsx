import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { SignInForm } from "../../componentsPage/pageSignIn/signInForm";
import { SpeakingBender } from "../../componentsPage/pageSignIn/speakingBender";

const SignIn = () => {
  // const dispatch = useAppDispatch();
  // const contacts = useAppSelector(contactsSelectors.contacts);
  //
  // console.log("contacts=>", contacts);
  // useEffect(() => {
  //   dispatch(contactsDispatches.getContacts());
  // }, [dispatch]);

  return (
    <Content>
      <div>
        <Title>Войти</Title>
        <SignInForm />
      </div>
      <SpeakingBender />
    </Content>
  );
};

export default SignIn;

const Content = styled.div`
  color: ${theme.colors.grayDark};
  display: grid;
  grid-template-columns: 39.56vw 1fr;
  align-items: center;
  justify-content: center;
  min-height: inherit;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  color: ${theme.colors.white};
  font-size: 2.08vw;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: 4.68vw;
    margin-bottom: 6vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: 6.68vw;
    margin-bottom: 9vw;
  }
`;
