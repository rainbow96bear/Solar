/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import { motion } from "framer-motion";
import "../css/Font.css";
export default function ConnectCompo320px(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      display={{
        base: "flex",
        small: "none",
        medium: "none",
        large: "none",
        xl: "none",
        xxl: "none",
      }}
      gap="30px"
      direction="row"
      width="88vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="18px"
      padding="30px 50px 30px 50px"
      {...getOverrideProps(overrides, "ConnectCompo320px")}
      {...rest}
    >
      <motion.div
        style={{
          width: "55vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(0,136,153,0.86)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{ borderRadius: "13px", scale: 1.05, opacity: 0.88 }}
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
          borderRadius="45px"
          padding="19px 25px 19px 25px"
          {...getOverrideProps(overrides, "Connect40052834")}
        >
          <Text
            fontFamily="ffProMedium"
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
            {...getOverrideProps(overrides, "Connect40052835")}
          ></Text>
        </Flex>
      </motion.div>
    </Flex>
  );
}
