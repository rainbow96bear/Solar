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
  Loader,
  SearchField,
  useTheme,
} from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import LoginAccount from "./LoginAccount";
import ConnectModal from "./ConnectModal";
import ConnectButton from "./ConnectButton";
import LoadingButton from "./LoadingButton";
import LoggedinUser from "./LoggedinUser";
import LoginButton from "./LoginButton";
export default function BeforeHeadCom768px(props) {
  const { overrides, ...rest } = props;
  const { tokens } = useTheme();
  const connect = useSelector(state => state.connect.connect.connect);

  return (
    <Cover>
      <Flex
        display={{
          base: "none",
          small: "flex",
          medium: "flex",
          large: "flex",
          xl: "none",
          xxl: "none",
        }}
        gap="26px"
        direction="row"
        width="80vw"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BeforeHeadCom768px")}
        {...rest}
      >
        <Flex
          gap="24px"
          direction="row"
          width="unset"
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
            gap="10px"
            direction="row"
            width="57.56px"
            height="58px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
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
          <Flex
            gap="10px"
            direction="row"
            width="57.56px"
            height="58px"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 45")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="30px"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </Flex>
        </Flex>
        <SearchField
          className="searchInput"
          // maxWidth="305px"
          width="50%"
          height="unset"
          placeholder="Search"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <div className="header_right">
          {connect ? (
            document.cookie ? (
              <LoggedinUser></LoggedinUser>
            ) : (
              <>
                <ConnectModal></ConnectModal>
                {/* <Flex
                  direction="column"
                  justifycontent="center"
                  alignItems="center"
                  position="absolute"
                  top="77.01%"
                  bottom="40.6%"
                  left="14.03%"
                  right="19.76%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                > */}
                <Loader
                  width="30px"
                  height="30px"
                  emptyColor={tokens.colors.red}
                  filledColor={tokens.colors.red[40]}
                />

                {/* </Flex> */}
              </>
            )
          ) : (
            <div className="Header_connect">
              <LoginButton></LoginButton>
            </div>
          )}
        </div>
        {/* <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 4639443728")}
        >
          <Image
            width="37.56px"
            height="38px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "unsplash:PfBvNnGIhmQ39443729")}
          ></Image>
        </Flex> */}
      </Flex>
    </Cover>
  );
}

const Cover = styled.div`
  input::placeholder {
    width: 60px;
  }
`;
