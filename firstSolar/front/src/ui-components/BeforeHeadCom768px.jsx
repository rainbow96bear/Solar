/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, SearchField } from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ConnectModal from "./ConnectModal";
import { motion } from "framer-motion";
import LoggedinUser from "./LoggedinUser";
import LoginButton from "./LoginButton";
import { useAccount } from "wagmi";
import { Web3Button } from "@web3modal/react";
import LoadingButton768 from "./LoadingButton768";
import { useNavigate } from "react-router-dom";
export default function BeforeHeadCom768px(props) {
  const { overrides, ...rest } = props;
  const login = useSelector((state) => state.login);
  const connect = useSelector((state) => state.connect);
  const { address } = useAccount();
  const navigate = useNavigate();

  return (
    <Cover>
      <Flex
        display="flex"
        gap="21px"
        direction="row"
        width="91vw"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="relative"
        padding="5px 15px 5px 15px"
        {...getOverrideProps(overrides, "BeforeHeadCom768px")}
        {...rest}
      >
        <Flex
          gap="24px"
          direction="row"
          width="20%"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Menu")}
        >
          <Flex
            onClick={() => {
              navigate("/redirectHome");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Flex
              gap="10px"
              direction="row"
              width="57.56px"
              height="58px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="10px 10px 10px 10px"
              {...getOverrideProps(overrides, "Frame 4639443730")}
            >
              <Image
                src={logo}
                width="unset"
                height="unset"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="50px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "unsplash:PfBvNnGIhmQ39443731")}
              ></Image>
            </Flex>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="57.56px"
            height="58px"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 45")}
          ></Flex>
        </Flex>
        <SearchField
          className="searchInput"
          width="50%"
          height="unset"
          placeholder="Search"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <div className="header_right" style={{ display: "flex", gap: "20px" }}>
          <motion.div
            width={{ base: "49px", small: "49px" }}
            height={{ base: "49px", small: "49px" }}
            style={{
              alignSelf: "center",
              borderRadius: "35px",
              backgroundColor: "rgba(247,239,227,0.75)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backgroundImage:
                "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
            }}
            whileHover={{
              scale: 0.93,
              backgroundColor: "rgba(247,239,227,0.75)",
            }}
          >
            <Button
              display="flex"
              width={{ base: "49px", small: "49px" }}
              height={{ base: "49px", small: "49px" }}
              borderRadius="35px"
              alignSelf="center"
              shrink="0"
              size="small"
              isDisabled={false}
              fontFamily="ffCondExtraLight"
              children="List Reset"
              textAlign="center"
              fontSize={{ base: "7px", small: "7px" }}
              onClick={() => {
                navigate("/redirectHome");
              }}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </motion.div>
          {connect ? (
            login ? (
              <LoggedinUser></LoggedinUser>
            ) : address ? (
              <Web3Button></Web3Button>
            ) : (
              <>
                <ConnectModal></ConnectModal>
                <LoadingButton768></LoadingButton768>
              </>
            )
          ) : (
            <div className="Header_connect">
              <LoginButton></LoginButton>
            </div>
          )}
        </div>
      </Flex>
    </Cover>
  );
}

const Cover = styled.div`
  input::placeholder {
    width: 60px;
  }
  .my-menu-content.amplify-menu-content {
    --amplify-components-button-border: none;
  }

  .my-menu-trigger.amplify-menu-trigger {
    --amplify-components-button-border-color: transparent;
  }
`;
