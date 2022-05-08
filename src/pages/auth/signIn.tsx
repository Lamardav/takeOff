import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../core/redux/store/store";
import { contactsSelectors } from "../../core/redux/selectors/contactsSelector";
import { contactsDispatches } from "../../core/redux/thunk/contactsThunk";
import { theme } from "../../assets/theme/theme";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(contactsSelectors.contacts);

  console.log("contacts=>", contacts);
  useEffect(() => {
    dispatch(contactsDispatches.getContacts());
  }, [dispatch]);

  return <Content>1</Content>;
};

export default SignIn;

const Content = styled.div`
  color: ${theme.colors.grayDark};
`;
