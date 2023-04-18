/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import { useDispatch } from "react-redux";
import { connectThunk } from "../modules/connect";
import walletConnectLogo from "./images/walletConnectLogo.png";
import styled from "styled-components";

export default function ConnectButton(props) {
  const { overrides, ...rest } = props;

  const dispatch = useDispatch();

  return (
    <Cover>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        padding="10px 10px 10px 10px"
        className="ConnectButton"
        onClick={() => {
          dispatch(connectThunk({ connect: true }));
        }}
        {...getOverrideProps(overrides, "ConnectButton")}
        {...rest}
      >
        <Flex
          gap="10px"
          direction="row"
          width="220px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="20px"
          padding="7.44px 25px 7.44px 25px"
          backgroundColor="rgba(32, 32, 32, 0.88)"
          {...getOverrideProps(overrides, "Frame 7")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="18px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 17")}
          >
            <Image
              src={walletConnectLogo}
              width="37px"
              height="25px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "walletConnectLogo 1")}
            ></Image>
          </Flex>
          <Text
            fontFamily="Kanit"
            fontSize="18px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="26.90999984741211px"
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
            children="Wallet Connect"
            {...getOverrideProps(overrides, "Connect")}
          ></Text>
        </Flex>
      </Flex>
    </Cover>
  );
}

const Cover = styled.div`
  cursor: pointer;
  .ConnectButton:hover {
    transform: scale(1.01);
  }
`;
