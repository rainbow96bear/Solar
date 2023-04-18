/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, SearchField, useTheme } from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ConnectModal from "./ConnectModal";
import LoggedinUser from "./LoggedinUser";
import LoginButton from "./LoginButton";

export default function BeforeHeadCom768px(props) {
  const { tokens } = useTheme();
  const connect = useSelector(state => state.connect.connect.connect);
  const { overrides, ...rest } = props;
  return (
    <Cover>
      <Flex
        display={{
          base: "none",
          small: "flex",
          medium: "flex",
          large: "none",
          xl: "none",
          xxl: "none",
        }}
        gap="26px"
        direction="row"
        width="90vw"
        height="unset"
        justifyContent="center"
        alignItems="center"
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
              width="37.56px"
              height="38px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
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
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 45")}
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
              borderRadius="50px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "unsplash:PfBvNnGIhmQ39433251")}
            ></Image>
          </Flex>
        </Flex>
        <SearchField
          width="305px"
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

        <div className="header_right">
          {connect ? (
            document.cookie ? (
              <LoggedinUser></LoggedinUser>
            ) : (
              <>
                <ConnectModal></ConnectModal>
                <Loader
                  width="30px"
                  height="30px"
                  emptyColor={tokens.colors.red}
                  filledColor={tokens.colors.red[40]}
                />
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
`;
