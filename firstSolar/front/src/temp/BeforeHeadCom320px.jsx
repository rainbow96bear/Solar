/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Image,
  SearchField,
  SwitchField,
  Menu,
  MenuItem,
  Divider,
} from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import ConnectModal from "./ConnectModal";
import LoggedinUser from "./LoggedinUser";
import { useAccount } from "wagmi";
import LoadingButton768 from "./LoadingButton768";
import { Web3Button } from "@web3modal/react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
export default function BeforeHeadCom320px(props) {
  const { overrides, ...rest } = props;
  const [searchView, setSearchView] = React.useState(false);
  const login = useSelector(state => state.login.login.login);
  const { address } = useAccount();
  const navigate = useNavigate();
  const connect = useSelector(state => state.connect.connect.connect);
  const isMobile = useMediaQuery({
    query: "(min-width:0px) and (max-width:480px)",
  });

  return (
    <>
      {isMobile ? (
        <Cover>
          <Flex
            display="flex"
            direction="column"
            height={searchView ? "100px" : "48px"}
          >
            <Flex
              width="90vw"
              display="flex"
              gap="0px"
              alignItems="unset"
              justifyContent="unset"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "BeforeHeadCom320px")}
              {...rest}
            >
              <Flex
                gap="0"
                direction="row"
                width="320px"
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
                  <Flex
                    gap="10px"
                    direction="row"
                    width="30px"
                    height="30px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    padding="5px 5px 5px 5px"
                    {...getOverrideProps(overrides, "Frame 49")}
                  ></Flex>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="30px"
                  height="30px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Frame 49")}
                ></Flex>
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
                <div className="header_right">
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
            </Flex>
            <Flex justifyContent="flex-end">
              {searchView && (
                <SearchField
                  width="90vw"
                  height="33px"
                  placeholder="Search"
                  justifyContent="center"
                  position="absolute"
                  top="55px"
                  alignItems="center"
                  isDisabled={false}
                  labelHidden={false}
                  variation="quiet"
                ></SearchField>
              )}
            </Flex>
          </Flex>
        </Cover>
      ) : (
        <></>
      )}
    </>
  );
}

const Cover = styled.div`
  display: flex;
  align-items: center;

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
