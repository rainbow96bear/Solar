/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import { useDispatch, useSelector } from "react-redux";
import { connectThunk } from "../modules/connect.js";
export default function ConnectButton(props) {
  const { overrides, ...rest } = props;
  const dispatch = useDispatch();

  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="10px 10px 10px 10px"
      {...getOverrideProps(overrides, "ConnectButton")}
      {...rest}
      onClick={() => {
        dispatch(connectThunk({ connect: true }));
      }}
    >
      <Flex
        gap="10px"
        direction="row"
        width="220px"
        height="40px"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="20px"
        padding="10px 25px 10px 25px"
        backgroundColor="rgba(255,165,0,1)"
        {...getOverrideProps(overrides, "Frame 7")}
      >
        <Text
          fontFamily="Kanit"
          fontSize="18px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="1.65px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Connect"
          {...getOverrideProps(overrides, "Connect")}
        ></Text>
      </Flex>
    </Flex>
  );
}
