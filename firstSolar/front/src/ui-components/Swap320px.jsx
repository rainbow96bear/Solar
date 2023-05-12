/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Image,
  Text,
  TextAreaField,
} from "@aws-amplify/ui-react";
import QuestionModalTop320px from "./QuestionModalTop320px";
import QuestionModalBottom320px from "./QuestionModalBottom320px";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "../css/Font.css";
import SwapCompletedModal from "./SwapCompletedModal";
import SwapFaildModal from "./SwapFaildModal";
import LoadingCompo from "./LoadingCompo";

export default function Swap320px(props) {
  const {
    overrides,
    oracleiddata,
    balance,
    userFirstBalance,
    userSecondBalance,
    firstSelectToken,
    secondSelectToken,
    firstAmountPrice,
    secondAmountPrice,
    questionMark,
    setQuestionMark,
    textareaValue,
    setTextAreaValue,
    handleTextareaChange,
    handleKeyPress,
    delayedFunction1,
    delayedFunction2,
    setPercentBalance,
    swapPossibility,
    swapMethod,
    swapSuccessModalOpen,
    setSwapSuccessModalOpen,
    swapFailModalOpen,
    setSwapFailModalOpen,
    rightPool,
    ...rest
  } = props;
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      <Flex
        gap="10px"
        direction="column"
        width="300px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="relative"
        borderRadius="35px"
        padding="18px 25px 18px 25px"
        backgroundImage="linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))"
        {...getOverrideProps(overrides, "Swap320px")}
        {...rest}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="12px 0px 12px 0px"
          {...getOverrideProps(overrides, "Top")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="37px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 58")}
          >
            <Text
              fontFamily="ffProMedium"
              fontSize="20px"
              fontWeight="700"
              lineHeight="24.204544067382812px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Swap"
              {...getOverrideProps(overrides, "Swap")}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="37px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 57")}
          >
            <Text
              fontFamily="ffProExtraLight"
              fontSize="14px"
              fontWeight="600"
              lineHeight="16.94318199157715px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Trade tokens in an instant"
              {...getOverrideProps(overrides, "Trade tokens in an instant")}
            ></Text>
          </Flex>
          <Flex
            gap="13px"
            direction="row"
            width="unset"
            height="37px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 59")}
          >
            <Flex
              gap="11px"
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
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 60")}
            >
              <Image
                width="20.83px"
                height="25px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="15px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                src={oracleiddata[0]?.mainNetLogo}
                {...getOverrideProps(overrides, "ghrgclzzd 4")}
              ></Image>
              <Image
                src={oracleiddata[0]?.platformLogo}
                width="20.83px"
                height="25px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="15px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 6")}
              ></Image>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          margin="15px 0px 25px 0px"
          gap="8px"
          direction="column"
          width="unset"
          height="11px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="11px 0px 11px 0px"
          {...getOverrideProps(overrides, "Line")}
        >
          <Flex
            gap="1px"
            direction="column"
            backgroundColor="rgba(255, 226, 0, 0.35)"
            borderRadius="30px"
            display={rightPool == false ? "flex" : "none"}
            color="white"
            padding="10px 10px 10px 10px"
            width="100%"
            justifyContent="center"
          >
            <Text
              color="rgba(2,21,25,0.85)"
              fontFamily="ffProExtraLight"
              fontSize="14px"
              fontWeight="600"
              lineHeight="22.99431800842285px"
              textAlign="left"
              display="flex"
              direction="row"
              justifyContent="center"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Select the appropriate"
            ></Text>
            <Text
              color="rgba(2,21,25,0.85)"
              fontFamily="ffProExtraLight"
              fontSize="14px"
              fontWeight="600"
              lineHeight="22.99431800842285px"
              textAlign="left"
              display="flex"
              direction="row"
              justifyContent="center"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Token for the pool."
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="18px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Bottom")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 74")}
          >
            <Flex
              gap="4px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="10px 0px 10px 0px"
              {...getOverrideProps(overrides, "Frame 7139942747")}
            >
              <Flex
                gap="16px"
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
                {...getOverrideProps(overrides, "Frame 7039942748")}
              >
                <Flex
                  gap="11px"
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
                  {...getOverrideProps(overrides, "Frame 7239942749")}
                >
                  <Flex
                    gap="9px"
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
                    {...getOverrideProps(overrides, "Frame 6939942750")}
                  >
                    <Image
                      src={oracleiddata[0]?.mainNetLogo}
                      width="25px"
                      height="25px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      shrink="0"
                      position="relative"
                      borderRadius="15px"
                      padding="0px 0px 0px 0px"
                      objectFit="cover"
                      {...getOverrideProps(overrides, "ghrgclzzd 739942751")}
                    ></Image>
                    <Text
                      fontFamily="ffProLight"
                      fontSize="13px"
                      fontWeight="600"
                      lineHeight="15.732954025268555px"
                      textAlign="center"
                      display="flex"
                      direction="column"
                      justifyContent="center"
                      width="unset"
                      height="unset"
                      gap="unset"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={firstSelectToken}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setQuestionMark(1);
                      }}
                      {...getOverrideProps(overrides, "DexName39942752")}
                    ></Text>
                    <Flex
                      gap="11px"
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
                      {...getOverrideProps(overrides, "Frame 10740102763")}
                    >
                      <svg
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setQuestionMark(1);
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width="13px"
                        height="13px"
                      >
                        <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                      </svg>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="4px"
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
                {...getOverrideProps(overrides, "Frame 7339942754")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="9px"
                  fontWeight="600"
                  lineHeight="10.892045021057129px"
                  textAlign="right"
                  display="flex"
                  direction="column"
                  justifyContent="center"
                  width="unset"
                  height="25px"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`Balance : ${
                    userFirstBalance ? userFirstBalance : 0
                  }`}
                  {...getOverrideProps(overrides, "Balance : 039942758")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="21px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-end"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
              padding="28px 14px 28px 14px"
              backgroundImage="linear-gradient(-7deg, rgba(251,251,250,0.78), rgba(246,247,248,0.15))"
              {...getOverrideProps(overrides, "Frame 6539942759")}
            >
              <TextAreaField
                width="unset"
                height="unset"
                placeholder="0.0"
                shrink="0"
                alignSelf="stretch"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={textareaValue}
                onChange={(e) => {
                  if (+e.target.value > +userFirstBalance) {
                    e.target.value = userFirstBalance;
                  }
                  setTextAreaValue(e.target.value);
                  handleTextareaChange(e);
                  delayedFunction1(e.target.value);
                }}
                onKeyPress={(e) => {
                  handleKeyPress(e);
                }}
                {...getOverrideProps(overrides, "TextAreaField40432785")}
              ></TextAreaField>
              <Flex
                gap="8px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="flex-end"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 6439942760")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="16px"
                  fontWeight="600"
                  color="rgba(239,239,239,1)"
                  lineHeight="24px"
                  textAlign="right"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="24px"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={firstAmountPrice ? firstAmountPrice : 0}
                  {...getOverrideProps(overrides, "12312312312312312339942761")}
                ></Text>
              </Flex>
              <Flex
                gap="7px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 6539942763")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-end"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundColor="rgba(234, 0, 50, 0.35)"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setPercentBalance(0.25);
                  }}
                  {...getOverrideProps(overrides, "Frame 8039942764")}
                >
                  <Text
                    color="rgba(250,251,251,0.85)"
                    fontFamily="ffProExtraLight"
                    fontSize="11px"
                    fontWeight="600"
                    lineHeight="21px"
                    textAlign="right"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="25%"
                    {...getOverrideProps(overrides, "25%39942765")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-end"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundColor="rgba(234, 0, 50, 0.35)"
                  onClick={() => {
                    setPercentBalance(0.5);
                  }}
                  {...getOverrideProps(overrides, "Frame 8139942766")}
                >
                  <Text
                    color="rgba(250,251,251,0.85)"
                    fontFamily="ffProExtraLight"
                    fontSize="11px"
                    fontWeight="600"
                    lineHeight="21px"
                    textAlign="right"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="50%"
                    {...getOverrideProps(overrides, "50%39942767")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-end"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundColor="rgba(234, 0, 50, 0.35)"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setPercentBalance(0.75);
                  }}
                  {...getOverrideProps(overrides, "Frame 8239942768")}
                >
                  <Text
                    color="rgba(250,251,251,0.85)"
                    fontFamily="ffProExtraLight"
                    fontSize="11px"
                    fontWeight="600"
                    lineHeight="21px"
                    textAlign="right"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="75%"
                    {...getOverrideProps(overrides, "75%39942769")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-end"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundColor="rgba(234, 0, 50, 0.35)"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setPercentBalance(1);
                  }}
                  {...getOverrideProps(overrides, "Frame 8339942770")}
                >
                  <Text
                    color="rgba(250,251,251,0.85)"
                    fontFamily="ffProExtraLight"
                    fontSize="11px"
                    fontWeight="600"
                    lineHeight="21px"
                    textAlign="right"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Max"
                    {...getOverrideProps(overrides, "Max39942771")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 75")}
          >
            <Flex
              gap="4px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="10px 0px 10px 0px"
              {...getOverrideProps(overrides, "Frame 7139942775")}
            >
              <Flex
                gap="16px"
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
                {...getOverrideProps(overrides, "Frame 7039942776")}
              >
                <Flex
                  gap="11px"
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
                  {...getOverrideProps(overrides, "Frame 7239942777")}
                >
                  <Flex
                    gap="9px"
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
                    {...getOverrideProps(overrides, "Frame 6939942778")}
                  >
                    <Image
                      src={oracleiddata[0]?.platformLogo}
                      width="25px"
                      height="25px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      shrink="0"
                      position="relative"
                      borderRadius="15px"
                      padding="0px 0px 0px 0px"
                      objectFit="cover"
                      {...getOverrideProps(overrides, "ghrgclzzd 739942779")}
                    ></Image>
                    <Text
                      fontFamily="ffProLight"
                      fontSize="13px"
                      fontWeight="600"
                      lineHeight="15.732954025268555px"
                      textAlign="center"
                      display="flex"
                      direction="column"
                      justifyContent="center"
                      width="unset"
                      height="unset"
                      gap="unset"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={secondSelectToken}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setQuestionMark(2);
                      }}
                      {...getOverrideProps(overrides, "DexName39942780")}
                    ></Text>
                    <Flex
                      gap="11px"
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
                      {...getOverrideProps(overrides, "Frame 10740102763")}
                    >
                      <svg
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setQuestionMark(2);
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width="13px"
                        height="13px"
                      >
                        <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                      </svg>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="4px"
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
                {...getOverrideProps(overrides, "Frame 7339942782")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="9px"
                  fontWeight="600"
                  lineHeight="10.892045021057129px"
                  textAlign="right"
                  display="flex"
                  direction="column"
                  justifyContent="center"
                  width="unset"
                  height="25px"
                  gap="unset"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`Balance : ${
                    userSecondBalance ? userSecondBalance : 0
                  }`}
                  {...getOverrideProps(overrides, "Balance : 039942786")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="21px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-end"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
              padding="28px 14px 28px 14px"
              backgroundImage="linear-gradient(-7deg, rgba(251,251,250,0.78), rgba(246,247,248,0.15))"
              {...getOverrideProps(overrides, "Frame 6539942787")}
            >
              <TextAreaField
                width="unset"
                height="unset"
                placeholder="0.0"
                shrink="0"
                alignSelf="stretch"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={secondAmountPrice ? secondAmountPrice : 0}
                disabled
                backgroundColor="transparent"
                onKeyPress={(e) => {
                  handleKeyPress(e);
                }}
                {...getOverrideProps(overrides, "TextAreaField40432792")}
              ></TextAreaField>
              <Flex
                gap="8px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="flex-end"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 6439942788")}
              ></Flex>
            </Flex>
          </Flex>

          <Button
            marginTop="8px"
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="15px"
            padding="13px 73px 13px 73px"
            backgroundColor={
              swapPossibility ? "rgba(234,0,50,0.45)" : "rgba(230,230,230,1)"
            }
            disabled={!swapPossibility}
            style={{
              cursor: swapPossibility ? "pointer" : "not-allowed",
            }}
            onClick={async () => {
              if (!swapPossibility) return;
              await swapMethod();
            }}
            {...getOverrideProps(overrides, "Frame 63")}
          >
            <Text
              fontFamily="ffProBook"
              fontSize="19px"
              fontWeight="600"
              color="rgba(239,239,239,1)"
              lineHeight="22.99431800842285px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="168.27px"
              height="23px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Enter an Swap"
              {...getOverrideProps(overrides, "Enter an Amount")}
            ></Text>
          </Button>
        </Flex>
        {questionMark == 1 ? (
          <QuestionModalTop320px
            setquestionmark={setQuestionMark}
            secondselecttoken={secondSelectToken}
            setfirstselecttoken={setFirstSelectToken}
          ></QuestionModalTop320px>
        ) : questionMark == 2 ? (
          <QuestionModalBottom320px
            setquestionmark={setQuestionMark}
            firstselecttoken={firstSelectToken}
            setsecondselecttoken={setSecondSelectToken}
          ></QuestionModalBottom320px>
        ) : (
          <></>
        )}
        {swapSuccessModalOpen && (
          <LoadingModal>
            <SwapCompletedModal
              setSwapSuccessModalOpen={setSwapSuccessModalOpen}
              firstSelectToken={firstSelectToken}
              secondSelectToken={secondSelectToken}
            />
          </LoadingModal>
        )}
        {swapFailModalOpen && (
          <LoadingModal>
            <SwapFaildModal
              setSwapFailModalOpen={setSwapFailModalOpen}
              firstSelectToken={firstSelectToken}
              secondSelectToken={secondSelectToken}
            />
          </LoadingModal>
        )}
        {isLoading && (
          <LoadingModal>
            <LoadingCompo />
          </LoadingModal>
        )}
      </Flex>
    </>
  );
}

const LoadingModal = styled.div`
  width: 100vmax;
  height: 100vmax;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  align-items: center;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  z-index: 999999999;
`;
