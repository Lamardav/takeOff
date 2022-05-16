import React, { useState } from "react";
import i18n from "i18next";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";

export const LanguageChanger = () => {
  const locale = i18n.language;
  const [lang, setLang] = useState(() => locale);
  const changeLanguage = (lng: "ru" | "en") => {
    setLang(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <Content>
      <LanguageItem onClick={() => changeLanguage("ru")} active={"ru-RU".includes(lang)}>
        рус
      </LanguageItem>
      <LanguageItem onClick={() => changeLanguage("en")} active={"en-US".includes(lang)}>
        eng
      </LanguageItem>
    </Content>
  );
};

const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 0.52vw;
  margin-right: 2vw;
`;

const LanguageItem = styled.div<{ active: boolean }>`
  color: ${({ active }) => (active ? theme.colors.red : theme.colors.grayLight)};
  font-size: 1.4vw;
  cursor: pointer;
  &:first-letter {
    text-transform: capitalize;
  }
`;
