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
  Icon,
  Image,
  SearchField,
  View,
  SwitchField,
} from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import LoginAccount from "./LoginAccount";
import ConnectModal from "./ConnectModal";
import LoggedinUser from "./LoggedinUser";
export default function BeforeHeadCom320px(props) {
  const { overrides, ...rest } = props;
  const [searchView, setSearchView] = React.useState(false);
  const connect = useSelector((state) => state.connect.connect.connect);
  return (
    <View
      width="320px"
      height={searchView ? "96px" : "48px"}
      display={{
        base: "flex",
        small: "none",
        medium: "none",
        large: "none",
        xl: "none",
        xxl: "none",
      }}
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "BeforeHeadCom320px")}
      {...rest}
    >
      {searchView ? (
        <SearchField
          width="300px"
          height="33px"
          placeholder="Search"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          overflow="hidden"
          top="65.63%"
          bottom="0%"
          left="3.13%"
          right="3.13%"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
      ) : (
        <></>
      )}
      <Flex
        gap="0"
        direction="row"
        width="320px"
        height="50px"
        justifyContent="center"
        alignItems="center"
        // position="absolute"
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
            direction="row"
            width="35px"
            height="35px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            // padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:PfBvNnGIhmQ39443727")}
            ></Image>
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
            // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            padding="5px 5px 5px 5px"
            {...getOverrideProps(overrides, "Frame 49")}
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
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 47")}
        >
          {/* <SearchButtonCover> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg> */}
          <SwitchField
            onChange={() => {
              setSearchView(!searchView);
            }}
          ></SwitchField>
          {/* </SearchButtonCover> */}
          {connect ? (
            document.cookie ? (
              <LoggedinUser></LoggedinUser>
            ) : (
              <ConnectModal></ConnectModal>
            )
          ) : (
            <LoginButton></LoginButton>
          )}
          {/* <Icon
            width="30px"
            height="30px"
            viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
            paths={[
              {
                d: "M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",
                fill: "rgba(217,217,217,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Ellipse 1")}
          ></Icon> */}
        </Flex>
      </Flex>
    </View>
  );
}

const SearchButtonCover = styled.div`
  width: 30px;
  display: flex;

  height: 30px;
  padding: 5px;
`;
