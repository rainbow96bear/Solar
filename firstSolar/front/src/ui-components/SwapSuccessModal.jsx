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

const { useEffect, useState } = React;

export default function SwapSuccessModal(props) {
  const [timer, setTimer] = useState(6); // 초기 값: 5초
  let intervalId;
  useEffect(() => {
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      props?.setSwapSuccessModalOpen(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

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
        <Text width="100%" children={`${timer - 1} 초 후에 종료됩니다.`}></Text>
        <Flex
          width="100%"
          textAlign="center"
          direction="columnn"
          display="block"
          padding="30px 0px 0px 0px"
          grow="1"
        >
          <Text
            width="100%"
            fontSize="28px"
            fontFamily="ffProMedium"
            fontWeight="bold"
            children={`${props?.firstSelectToken} => ${props?.secondSelectToken}`}
            padding="0px 0px 60px 0px"
          ></Text>
          <Text
            fontFamily="ffProExtraLight"
            width="100%"
            children="Swap에 성공하였습니다."
          ></Text>
        </Flex>
        <Flex width="100%" justifyContent="center" padding="10px 0px 10px 0px">
          <Button
            onClick={() => {
              props?.setSwapSuccessModalOpen(false);
              clearInterval(intervalId);
            }}
            children="닫기"
          ></Button>
        </Flex>
      </Flex>
    </View>
  );
}
