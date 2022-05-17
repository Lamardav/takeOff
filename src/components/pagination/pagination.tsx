import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../assets/theme/theme";
import { useAppDispatch } from "../../core/redux/store/store";
import { setPageSize } from "../../core/redux/slice/contactsSlice";
import { useTranslation } from "react-i18next";

interface IProps {
  pageSize: number;
  onChangePageSize: (value: number) => void;
  isLoading: boolean;
  total: number;
  totalNow: number;
}

export const Pagination = ({ pageSize, onChangePageSize, isLoading, total, totalNow }: IProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const changePageSize = () => {
    dispatch(setPageSize(pageSize + 5));
    onChangePageSize?.(pageSize + 5);
  };

  return (
    <Container>
      <DescriptionContainer>
        {totalNow ? <TextCount>{`${t("shown")} ${totalNow} ${t("from")} ${total}`}</TextCount> : null}

        <TextLoading hidden={total <= totalNow} isLoading={isLoading} onClick={changePageSize}>
          {t("loadMore")}
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
