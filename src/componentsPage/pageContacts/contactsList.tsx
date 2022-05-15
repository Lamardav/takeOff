import React, { useEffect } from "react";
import styled from "styled-components";
import { UserCard } from "../../components/userCard/userCard";
import { useAppDispatch, useAppSelector } from "../../core/redux/store/store";
import { contactsSelectors } from "../../core/redux/selectors/contactsSelector";
import { contactsDispatches } from "../../core/redux/thunk/contactsThunk";
import { usePaginationHandler } from "../../helpers/usePaginationHandler/usePaginationHandler";

export const ContactsList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(contactsSelectors.contacts);

  useEffect(() => {
    dispatch(contactsDispatches.getContacts({ pageSize: 5 }));
  }, [dispatch]);

  const pag = usePaginationHandler({ action: contactsDispatches.getContacts });

  return (
    <Container>
      <Title>Список пользователей</Title>
      <Content>
        {contacts.map((item, index) => (
          <UserCard
            key={`${index + index}`}
            id={item.id}
            name={item.name}
            phone={item.phone}
            username={item.username}
          />
        ))}
      </Content>
      <button onClick={() => pag({ pageSize: 10 }, null)}>click</button>
    </Container>
  );
};

const Container = styled.div`
  width: 82.5vw;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 2.08vw 0;
  font-size: 2.71vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 2vw;
`;
