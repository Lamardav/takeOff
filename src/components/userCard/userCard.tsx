import React, { memo, useState } from "react";
import styled from "styled-components";
import { IContact } from "../../api/dto/IContact";
import { theme } from "../../assets/theme/theme";
import { useAppDispatch } from "../../core/redux/store/store";
import { contactsDispatches } from "../../core/redux/thunk/contactsThunk";
import { useTranslation } from "react-i18next";

interface IProps extends IContact {
  onDelete: (id: number) => void;
}

export const UserCard = memo(({ id, name, phone, username, onDelete }: IProps) => {
  const [type, setType] = useState<"read" | "update">("read");
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [inputName, setInputName] = useState<string | null>(null);
  const [inputUserName, setUserName] = useState<string | null>(null);
  const [inputPhone, setPhone] = useState<string | null>(null);

  const acceptUpdate = () => {
    dispatch(
      contactsDispatches.updateContact({
        id,
        username: inputUserName || username,
        name: inputName || name,
        phone: inputPhone || phone,
      })
    );
  };

  return (
    <Content>
      <Id>ID № {id}</Id>
      <Name>
        {t("name")} :{" "}
        <Input value={inputName ?? name} disabled={type === "read"} onChange={(e) => setInputName(e.target.value)} />
      </Name>
      <UserName>
        {t("username")}:{" "}
        <Input
          value={inputUserName ?? username}
          disabled={type === "read"}
          onChange={(e) => setUserName(e.target.value)}
        />
      </UserName>

      <Phone>
        {t("phone")}:{" "}
        <Input value={inputPhone ?? phone} disabled={type === "read"} onChange={(e) => setPhone(e.target.value)} />
      </Phone>
      <IconContainer>
        {type === "read" ? (
          <>
            <Img alt={"update user"} src={"/mockImage/contacts/update.svg"} onClick={() => setType("update")} />
            <Img onClick={() => onDelete(id)} alt={"delete user"} src={"/mockImage/contacts/delete.svg"} />
          </>
        ) : (
          <>
            <Img
              alt={"cancel update"}
              src={"/mockImage/contacts/no.svg"}
              onClick={() => {
                setInputName(name);
                setUserName(username);
                setPhone(phone);
                setType("read");
              }}
            />
            <Img
              alt={"accept update"}
              src={"/mockImage/contacts/yes.svg"}
              onClick={() => {
                setType("read");
                acceptUpdate();
              }}
            />
          </>
        )}
      </IconContainer>
    </Content>
  );
});

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 1.4vw;
  border: 1px solid ${theme.colors.white};
  padding: 1vw;
  font-size: 1vw;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    padding: 2.5vw;
    grid-row-gap: 2.4vw;
    font-size: 2.2vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-template-columns: 1fr;
    padding: 4.5vw;
    grid-row-gap: 5.4vw;
    font-size: 4.2vw;
  }
`;

const Id = styled.div``;

const Name = styled.div`
  grid-column: span 2;
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-column: span 1;
  }
`;

const UserName = styled.div`
  grid-column: span 2;
  white-space: nowrap;
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-column: span 1;
  }
`;

const Img = styled.img`
  cursor: pointer;
  width: 1vw;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    width: 2vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    width: 4vw;
  }
`;

const Phone = styled.div`
  grid-column: span 4;
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-column: span 1;
  }
`;

const IconContainer = styled.div`
  display: flex;
  grid-column-gap: 0.4vw;
  justify-self: flex-end;
  align-self: center;
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-column-gap: 1vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-column-gap: 2vw;
  }
`;

const Input = styled.input`
  background: ${theme.colors.blackLight};
  color: ${theme.colors.red};
  font-size: 1vw;
  border: none;
  &:disabled {
    color: ${theme.colors.grayLight};
    background: ${theme.colors.black};
  }
  &:focus {
    outline: none !important;
  }
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: 2.2vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: 4.2vw;
  }
`;
