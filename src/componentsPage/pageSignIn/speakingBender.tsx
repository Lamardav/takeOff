import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { useTranslation } from "react-i18next";

export const SpeakingBender = () => {
  const { t } = useTranslation();

  const [text, setText] = useState<string>(t("agressor"));
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      clearTimeout(timer);
      const timer2 = setTimeout(() => {
        setVisible(false);
        clearTimeout(timer2);
      }, 5000);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Content>
      <Img
        onMouseEnter={() => {
          setText(t("agressor2"));
          setVisible(true);
          const timer2 = setTimeout(() => {
            setVisible(false);
            clearTimeout(timer2);
          }, 5000);
        }}
        alt={"Bender"}
        src={"/mockImage/signIn/bender1.png"}
      />
      <SpeachSky visible={visible}>{text}</SpeachSky>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  position: relative;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    display: none;
  }
`;

const Img = styled.img`
  width: 26vw;
`;

const SpeachSky = styled.div<{ visible: boolean }>`
  position: absolute;
  border-radius: 4px;
  cursor: default;
  padding: 0.46vw 0.63vw;
  color: ${theme.colors.black};
  background: ${theme.colors.white};
  font-size: 1.3vw;
  font-family: sans-serif;
  z-index: 100;
  display: ${({ visible }) => (visible ? "block" : "none")};
  right: 18vw;
  width: fit-content;
  max-width: 28vw;
  left: auto;
  top: 15.5vw;
  &::before {
    content: " ";
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
    right: calc(6px * -2);
    top: 50%;
    transform: translateY(-50%);
    border-left-color: ${theme.colors.white};
  }
`;
