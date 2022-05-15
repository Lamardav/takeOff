import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../assets/theme/theme";

interface IProps {
  pageSize: number;
  onChangePageSize: (value: number) => void;
  isLoading: boolean;
  setPageSize: (value: number) => void;
  total: number;
  totalNow: number;
}

export const Pagination = ({ pageSize, onChangePageSize, isLoading, setPageSize, total, totalNow }: IProps) => {
  const changePageSize = () => {
    setPageSize(pageSize + 5);
    onChangePageSize?.(pageSize + 5);
  };

  return (
    <Container>
      <DescriptionContainer>
        <TextCount>{`Показано ${totalNow} из ${total}`}</TextCount>

        <TextLoading hidden={total <= totalNow} isLoading={isLoading} onClick={changePageSize}>
          Загрузить еще
        </TextLoading>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: ${theme.colors.black};
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 35px 0;
  row-gap: 5px;
`;
const rotate = keyframes`
 from {
   transform: rotate(0);
 }
  
  to {
    transform: rotate(360deg);
  }
`;

const TextLoading = styled.span<{ isLoading?: boolean; hidden: boolean }>`
  cursor: pointer;
  font-size: 16px;
  line-height: 22px;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  align-items: center;
  color: ${theme.colors.white};
  transition: 0.3s ease;

  &:active {
    transform: scale(1.1);
  }

  &:before {
    content: url("/mockImage/contacts/paginationLoadMore.svg");
    width: 20px;
    height: 20px;
    margin-right: 0.5vw;
    animation: ${({ isLoading }) => (isLoading ? rotate : "")} ease 0.7s infinite;
  }
`;

const TextCount = styled.span`
  font-size: 12px;
  line-height: 13px;
  color: ${theme.colors.grayLight};
`;