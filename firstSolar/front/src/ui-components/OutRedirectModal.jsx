import * as React from "react";
import { Flex, Text } from "@aws-amplify/ui-react";
import { motion } from "framer-motion";
import "../css/Font.css";
import "../css/Font.css";
import { useDispatch, useSelector } from "react-redux";
import { setOutRedirectModalOpen } from "../modules/outRedirectModalOpen";

export default function OutRedirectModal(props) {
  const url = useSelector((state) => state.outRedirectModalOpen.url);
  const dispatch = useDispatch();
  const redirectFunc = () => {
    window.open(url, "_blank");
  };

  return (
    <Flex
      gap="30px"
      direction="column"
      // width="46vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      whiteSpace="normal"
      borderRadius="18px"
      padding="41px 50px 41px 50px"
      backgroundColor="rgb(255,255,255)"
    >
      <Flex
        gap="10px"
        direction="row"
        width="100%"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="19px 19px 19px 19px"
      >
        <Text
          fontFamily="ffCondExtraLight"
          fontSize="21px"
          fontWeight="600"
          lineHeight="15.732954025268555px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="unset"
          width="100%"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="normal"
          children="Redirect to Liquidity Additional Site?"
        ></Text>
      </Flex>

      <Flex
        direction="row"
        width="36vw"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="relative"
        gap="33px"
      >
        <motion.div
          style={{
            width: "15vw",
            height: "unset",
            minWidth: "80px",
            borderRadius: "35px",
            backgroundColor: "rgba(234,0,50,0.55)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
          }}
          whileHover={{ borderRadius: "13px", scale: 1.1, opacity: 0.88 }}
        >
          <Flex
            onClick={() => {
              redirectFunc();
              dispatch(setOutRedirectModalOpen({ isOpen: false, url: "" }));
            }}
            gap="10px"
            direction="row"
            width="unset"
            height="50px"
            justifyContent="center"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            borderRadius="45px"
            padding="19px 25px 19px 25px"
          >
            <Text
              fontFamily="ffProMedium"
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
              children="Yes"
            ></Text>
          </Flex>
        </motion.div>
        <motion.div
          style={{
            width: "15vw",
            minWidth: "80px",
            height: "unset",
            borderRadius: "35px",
            backgroundColor: "rgba(255,226,0,0.35)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
          }}
          whileHover={{ borderRadius: "13px", scale: 1.1, opacity: 0.88 }}
        >
          <Flex
            onClick={() => {
              dispatch(setOutRedirectModalOpen({ isOpen: false, url: "" }));
            }}
            gap="10px"
            direction="row"
            width="unset"
            height="50px"
            justifyContent="center"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            borderRadius="45px"
            padding="19px 25px 19px 25px"
            overflow="hidden"
          >
            <Text
              fontFamily="ffProMedium"
              fontSize="1.5rem"
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
              children="No"
            ></Text>
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
}
