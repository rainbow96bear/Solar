/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SwapCompo768px(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      display={{
        base: "none",
        small: "flex",
        medium: "flex",
        large: "flex",
        xl: "none",
        xxl: "none",
      }}
      gap="30px"
      direction="row"
      width="80vw"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="18px"
      padding="30px 50px 30px 50px"
      backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
      {...getOverrideProps(overrides, "SwapCompo768px")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="50px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="45px"
        padding="19px 25px 19px 25px"
        backgroundColor="rgba(234,0,50,0.55)"
        {...getOverrideProps(overrides, "Connect40052829")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(239,239,239,1)"
          lineHeight="29.045454025268555px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="29px"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Swap"
          {...getOverrideProps(overrides, "Swap")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="50px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="45px"
        padding="19px 25px 19px 25px"
        backgroundColor="rgba(255,226,0,0.35)"
        overflow="hidden"
        {...getOverrideProps(overrides, "Connect40052831")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          lineHeight="29.045454025268555px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="29px"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add Liquidity"
          {...getOverrideProps(overrides, "Add Liquidity")}
        ></Text>
      </Flex>
    </Flex>
  );
}
