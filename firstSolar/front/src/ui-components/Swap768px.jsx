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
import QuestionModalTop from "./QuestionModalTop";
import QuestionModalBottom from "./QuestionModalBottom";
import { useDispatch, useSelector } from "react-redux";
import {
  getConvertPrice,
  swapApprove,
  swapBalance,
  swapTransaction,
} from "../api";
import { useAccount } from "wagmi";
import { useWeb3 } from "../modules/useWeb3.js";
import { isLoadingThunk } from "../modules/isLoading.js";
import styled from "styled-components";
import "../css/Font.css";
import SwapCompletedModal from "./SwapCompletedModal";
import SwapFaildModal from "./SwapFaildModal";
import { useWeb3T } from "../modules/useWeb3Trust";
import { useWeb3C } from "../modules/useWeb3Coinbase";
import { useNavigate } from "react-router";

export default function Swap768px(props) {
  const { overrides, ...rest } = props;
  const { web3, account, chainId, login } = useWeb3();
  const { web3T, accountT, chainIdT, loginT } = useWeb3T();
  const { web3C, accountC, chainIdC, loginC } = useWeb3C();
  const navigate = useNavigate();

  const { address } = useAccount();
  const address2 = useSelector((state) => state.account.account.account);
  const [userFirstBalance, setUserFirstBalance] = React.useState(0);
  const [userSecondBalance, setUserSecondBalance] = React.useState(0);
  const dispatch = useDispatch();
  const [textareaValue, setTextAreaValue] = React.useState("");
  const [swapPossibility, setSwapPossibility] = React.useState(false);
  const [rightPool, setRightPool] = React.useState(false);
  const [questionMark, setQuestionMark] = React.useState(0);

  const [swapSuccessModalOpen, setSwapSuccessModalOpen] = React.useState(false);
  const [swapFailModalOpen, setSwapFailModalOpen] = React.useState(false);

  const [convertPrice, setConvertPrice] = React.useState({
    bnb: "",
    eth: "",
    usdt: "",
  });

  const [firstAmountPrice, setFirstAmountPrice] = React.useState(0);
  const [secondAmountPrice, setSecondAmountPrice] = React.useState(0);

  const [firstSelectToken, setFirstSelectToken] = React.useState("DFS");
  const [firstSelectTokenPrice, setFirstSelectTokenPrice] = React.useState(0);

  const [secondSelectToken, setSecondSelectToken] = React.useState("ETH");
  const [secondSelectTokenPrice, setSecondSelectTokenPrice] =
    React.useState("");

  React.useEffect(() => {
    (async () => {
      try {
        dispatch(isLoadingThunk({ isLoading: true }));
        const { bnb, eth, usdt, tokenPrice } = await getConvertPrice(
          firstSelectToken
        );
        setConvertPrice({ bnb: bnb, eth: eth, usdt: usdt });
        setFirstSelectTokenPrice(tokenPrice);
        setTextAreaValue(0);
        setFirstAmountPrice(0);
        setSecondAmountPrice(0);

        setTimeout(() => {
          dispatch(isLoadingThunk({ isLoading: false }));
        }, 2000);
      } catch (error) {
        console.error(error);
        dispatch(isLoadingThunk({ isLoading: false }));
      }
    })();
  }, [firstSelectToken]);

  React.useEffect(() => {
    if (firstSelectToken == "DFS") {
      setSecondSelectToken("ETH");
    } else if (firstSelectToken != "DFS") {
      setSecondSelectToken("DFS");
    }
  }, [firstSelectToken]);

  React.useEffect(() => {
    (async () => {
      try {
        const data = await swapBalance(
          address ? address : address2,
          firstSelectToken
        );
        setUserFirstBalance(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [firstSelectToken]);

  React.useEffect(() => {
    (async () => {
      try {
        const data = await swapBalance(
          address ? address : address2,
          secondSelectToken
        );
        setUserSecondBalance(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [secondSelectToken]);

  React.useEffect(() => {
    if (
      textareaValue == 0 ||
      textareaValue == undefined ||
      textareaValue == null ||
      textareaValue > userFirstBalance ||
      !props?.oracleiddata[0]?.name.includes(firstSelectToken) ||
      !props?.oracleiddata[0]?.name.includes(secondSelectToken)
    ) {
      setSwapPossibility(false);
    } else {
      setSwapPossibility(true);
    }
  }, [firstSelectToken, secondSelectToken, textareaValue]);

  React.useEffect(() => {
    if (
      !props?.oracleiddata[0]?.name.includes(firstSelectToken) ||
      !props?.oracleiddata[0]?.name.includes(secondSelectToken)
    ) {
      setRightPool(false);
    } else setRightPool(true);
  }, [firstSelectToken, secondSelectToken]);

  React.useEffect(() => {
    if (document.cookie) {
      if (document.cookie.split(":")[0] == "metamask") {
        login();
      } else if (document.cookie.split(":")[0] == "trust") {
        loginT();
      } else if (document.cookie.split(":")[0] == "coinbase") {
        loginC();
      }
    } else navigate("/redirectHome");
  }, []);

  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9", // 0-9
    "Numpad0",
    "Numpad1",
    "Numpad2",
    "Numpad3",
    "Numpad4",
    "Numpad5",
    "Numpad6",
    "Numpad7",
    "Numpad8",
    "Numpad9", // 키보드 상단의 0-9
    ".", // 소수점
    "Backspace", // 백스페이스
  ];

  const handleKeyPress = (e) => {
    const keyCode = e.key;
    if (!allowedKeys.includes(keyCode)) {
      e.preventDefault();
    }
  };

  const setPercentBalance = (percentNum) => {
    if (
      userFirstBalance == 0 &&
      userFirstBalance == undefined &&
      userFirstBalance == null
    )
      return;
    setTextAreaValue(userFirstBalance * percentNum);
    delayedFunction1(userFirstBalance * percentNum);
  };

  const handleTextareaChange = (event) => {
    const value = event.target.value;

    const filteredValue = value.replace(/[^0-9.\b]/g, "");

    if (
      filteredValue.length > 1 &&
      filteredValue.startsWith("0") &&
      !filteredValue.startsWith("0.")
    ) {
      setTextAreaValue(filteredValue.slice(1));
    } else {
      const dotIndex = filteredValue.indexOf(".");
      const lastDotIndex = filteredValue.lastIndexOf(".");
      if (dotIndex !== -1 && dotIndex !== lastDotIndex) {
        const newValue =
          filteredValue.substring(0, dotIndex) +
          filteredValue.substring(dotIndex + 1);
        setTextAreaValue(newValue);
      } else {
        setTextAreaValue(filteredValue);
      }
    }
  };
  let timerId = null;

  function delayedFunction1(num) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      try {
        setFirstAmountPrice(num * firstSelectTokenPrice);
        delayedFunction2(num);
      } catch (error) {
        console.error(error);
      } finally {
        timerId = null;
      }
    }, 1000);
  }

  const delayedFunction2 = (num) => {
    try {
      if (secondSelectToken == "DFS") {
        setSecondAmountPrice(convertPrice.usdt * num);
      } else if (secondSelectToken == "ETH") {
        setSecondAmountPrice(convertPrice.eth * num);
      } else if (secondSelectToken == "BNB") {
        setSecondAmountPrice(convertPrice.bnb * num);
      } else if (secondSelectToken == "USDT") {
        setSecondAmountPrice(convertPrice.usdt * num);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const swapMethod = async () => {
    try {
      dispatch(isLoadingThunk({ isLoading: true }));

      const result1 = (
        await swapApprove(
          address ? address : address2,
          firstSelectToken.toLowerCase(),
          textareaValue,
          props?.oracleiddata[0].tokenAddress
        )
      ).data;
      let transactionResult;
      if (document.cookie.split(":")[0] == "metamask") {
        transactionResult = await web3.eth.sendTransaction(result1);
      } else if (document.cookie.split(":")[0] == "trust") {
        transactionResult = await web3T.eth.sendTransaction(result1);
      } else if (document.cookie.split(":")[0] == "coinbase") {
        transactionResult = await web3C.eth.sendTransaction(result1);
      }

      const result2 = (
        await swapTransaction(
          address ? address : address2,
          props?.oracleiddata[0].oracleId,
          +textareaValue,
          firstSelectToken.toLowerCase(),
          secondSelectToken.toLowerCase()
        )
      ).data;

      if (document.cookie.split(":")[0] == "metamask") {
        transactionResult = await web3.eth.sendTransaction(result2);
      } else if (document.cookie.split(":")[0] == "trust") {
        transactionResult = await web3T.eth.sendTransaction(result2);
      } else if (document.cookie.split(":")[0] == "coinbase") {
        transactionResult = await web3C.eth.sendTransaction(result2);
      }

      const firstBalanceTemp = await swapBalance(
        address ? address : address2,
        firstSelectToken
      );
      setUserFirstBalance(firstBalanceTemp);

      const secondBalanceTemp = await swapBalance(
        address ? address : address2,
        secondSelectToken
      );
      setUserSecondBalance(secondBalanceTemp);
      setTextAreaValue("");
      dispatch(isLoadingThunk({ isLoading: false }));

      setSwapSuccessModalOpen(true);
    } catch (error) {
      console.error(error);
      dispatch(isLoadingThunk({ isLoading: false }));
      setSwapFailModalOpen(true);
    }
  };
  return (
    <>
      <Flex
        gap="10px"
        direction="column"
        top={{
          small: "-230px",
          medium: "-150px",
          large: "-15px",
        }}
        right={{
          small: "0px",
          medium: "0px",
          large: "100px",
        }}
        width={{
          small: "90vw",
          medium: "90vw",
          large: "43vw",
        }}
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="45px"
        padding={{
          small: "27px 43px 27px 43px",
          medium: "27px 43px 27px 43px",
          large: "39px 86px 39px 86px",
        }}
        backgroundImage="linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))"
        {...getOverrideProps(overrides, "Swap768px")}
        {...rest}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="151px"
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
              fontSize="32px"
              fontWeight="700"
              lineHeight="38.727272033691406px"
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
            marginTop="4px"
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
              fontSize="18px"
              fontWeight="600"
              color="rgba(43,43,43,1)"
              lineHeight="21.784090042114258px"
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
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
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
                width="38.66px"
                height="35px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                src={props?.oracleiddata[0]?.mainNetLogo}
                {...getOverrideProps(overrides, "ghrgclzzd 4")}
              ></Image>
              <Image
                src={props?.oracleiddata[0]?.platformLogo}
                width="38.66px"
                height="35px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 6")}
              ></Image>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          margin="15px 15px 25px 15px"
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
            backgroundColor="rgba(234, 0, 50, 0.35)"
            borderRadius="30px"
            display={rightPool == false ? "flex" : "none"}
            color="white"
            width={{
              base: "55vw",
              small: "75vw",
              medium: "45vw",
              large: "38vw",
            }}
            padding="10px 10px 10px 10px"
            justifyContent="center"
          >
            <Text
              color="rgba(250,251,251,0.85)"
              fontFamily="ffProExtraLight"
              fontSize={{ base: "15px", small: "15px", medium: "13.5px" }}
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
              children="Select the appropriate token for the pool."
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="19px"
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
              {...getOverrideProps(overrides, "Frame 71")}
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
                {...getOverrideProps(overrides, "Frame 7239752875")}
              >
                <Image
                  src={props?.oracleiddata[0]?.mainNetLogo}
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
                  {...getOverrideProps(overrides, "ghrgclzzd 739752855")}
                ></Image>
                <Text
                  fontFamily="ffProLight"
                  fontSize="19px"
                  fontWeight="600"
                  lineHeight="22.99431800842285px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="center"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="flex-start"
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
                  {...getOverrideProps(overrides, "DexName39752856")}
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
                    width="15px"
                    height="15px"
                  >
                    <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                  </svg>
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
                {...getOverrideProps(overrides, "Frame 7339752882")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="14px"
                  fontWeight="600"
                  lineHeight="16.94318199157715px"
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
                    userFirstBalance ? userFirstBalance : 0
                  }`}
                  {...getOverrideProps(overrides, "Balance : 039752863")}
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
              padding="28px 18px 28px 18px"
              backgroundImage="linear-gradient(-7deg, rgba(251,251,250,0.78), rgba(246,247,248,0.15))"
              {...getOverrideProps(overrides, "Frame 6539752830")}
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
                {...getOverrideProps(overrides, "TextAreaField40432770")}
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
                {...getOverrideProps(overrides, "Frame 6439752829")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="16px"
                  fontWeight="600"
                  color="rgba(5,2,3,0.75)"
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
                  {...getOverrideProps(overrides, "12312312312312312339752827")}
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 6539814034")}
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
                  backgroundColor="rgba(255, 226, 0, 0.35)"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setPercentBalance(0.25);
                  }}
                  {...getOverrideProps(overrides, "Frame 8039814040")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="14px"
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
                    {...getOverrideProps(overrides, "25%39814035")}
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
                  backgroundColor="rgba(255, 226, 0, 0.35)"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setPercentBalance(0.5);
                  }}
                  {...getOverrideProps(overrides, "Frame 8139814043")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="14px"
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
                    {...getOverrideProps(overrides, "50%39814044")}
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
                  backgroundColor="rgba(255, 226, 0, 0.35)"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setPercentBalance(0.75);
                  }}
                  {...getOverrideProps(overrides, "Frame 8239814045")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="14px"
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
                    {...getOverrideProps(overrides, "75%39814046")}
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
                  backgroundColor="rgba(255, 226, 0, 0.35)"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setPercentBalance(1);
                  }}
                  {...getOverrideProps(overrides, "Frame 8339814047")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="14px"
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
                    {...getOverrideProps(overrides, "Max39814048")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 67")}
          ></Flex>
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
              {...getOverrideProps(overrides, "Frame 71")}
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
                {...getOverrideProps(overrides, "Frame 7239752875")}
              >
                <Image
                  src={props?.oracleiddata[0]?.platformLogo}
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
                  {...getOverrideProps(overrides, "ghrgclzzd 739752855")}
                ></Image>
                <Text
                  fontFamily="ffProLight"
                  fontSize="19px"
                  fontWeight="600"
                  lineHeight="22.99431800842285px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="center"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="flex-start"
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
                  {...getOverrideProps(overrides, "DexName39752856")}
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
                    width="15px"
                    height="15px"
                  >
                    <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                  </svg>
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
                {...getOverrideProps(overrides, "Frame 7339752882")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="14px"
                  fontWeight="600"
                  lineHeight="16.94318199157715px"
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
                  {...getOverrideProps(overrides, "Balance : 039752863")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="21px"
              direction="column"
              width="unset"
              height="200px"
              justifyContent="center"
              alignItems="flex-end"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
              padding="28px 18px 28px 18px"
              backgroundImage="linear-gradient(-7deg, rgba(251,251,250,0.78), rgba(246,247,248,0.15))"
              {...getOverrideProps(overrides, "Frame 6539752830")}
            >
              <TextAreaField
                width="unset"
                height="100%"
                placeholder="0.0"
                shrink="0"
                alignSelf="stretch"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={secondAmountPrice ? secondAmountPrice : 0}
                disabled
                backgroundColor="transparent"
                onKeyPress={(e) => {
                  handleKeyPress(e);
                }}
                {...getOverrideProps(overrides, "TextAreaField40432770")}
              ></TextAreaField>
            </Flex>
          </Flex>

          <Button
            marginTop="15px"
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
            border="0px"
            disabled={!swapPossibility}
            style={{ cursor: swapPossibility ? "pointer" : "not-allowed" }}
            onClick={async () => {
              if (!swapPossibility) return;
              await swapMethod();
            }}
            {...getOverrideProps(overrides, "Frame 63")}
          >
            <Text
              fontFamily="ffProBook"
              fontSize="25px"
              fontWeight="700"
              color="rgba(249,249,249,1)"
              lineHeight="30.25568199157715px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="center"
              width="347.98px"
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
          <QuestionModalTop
            setquestionmark={setQuestionMark}
            secondselecttoken={secondSelectToken}
            setfirstselecttoken={setFirstSelectToken}
          ></QuestionModalTop>
        ) : questionMark == 2 ? (
          <QuestionModalBottom
            setquestionmark={setQuestionMark}
            firstselecttoken={firstSelectToken}
            setsecondselecttoken={setSecondSelectToken}
          ></QuestionModalBottom>
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
