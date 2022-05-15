import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { UserCard } from "../../components/userCard/userCard";
import { useAppDispatch, useAppSelector } from "../../core/redux/store/store";
import { contactsSelectors } from "../../core/redux/selectors/contactsSelector";
import { contactsDispatches } from "../../core/redux/thunk/contactsThunk";
import { usePaginationHandler } from "../../helpers/usePaginationHandler/usePaginationHandler";
import { Pagination } from "../../components/pagination/pagination";
import { batch } from "react-redux";

export const ContactsList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(contactsSelectors.contacts);
  const totalContacts = useAppSelector(contactsSelectors.totalContacts);
  const loading = useAppSelector(contactsSelectors.loading);
  const [pageSize, setPageSize] = useState<number>(5);

  useEffect(() => {
    batch(() => {
      dispatch(contactsDispatches.getContacts({ pageSize: 5 }));
      //getAllContacts только для определения количетсва контактов всего)
      dispatch(contactsDispatches.getAllContacts());
    });
  }, [dispatch]);

  const paginationHandler = usePaginationHandler({ action: contactsDispatches.getContacts });
  const deleteHandler = useCallback(
    (id: number) => {
      batch(() => {
        dispatch(contactsDispatches.deleteContact({ id }));
        dispatch(contactsDispatches.getContacts({ pageSize: 5 }));
        //getAllContacts только для определения количетсва контактов всего)
        dispatch(contactsDispatches.getAllContacts());
      });
    },
    [dispatch]
  );

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
            onDelete={deleteHandler}
          />
        ))}
      </Content>
      <Pagination
        isLoading={loading}
        onChangePageSize={(value) => paginationHandler({ pageSize: value }, null)}
        pageSize={pageSize}
        setPageSize={setPageSize}
        total={totalContacts}
        totalNow={contacts.length}
      />
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
