/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, Icon } from "@aws-amplify/ui-react";

export default function QuestionModalRank(props) {
  const { overrides, setquestionmark, ...rest } = props;

  React.useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <ModalCover
      onClick={e => {
        if (e.target !== e.currentTarget) return;
      }}
    ></ModalCover>
  );
}

const ModalCover = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  align-items: center;
  z-index: 88;

  .ConnectModal {
    display: flex;
    justify-content: center;

    .cursorPointer {
      cursor: pointer;
    }
  }
  .Web3Button {
    button {
      background-color: orange !import;
    }
  }
`;
