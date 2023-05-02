// /***************************************************************************
//  * The contents of this file were generated with Amplify Studio.           *
//  * Please refrain from making any modifications to this file.              *
//  * Any changes to this file will be overwritten when running amplify pull. *
//  **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
import styled from "styled-components";
import "../css/Font.css";
import { useDispatch, useSelector } from "react-redux";
import { emptySearch } from "../modules/store.js";

const { useEffect, useState } = React;

export default function EmptySearchModal(props) {
  const emptySearch = useSelector((state) => state.emptySearch);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);
  return (
    <View
      width="30%"
      height="40%"
      display="flex"
      // gap="unset"
      // alignItems="center"
      justifycontent="unset"
      position="fixed"
      top="50%"
      left="50%"
      style={{ transform: "translate(-50%, -50%)" }}
      border="1.19px SOLID rgba(0,22,10,0.1)"
      boxShadow="-50px 38px 38px rgba(0, 0.08627451211214066, 0.03921568766236305, 0.10000000149011612)"
      borderRadius="63.06201636791229px"
      z-index="9999"
      backgroundColor="rgba(255,255,255,1)"
      padding="20px 20px 20px 20px"
      className="LoadingBox"
    >
      <Flex
        width="100%"
        textAlign="center"
        display="flex"
        style={{ flexDirection: "column" }}
      >
        <Flex
          width="100%"
          textAlign="center"
          direction="columnn"
          display="block"
          padding="30px 0px 0px 0px"
          grow="1"
        >
          <Text
            fontFamily="ffProExtraLight"
            width="100%"
            children="검색어를 입력하십시오."
          ></Text>
        </Flex>
        <Flex width="100%" justifyContent="center" padding="10px 0px 10px 0px">
          <Button onClick={() => {}} children="닫기"></Button>
        </Flex>
      </Flex>
    </View>
  );
}
