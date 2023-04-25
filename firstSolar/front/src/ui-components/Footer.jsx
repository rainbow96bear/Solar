/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import { useMediaQuery } from "react-responsive";
export default function Footer(props) {
  const { overrides, ...rest } = props;

  const isNotMobile = useMediaQuery({
    query: "(min-width:481px)",
  });

  return (
    <>
      {/* {isNotMobile && ( */}
      <Flex
        gap="131px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="relative"
        padding="30px 0px 0px 0px"
        margin="50px 0px 0px 0px"
        backgroundColor="gainsboro"
        {...getOverrideProps(overrides, "Footer")}
        {...rest}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 1")}
        >
          <Text
            fontFamily="Kanit"
            fontSize={{
              base: "16px",
              small: "16px",
              medium: "18px",
              large: "18px",
              xl: "20px",
              xxl: "20px",
            }}
            fontWeight="bold"
            color="rgba(255,165,0,1)"
            lineHeight="29.899999618530273px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="1.85px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Developers"
            {...getOverrideProps(overrides, "Developers")}
          ></Text>
          <Text
            fontFamily="Kanit"
            fontSize={{
              base: "14px",
              small: "14px",
              medium: "16px",
              large: "16px",
              xl: "18px",
              xxl: "18px",
            }}
            fontWeight="bold"
            color="rgba(0,0,0,1)"
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
            children="Github"
            {...getOverrideProps(overrides, "Github")}
          ></Text>
          <Text
            fontFamily="Kanit"
            fontSize={{
              base: "14px",
              small: "14px",
              medium: "16px",
              large: "16px",
              xl: "18px",
              xxl: "18px",
            }}
            fontWeight="bold"
            color="rgba(0,0,0,1)"
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
            children="Trello"
            {...getOverrideProps(overrides, "Trello")}
          ></Text>
          <Text
            fontFamily="Kanit"
            fontSize={{
              base: "14px",
              small: "14px",
              medium: "16px",
              large: "16px",
              xl: "18px",
              xxl: "18px",
            }}
            fontWeight="bold"
            color="rgba(0,0,0,1)"
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
            children="Notion"
            {...getOverrideProps(overrides, "Notion")}
          ></Text>
          <Text
            fontFamily="Kanit"
            fontSize={{
              base: "14px",
              small: "14px",
              medium: "16px",
              large: "16px",
              xl: "18px",
              xxl: "18px",
            }}
            fontWeight="bold"
            color="rgba(0,0,0,1)"
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
            children="Google Drive"
            {...getOverrideProps(overrides, "Google Drive")}
          ></Text>
        </Flex>
        <Flex
          gap="15px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <Image
            src={logo}
            width="41.83px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "logo_new 1")}
          ></Image>
          <Text
            fontFamily="Kanit"
            fontSize={{
              base: "14px",
              small: "14px",
              medium: "16px",
              large: "16px",
              xl: "18px",
              xxl: "18px",
            }}
            fontWeight="bold"
            color="rgba(0,0,0,1)"
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
            children="Solar"
            {...getOverrideProps(overrides, "Solar")}
          ></Text>
        </Flex>
      </Flex>
      {/* )} */}
    </>
  );
}
