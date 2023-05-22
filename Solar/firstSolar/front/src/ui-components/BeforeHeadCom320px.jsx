/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Image,
  SearchField,
  SwitchField,
  Button,
} from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import ConnectModal from "./ConnectModal";
import LoggedinUser from "./LoggedinUser";
import LoadingButton768 from "./LoadingButton768";
import { motion } from "framer-motion";
import { Web3Button } from "@web3modal/react";
export default function BeforeHeadCom320px(props) {
  const {
    overrides,
    searchView,
    setSearchView,
    handleInputChange,
    handleSearch,
    inputValue,
    navigate,
    dispatch,
    address,
    ...rest
  } = props;
  const login = useSelector((state) => state.login);
  const connect = useSelector((state) => state.connect);
  return (
    <Cover>
      <Flex
        display="flex"
        direction="column"
        justifyContent="space-around"
        height={searchView ? "100px" : "48px"}
      >
        <Flex
          width="90vw"
          display="flex"
          gap="0px"
          alignItems="unset"
          justifyContent="space-between"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "BeforeHeadCom320px")}
          {...rest}
        >
          <Flex
            gap="0"
            direction="row"
            // width="320px"
            height="50px"
            justifyContent="center"
            alignItems="center"
            top="calc(50% - 25px - 23px)"
            left="0%"
            right="0%"
            padding="0px 14px 0px 14px"
            {...getOverrideProps(overrides, "Menu")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 50")}
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
                  direction="row"
                  width="35px"
                  height="35px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Frame 48")}
                >
                  <Image
                    src={logo}
                    width="35px"
                    height="35px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="50px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:PfBvNnGIhmQ39443727"
                    )}
                  ></Image>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="center"
            alignSelf="stretch"
            position="relative"
            padding="0px 10px 0px 10px"
            {...getOverrideProps(overrides, "Frame 47")}
          >
            <SwitchField
              onChange={() => {
                setSearchView(!searchView);
              }}
            ></SwitchField>
            <div
              className="header_right"
              style={{ display: "flex", gap: "20px" }}
            >
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
              <Flex alignItems="center">
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
                  <LoginButton></LoginButton>
                )}
              </Flex>
            </div>
          </Flex>
        </Flex>
        <Flex justifyContent="flex-end">
          {searchView && (
            <SearchField
              width="90vw"
              height="33px"
              placeholder="Search"
              justifyContent="center"
              // position="absolute"
              top="55px"
              alignItems="center"
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
            ></SearchField>
          )}
        </Flex>
      </Flex>
    </Cover>
  );
}

const Cover = styled.div`
  .my-menu-content.amplify-menu-content {
    --amplify-components-button-border: none;
  }

  .my-menu-trigger.amplify-menu-trigger {
    --amplify-components-button-border-color: transparent;
  }

  .my-custom-switchfield {
    --amplify-components-switchfield-track-checked-background-color: #ffa500;
  }
`;
