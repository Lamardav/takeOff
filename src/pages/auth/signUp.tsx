import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { SignUpForm } from "../../componentsPage/pageSignUp/signUpForm";

const SignUp = () => {
  // const dispatch = useAppDispatch();
  // const contacts = useAppSelector(contactsSelectors.contacts);
  //
  // useEffect(() => {
  //   dispatch(contactsDispatches.getContacts());
  // }, [dispatch]);

  return (
    <Content>
      <div>
        <Title>Зарегистрироваться</Title>
        <SignUpForm />
      </div>
      <Img alt={"zubby"} src={"/mockImage/signUp/zubby.png"}></Img>
    </Content>
  );
};

export default SignUp;

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

const Img = styled.img`
  width: 40vw;
  display: flex;
  justify-self: center;
  align-self: center;
  max-height: 70vh;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    display: none;
  }
`;
