// /***************************************************************************
//  * The contents of this file were generated with Amplify Studio.           *
//  * Please refrain from making any modifications to this file.              *
//  * Any changes to this file will be overwritten when running amplify pull. *
//  **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Icon,
  Text,
  View,
  Loader,
  useTheme,
} from "@aws-amplify/ui-react";
import { gsap } from "gsap";
import { Tween, SplitChars, Reveal } from "react-gsap";
import styled from "styled-components";
import "../css/Font.css";

const { useEffect, useState } = React;

export default function SwapSuccessModal(props) {
  const { tokens } = useTheme();
  const { overrides, ...rest } = props;
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.94 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);
  return (
    <Cover>
      <View
        width="454.16px"
        height="655.1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifycontent="unset"
        position="fixed"
        top="50%"
        left="50%"
        // transform: translate(-50%, -50%);
        z-index="9999"
        padding="0px 0px 0px 0px"
        className="LoadingBox"
        {...getOverrideProps(overrides, "UserLoading")}
        {...rest}
      >
        <View
          width="50%"
          height="777.04px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifycontent="unset"
          // position="absolute"
          // top="9.27%"
          // bottom="-0.14%"
          // left="5.6%"
          // right="11.32%"
          border="1.19px SOLID rgba(0,22,10,0.1)"
          boxShadow="-50px 38px 38px rgba(0, 0.08627451211214066, 0.03921568766236305, 0.10000000149011612)"
          borderRadius="63.06201636791229px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Device")}
        >
          스왑 성공!
        </View>
        ,{" "}
      </View>
    </Cover>
  );
}
``;
const Cover = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

const TestT = styled.div`
  .testMan {
    &:hover {
      font-size: 36px;
      align-self: center;
      padding-left: 4.8px;
      cursor: pointer;
      color: rgb(255, 86, 94);
      font-size: 55px !important;
    }
  }
`;
