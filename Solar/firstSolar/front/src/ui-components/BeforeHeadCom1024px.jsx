/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Image,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
import { setConnect } from "../modules/connect.js";
import { useSelector } from "react-redux";
import styled from "styled-components";
import logo from "./images/logo_new.png";
import "../css/Font.css";
import { motion } from "framer-motion";
import LoginAccount from "./LoginAccount.jsx";
import ConnectModal from "./ConnectModal.jsx";
import LoadingButton from "./LoadingButton.jsx";
import { Web3Button } from "@web3modal/react";

export default function BeforeHeadCom1024px(props) {
  const {
    overrides,
    handleInputChange,
    handleSearch,
    inputValue,
    navigate,
    dispatch,
    address,
    ...rest
  } = props;
  const login = useSelector(state => state.login);
  const connect = useSelector(state => state.connect);

  return (
    <View
      width="90vw"
      height="unset"
      display="flex"
      alignItems="unset"
      justifyContent="space-between"
      position="relative"
      padding="10px 5px 10px 5px"
      {...getOverrideProps(overrides, "BeforeHeadCom1024px")}
      {...rest}
    >
      <Flex
        onClick={() => {
          navigate("/redirectHome");
        }}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <Flex
          gap="24px"
          direction="row"
          width="80px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
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
        </Flex>
      </Flex>
      <SearchField
        width="464px"
        height="unset"
        placeholder="Search"
        justifyContent="center"
        alignItems="center"
        top="23.33%"
        bottom="21.67%"
        left="40.04%"
        right="34.18%"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        value={inputValue}
        onSubmit={() => {
          if (inputValue?.match(/\S/g)) {
            handleSearch();
            return;
          } else {
            alert("검색어를 입력하세요");
          }
        }}
        onChange={handleInputChange}
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Cover>
        <div className="Header_right" style={{ display: "flex", gap: "20px" }}>
          <motion.div
            style={{
              width: "49px",
              height: "49px",
              alignSelf: "center",
              borderRadius: "33px",
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
              width="49px"
              height="49px"
              borderRadius="35px"
              alignSelf="center"
              shrink="0"
              size="small"
              isDisabled={false}
              fontFamily="ffCondExtraLight"
              children="List Reset"
              textAlign="center"
              fontSize="10px"
              onClick={() => {
                navigate("/redirectHome");
              }}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </motion.div>
          {connect ? (
            login ? (
              <LoginAccount></LoginAccount>
            ) : address ? (
              <Web3Button></Web3Button>
            ) : (
              <>
                <ConnectModal></ConnectModal>
                <LoadingButton></LoadingButton>
              </>
            )
          ) : (
            <div className="Header_connect">
              <Flex
                marginTop="5px"
                gap="10px"
                direction="row"
                width="133px"
                height="35px"
                justifyContent="center"
                alignItems="center"
                top="21.67%"
                bottom="20%"
                left="85.64%"
                right="1.37%"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                backgroundColor="#D0576B"
                borderRadius="45px"
                padding="19px 11px 19px 11px"
                onClick={() => {
                  dispatch(setConnect(true));
                }}
                {...getOverrideProps(overrides, "Connect39912872")}
              >
                <Text
                  fontFamily="ffProBook"
                  fontSize="17px"
                  fontWeight="700"
                  color="rgba(239,239,239,1)"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="center"
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
            </div>
          )}
        </div>
      </Cover>
    </View>
  );
}

const Cover = styled.div`
  display: flex;
  align-items: center;
  .Header_connect {
    justify-content: center;
    cursor: pointer;
  }
  .Header_connect:hover {
    transform: scale(1.01);
  }
`;
