/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import OutRedirectModal from "./OutRedirectModal";

export default function SwapCompo1440px(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate();
  const isDFS = props?.props?.item?.oracleId?.split("-")[0] == "DFS";
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Flex
      display="flex"
      gap="30px"
      direction="row"
      width="90vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="18px"
      padding="30px 50px 30px 50px"
      {...getOverrideProps(overrides, "SwapCompo1440px")}
      {...rest}
    >
      <motion.div
        style={{
          width: "31vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(234,0,50,0.55)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{
          borderRadius: "13px",
          backgroundColor: "#5AB5B2",
          scale: 1.03,
          opacity: 0.88,
        }}
      >
        <Flex
          onClick={() => {
            navigate(`/swap?${props.props.item.oracleId}`);
          }}
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
          padding="19px 25px 19px 25px"
          {...getOverrideProps(overrides, "Connect40052819")}
        >
          <Text
            fontFamily="ffProMedium"
            fontSize="24px"
            fontWeight="700"
            color="rgba(249,249,249,1)"
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
      </motion.div>

      <motion.div
        style={{
          width: "31vw",
          height: "unset",
          borderRadius: "35px",
          backgroundColor: "rgba(255,226,0,0.35)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
        whileHover={{
          borderRadius: "13px",
          backgroundColor: "#F7EFE3",
          scale: 1.03,
          opacity: 0.88,
        }}
      >
        <Flex
          onClick={() => {
            const url = isDFS
              ? `/addliquidity?${props.props.item.oracleId}`
              : props.props.item.addLiquidityUrl;
            isDFS
              ? navigate(url)
              : url
              ? setIsOpen(true)
              : window.location.reload();
          }}
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
          padding="19px 25px 19px 25px"
          {...getOverrideProps(overrides, "Connect40052821")}
        >
          <Button
            border="0px"
            fontFamily="ffProMedium"
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
            disabled={false}
            backgroundColor="rgba(255,226,0,0.001)"
            {...getOverrideProps(overrides, "Add Liquidity")}
          ></Button>
        </Flex>
      </motion.div>

      {isOpen && (
        <RedirectModal>
          <OutRedirectModal
            item={props}
            setIsOpen={setIsOpen}
          ></OutRedirectModal>
        </RedirectModal>
      )}
    </Flex>
  );
}

const RedirectModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  align-items: center;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  align-items: center;
  z-index: 88;
`;
