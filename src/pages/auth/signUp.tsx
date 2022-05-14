import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../core/redux/store/store";
import { contactsSelectors } from "../../core/redux/selectors/contactsSelector";
import { contactsDispatches } from "../../core/redux/thunk/contactsThunk";
import { theme } from "../../assets/theme/theme";
import { SignUpForm } from "../../componentsPage/pageSignUp/signUpForm";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(contactsSelectors.contacts);

  useEffect(() => {
    dispatch(contactsDispatches.getContacts());
  }, [dispatch]);

  return (
    <Content>
      регистрация
      <SignUpForm />
    </Content>
  );
};

export default SignUp;

const Content = styled.div`
  color: ${theme.colors.grayDark};
`;
