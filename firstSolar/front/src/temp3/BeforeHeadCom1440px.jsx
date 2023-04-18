/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, SearchField, Text } from "@aws-amplify/ui-react";
import { connectThunk } from "../modules/connect.js";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/logo_new.png";
import LoginAccount from "./LoginAccount.jsx";
import ConnectModal from "./ConnectModal.jsx";
import ConnectButton from "./ConnectButton.jsx";
import LoadingButton from "./LoadingButton.jsx";

export default function BeforeHeadCom1440px(props) {
  const { overrides, ...rest } = props;
  const dispatch = useDispatch();
  const connect = useSelector(state => state.connect.connect.connect);
  const navigate = useNavigate();

  const logout = () => {
    document.cookie =
      document.cookie.split(":")[0] +
      account +
      "=; expires=Thu, 01 Jan 1999 00:00:10 GMT";
    dispatch(connectThunk({ connect: false }));
    navigate("/");
  };

  return (
    <Flex
      display={{
        base: "none",
        small: "none",
        medium: "none",
        large: "none",
        xl: "flex",
        xxl: "flex",
      }}
      direction="row"
      width="1200px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      className="Header_innerBox"
      {...getOverrideProps(overrides, "BeforeHeadCom1440px")}
      {...rest}
    >
      <div className="Header_left">
        <Flex
          gap="24px"
          direction="row"
          width="221px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 14px 0px 14px"
          {...getOverrideProps(overrides, "Menu39423087")}
        >
          <Link to="/">
            <Image
              src={logo}
              width="40px"
              height="40px"
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
          </Link>
          <Text
            fontFamily="Inter"
            fontSize="34px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="41.147727966308594px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="41px"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Menu"
            {...getOverrideProps(overrides, "Menu39423082")}
          ></Text>
        </Flex>
      </div>
      {/* <div className="Header_middle"> */}
      <SearchField
        width="unset%"
        height="unset"
        placeholder="Search"
        justifyContent="center"
        alignItems="center"
        grow="0.7"
        shrink="1"
        basis="0"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      {/* </div> */}
      <div className="Header_right">
        {connect ? (
          document.cookie ? (
            <LoginAccount></LoginAccount>
          ) : (
            <>
              <ConnectModal></ConnectModal>
              <LoadingButton></LoadingButton>
            </>
          )
        ) : (
          <div className="Header_connect">
            <ConnectButton></ConnectButton>
          </div>
        )}
      </div>
    </Flex>
  );
}
