/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import { useSelector } from "react-redux";
import styled from "styled-components";
export default function LoginAccount(props) {
  const { overrides, ...rest } = props;
  const account = useSelector((state) => state.account.account.account);
  return (
    <LoginAccountCover>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "LoginAccount")}
        {...rest}
      >
        <Flex
          gap="10px"
          direction="row"
          width="220px"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="15px"
          padding="9px 9px 9px 9px"
          className="LoginAccountCover_accountBox"
          {...getOverrideProps(overrides, "Frame 15")}
        >
          <Text
            fontFamily="Kanit"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
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
            children={account}
            {...getOverrideProps(overrides, "account")}
          ></Text>
          <Flex
            padding="0px 0px 0px 0px"
            width="20px"
            height="13.75px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "dropdownIcon")}
          >
            <Icon
              width="20px"
              height="13.75px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 13.75 }}
              paths={[
                {
                  d: "M3.75 0L0 3.75L10 13.75L20 3.75L16.25 0L10 6.25L3.75 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
        </Flex>
      </Flex>
    </LoginAccountCover>
  );
}

const LoginAccountCover = styled.div`
  .LoginAccountCover_accountBox {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
