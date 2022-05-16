import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { UserCard } from "../../components/userCard/userCard";
import { useAppDispatch, useAppSelector } from "../../core/redux/store/store";
import { contactsSelectors } from "../../core/redux/selectors/contactsSelector";
import { contactsDispatches } from "../../core/redux/thunk/contactsThunk";
import { usePaginationHandler } from "../../helpers/usePaginationHandler/usePaginationHandler";
import { Pagination } from "../../components/pagination/pagination";
import { batch } from "react-redux";
import { SearchInput } from "../../components/searchinput";
import { resetContacts } from "../../core/redux/slice/contactsSlice";
import { useTranslation } from "react-i18next";

export const ContactsList = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const contacts = useAppSelector(contactsSelectors.contacts);
  const totalContacts = useAppSelector(contactsSelectors.totalContacts);
  const loading = useAppSelector(contactsSelectors.loading);
  const pageSize = useAppSelector(contactsSelectors.pageSize);
  const searchVal = useAppSelector(contactsSelectors.searchVal);

  useEffect(() => {
    batch(() => {
      dispatch(contactsDispatches.getContacts({ pageSize, searchVal }));
      dispatch(contactsDispatches.getAllContacts({ searchVal }));
    });
    return () => {
      dispatch(resetContacts());
    };
  }, [dispatch]);

  const paginationHandler = usePaginationHandler({ action: contactsDispatches.getContacts });
  const deleteHandler = useCallback(
    (id: number) => {
      batch(() => {
        dispatch(contactsDispatches.deleteContact({ id }));
        dispatch(contactsDispatches.getContacts({ pageSize, searchVal }));
        dispatch(contactsDispatches.getAllContacts({ searchVal }));
      });
    },
    [dispatch, pageSize, searchVal]
  );

  return (
    <Container>
      <TopMenu>
        <Title>{t("listUsers")}</Title>
        <Label>Найти: </Label>
        <SearchInput pageSize={pageSize} action={contactsDispatches.getContacts} />
      </TopMenu>

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

const TopMenu = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr auto 300px;
  align-items: center;
  grid-column-gap: 1vw;
`;

const Label = styled.div`
  display: grid;
  justify-self: flex-end;
  font-size: 1.43vw;
`;
