/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Loader, useTheme } from "@aws-amplify/ui-react";
import styled from "styled-components";
const { useEffect, useState } = React;

export default function UserLoading(props) {
  const { tokens } = useTheme();
  const { overrides, ...rest } = props;

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <LoadingBox>
      <Loader
        width="5rem"
        height="5rem"
        emptyColor={tokens.colors.red}
        filledColor={tokens.colors.red[40]}
      />
    </LoadingBox>
  );
}
``;

const LoadingBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
