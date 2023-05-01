/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import "../css/Font.css";
export default function DepositButton768px(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="33px"
      direction={{ base: "column", small: "column", medium: "row" }}
      width="74.4vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="35px"
      padding="31px 63.5px 31px 63.5px"
      backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
      {...getOverrideProps(overrides, "DepositButton768px")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="48vw"
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
        {...getOverrideProps(overrides, "Connect40822702")}
      >
        <Text
          fontFamily="ffProBook"
          fontSize={{ base: "19px", small: "19px", medium: "24px" }}
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
          children="Deposit"
          {...getOverrideProps(overrides, "Deposit")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="48vw"
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
        backgroundColor="rgba(234,0,50,0.45)"
        {...getOverrideProps(overrides, "Connect40822700")}
      >
        <Text
          fontFamily="ffProBook"
          fontSize={{ base: "19px", small: "19px", medium: "24px" }}
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
          children="With draw"
          {...getOverrideProps(overrides, "With draw")}
        ></Text>
      </Flex>
    </Flex>
  );
}
