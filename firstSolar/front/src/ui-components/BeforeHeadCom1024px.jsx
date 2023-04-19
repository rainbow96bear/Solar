/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, SearchField, Text, View } from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";

export default function BeforeHeadCom1024px(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="90vw"
      height="60px"
      display={{
        base: "none",
        small: "none",
        medium: "none",
        large: "flex",
        xl: "none",
        xxl: "none",
      }}
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "BeforeHeadCom1024px")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="133px"
        height="35px"
        justifyContent="flex-end"
        alignItems="center"
        position="absolute"
        top="21.67%"
        bottom="20%"
        left="85.64%"
        right="1.37%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="45px"
        padding="19px 11px 19px 11px"
        backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
        {...getOverrideProps(overrides, "Connect39912872")}
      >
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="700"
          color="rgba(239,239,239,1)"
          lineHeight="21.784090042114258px"
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
          children="Connect"
          {...getOverrideProps(overrides, "Connect39912873")}
        ></Text>
      </Flex>
      <SearchField
        width="264px"
        height="unset"
        placeholder="Search"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="23.33%"
        bottom="21.67%"
        left="40.04%"
        right="34.18%"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Flex
        gap="24px"
        direction="row"
        width="221px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="13.33%"
        bottom="11.67%"
        left="0%"
        right="78.42%"
        padding="0px 14px 0px 14px"
        {...getOverrideProps(overrides, "Menu39912868")}
      >
        <Image
          src={logo}
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="50px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "unsplash:PfBvNnGIhmQ")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="33.8863639831543px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="41px"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Menu"
          {...getOverrideProps(overrides, "Menu39912870")}
        ></Text>
      </Flex>
    </View>
  );
}
