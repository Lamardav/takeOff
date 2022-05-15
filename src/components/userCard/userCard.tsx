import React, { memo, useState } from "react";
import styled from "styled-components";
import { IContact } from "../../api/dto/IContact";
import { theme } from "../../assets/theme/theme";
import { useAppDispatch } from "../../core/redux/store/store";
import { contactsDispatches } from "../../core/redux/thunk/contactsThunk";

interface IProps extends IContact {
  onDelete: (id: number) => void;
}

export const UserCard = memo(({ id, name, phone, username, onDelete }: IProps) => {
  const [type, setType] = useState<"read" | "update">("read");
  const dispatch = useAppDispatch();
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
        Имя :{" "}
        <Input value={inputName ?? name} disabled={type === "read"} onChange={(e) => setInputName(e.target.value)} />
      </Name>
      <UserName>
        Псевдоним:{" "}
        <Input
          value={inputUserName ?? username}
          disabled={type === "read"}
          onChange={(e) => setUserName(e.target.value)}
        />
      </UserName>

      <Phone>
        Номер телефона:{" "}
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
`;

const Id = styled.div``;

const Name = styled.div`
  grid-column: span 2;
`;

const UserName = styled.div`
  grid-column: span 2;
`;

const Img = styled.img`
  cursor: pointer;
  width: 1vw;
`;

const Phone = styled.div`
  grid-column: span 4;
`;

const IconContainer = styled.div`
  display: flex;
  grid-column-gap: 0.4vw;
  justify-self: flex-end;
  align-self: center;
`;

const Input = styled.input`
  background: ${theme.colors.blackLight};
  color: ${theme.colors.red};

  border: none;
  &:disabled {
    color: ${theme.colors.grayLight};
    background: ${theme.colors.black};
  }
  &:focus {
    outline: none !important;
  }
`;
