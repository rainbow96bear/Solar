/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Image,
  Text,
  Icon,
  TextAreaField,
  SwitchField,
} from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import "../css/Font.css";
import { useDispatch, useSelector } from "react-redux";
import { approveLp, deposit } from "../api";
import { useWeb3 } from "../modules/useWeb3";

import { setIsLoading } from "../modules/isLoading";
import { setCompleteModal } from "../modules/completeModal";
import DepositCompletedModal from "./DepositCompletedModal";
import DepositFaildModal from "./DepositFaildModal";
import { setAutoCompound } from "../api";

import { useWeb3C } from "../modules/useWeb3Coinbase";
import { useWeb3T } from "../modules/useWeb3Trust";

import "../css/Modal.css";
import LoadingCompo from "./LoadingCompo";

export default function QuestionModalDeposit(props) {
  const {
    overrides,
    autoState,
    setQuestionMark,
    mypageList,
    mypageLpListUp,
    lpTokenValue,
    lpToken,
    setLpTokenValue,
    mypageMethod,
    pid,
    lpTokenBalance,
    getAutoCompoundStatusFunc,
    auto,
    dispatch,
    navigate,
    ...rest
  } = props;
  const { web3, account, chainId, login } = useWeb3();
  const { web3T, accountT, loginT } = useWeb3T();
  const { web3C, accountC, loginC } = useWeb3C();
  const [balanceChange, setBalanceChange] = useState(false);
  const [autoChange, setAutoChange] = useState(auto);
  const [modalText, setModalText] = useState("");

  const account2 = useSelector((state) => state.account);
  const isLoading = useSelector((state) => state.isLoading);

  const [depositAmountValue, setDepositAmountValue] = useState(0);

  const [depositSuccessModalOpen, setDepositSuccessModalOpen] = useState(false);
  const [depositFailModalOpen, setDepositFailModalOpen] = useState(false);

  useEffect(() => {
    if (document.cookie) {
      if (document.cookie.split(":")[0] == "metamask") {
        login();
      } else if (document.cookie.split(":")[0] == "trust") {
        loginT();
      } else if (document.cookie.split(":")[0] == "coinbase") {
        loginC();
      }
    }
  }, []);

  const depositFunc = async () => {
    try {
      dispatch(setIsLoading(true));
      setModalText("Deposit");
      const result1 = await approveLp(account2, +depositAmountValue, lpToken);

      let transactionResult1;

      if (document.cookie.split(":")[0] == "metamask") {
        transactionResult1 = await web3.eth.sendTransaction(result1);
      } else if (document.cookie.split(":")[0] == "trust") {
        transactionResult1 = await web3T.eth.sendTransaction(result1);
      } else if (document.cookie.split(":")[0] == "coinbase") {
        transactionResult1 = await web3C.eth.sendTransaction(result1);
      }

      const result2 = await deposit(account2, +depositAmountValue, lpToken);

      let transactionResult2;

      if (document.cookie.split(":")[0] == "metamask") {
        transactionResult2 = await web3.eth.sendTransaction(result2);
      } else if (document.cookie.split(":")[0] == "trust") {
        transactionResult2 = await web3T.eth.sendTransaction(result2);
      } else if (document.cookie.split(":")[0] == "coinbase") {
        transactionResult2 = await web3C.eth.sendTransaction(result2);
      }

      setDepositAmountValue(0);

      setBalanceChange(!balanceChange);

      dispatch(setIsLoading(false));
      dispatch(setCompleteModal(true));
      setDepositSuccessModalOpen(true);
    } catch (error) {
      console.error(error);
      dispatch(setIsLoading(false));
      setDepositFailModalOpen(true);
    }
  };
  const autoFunc = async () => {
    try {
      setModalText("Auto Compounding");
      dispatch(setIsLoading(true));
      const result1 = await setAutoCompound(account2, lpToken);

      let transactionResult1 = await web3.eth.sendTransaction(result1);
      await getAutoCompoundStatusFunc();
      dispatch(setIsLoading(false));
      dispatch(setCompleteModal(true));
      setDepositSuccessModalOpen(true);
    } catch (error) {
      console.error(error);
      dispatch(setIsLoading(false));
      setDepositFailModalOpen(true);
    }
  };

  useEffect(() => {
    mypageMethod();
  }, [balanceChange]);

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <ModalCover
      onClick={(e) => {
        e.preventDefault;
        if (e.target !== e.currentTarget) return;
      }}
    >
      <Flex
        className="depositModal"
        gap="38px"
        direction="column"
        width={{ base: "85vw", small: "85vw", medium: "80vw" }}
        height={{ base: "unset", small: "unset", medium: "unset" }}
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        borderRadius="50px"
        padding="0px 0px 45px 0px"
        backgroundColor="rgba(252,253,254,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        overflow="hidden"
        {...getOverrideProps(overrides, "Deposit1024px")}
        {...rest}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="35px 66px 35px 66px"
          style={{
            borderBottom: "1px dashed rgba(255,226,0,0.35)",
            borderWidth: "2px",
          }}
          {...getOverrideProps(overrides, "Frame 105")}
        >
          <Text
            fontFamily="ffProBold"
            fontSize="28px"
            fontWeight="700"
            lineHeight="29.045454025268555px"
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Deposit"
            {...getOverrideProps(overrides, "Deposit40822779")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="5px 5px 5px 5px"
            className="cursorPointer"
            style={{ cursor: "pointer" }}
            {...getOverrideProps(overrides, "XIcon")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M3.59236 0L0 3.59236L1.8344 5.42675L6.36943 10.0382L1.8344 14.5732L0 16.3312L3.59236 20L5.42675 18.1656L10.0382 13.5541L14.5732 18.1656L16.3312 20L20 16.3312L18.1656 14.5732L13.5541 10.0382L18.1656 5.42675L20 3.59236L16.3312 1.13144e-15L14.5732 1.8344L10.0382 6.36943L5.42675 1.8344L3.59236 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              onClick={() => {
                setQuestionMark(0);
              }}
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
        </Flex>
        <Flex
          gap="43px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 74px 0px 74px"
          {...getOverrideProps(overrides, "Frame 106")}
        >
          <Flex
            gap="11px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 96")}
          >
            <Text
              fontFamily="ffProLight"
              fontSize="15px"
              fontWeight="600"
              lineHeight="18.15340805053711px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="AUTO COMPOUNDING"
              {...getOverrideProps(overrides, "CHOOSE TOKEN PAIR")}
            ></Text>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 90")}
            >
              <SwitchField
                isChecked={auto ? true : false}
                onClick={(e) => {
                  e.preventDefault();
                  setAutoChange((state) => !state);
                }}
              ></SwitchField>
              <Flex
                gap="5px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="0.35"
                shrink="1"
                basis="0"
                position="relative"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="25px"
                padding="10px 12px 10px 12px"
                backgroundColor="rgba(0,136,153,0.59)"
                {...getOverrideProps(overrides, "Dexname2")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="17px"
                  fontWeight="600"
                  color="rgba(239,239,239,1)"
                  lineHeight="20.573863983154297px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="center"
                  width="unset"
                  height="16px"
                  gap="unset"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={auto ? "ON" : "OFF"}
                  {...getOverrideProps(overrides, "DEX Name40822792")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="11px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 96")}
          >
            <Text
              fontFamily="ffProLight"
              fontSize="15px"
              fontWeight="600"
              lineHeight="18.15340805053711px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="TOKEN PAIR"
              {...getOverrideProps(overrides, "CHOOSE TOKEN PAIR")}
            ></Text>
            <Flex
              gap="24px"
              direction={{ base: "column", small: "row" }}
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 90")}
            >
              <Flex
                gap="15px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="25px"
                padding="10px 12px 10px 12px"
                backgroundColor="rgba(234,0,50,0.45)"
                {...getOverrideProps(overrides, "Dexname140822784")}
              >
                <Image
                  width="28px"
                  height="28px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="35px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={mypageList.mainNetLogo || logo}
                  {...getOverrideProps(overrides, "ghrgclzzd 740822785")}
                ></Image>
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="17px"
                  fontWeight="600"
                  color="rgba(244,244,244,1)"
                  lineHeight="20.573863983154297px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="16px"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={mypageList.firstToken || "불러오는 중"}
                  {...getOverrideProps(overrides, "DEX Name40822786")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 91")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="33px"
                  fontWeight="600"
                  lineHeight="39.9375px"
                  textAlign="left"
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
                  children="+"
                  {...getOverrideProps(overrides, "+")}
                ></Text>
              </Flex>
              <Flex
                gap="15px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="25px"
                padding="10px 12px 10px 12px"
                backgroundColor="rgba(255,226,0,0.35)"
                {...getOverrideProps(overrides, "Dexname2")}
              >
                <Image
                  width="28px"
                  height="28px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="35px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={mypageList.platformLogo || logo}
                  {...getOverrideProps(overrides, "ghrgclzzd 740822791")}
                ></Image>
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="17px"
                  fontWeight="600"
                  color="rgba(23,21,29,0.85)"
                  lineHeight="20.573863983154297px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="16px"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={mypageList.secondToken || "불러오는 중"}
                  {...getOverrideProps(overrides, "DEX Name40822792")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            gap="12px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 102")}
          >
            <Text
              fontFamily="ffProLight"
              fontSize="15px"
              fontWeight="600"
              lineHeight="18.15340805053711px"
              textAlign="left"
              display="block"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="DEPOSIT AMOUNT"
              {...getOverrideProps(overrides, "DEPOSIT AMOUNT")}
            ></Text>
            <Flex
              gap="9px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf={{ base: "center", small: "stretch" }}
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 101")}
            >
              <Flex
                gap="9px"
                direction={{ base: "column", medium: "row" }}
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 98")}
              >
                <Flex
                  gap="5px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  borderRadius="25px"
                  padding="11px 0px 11px 0px"
                  {...getOverrideProps(overrides, "Dexname140822806")}
                >
                  <Image
                    width="28px"
                    height="28px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="35px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    src={mypageList.mainNetLogo || logo}
                    {...getOverrideProps(overrides, "ghrgclzzd 740822807")}
                  ></Image>
                  <Text
                    letterSpacing="3.5px"
                    fontFamily="ffProLight"
                    fontSize="17px"
                    fontWeight="600"
                    lineHeight="20.573863983154297px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="16px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={lpToken || "불러오는 중"}
                    {...getOverrideProps(overrides, "DEX Name40822808")}
                  ></Text>
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
                  {...getOverrideProps(overrides, "Frame 9740822812")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="13px"
                    fontWeight="600"
                    lineHeight="15.732954025268555px"
                    textAlign="right"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="256px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={`Balance :${
                      parseInt((lpTokenValue / 10 ** 18) * 10000) / 10000 || 0
                    }`}
                    {...getOverrideProps(overrides, "Balance : 040822813")}
                  ></Text>
                </Flex>
              </Flex>
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
                value={depositAmountValue}
                onInput={(e) => setDepositAmountValue(e.target.value)}
                onChange={(e) => {
                  if (+e.target.value > +lpTokenValue) {
                    e.target.value = lpTokenValue;
                  }
                  setDepositAmountValue(e.target.value);
                }}
                {...getOverrideProps(overrides, "TextAreaField40822814")}
              ></TextAreaField>
            </Flex>
          </Flex>
          <Flex
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
          >
            <Flex
              gap="10px"
              direction="row"
              width="21vw"
              height="66px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
              backgroundColor="rgba(0,136,153,0.59)"
              style={{ cursor: "pointer" }}
              onClick={() => {
                depositFunc();
              }}
              {...getOverrideProps(overrides, "Frame 103")}
            >
              <Text
                color="rgba(250,250,250,0.8)"
                fontFamily="ffProMedium"
                fontSize={{ base: "15px", medium: "20px" }}
                fontWeight="700"
                lineHeight="32.6761360168457px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="364.13px"
                height="30.98px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Deposit"
                {...getOverrideProps(overrides, "Deposit40822827")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width={{ base: "31vw", small: "31vw", medium: "25vw" }}
              height="66px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
              backgroundColor="rgba(32, 32, 32, 0.85)"
              style={{ cursor: "pointer" }}
              overflow="hidden"
              onClick={() => {
                autoFunc();
              }}
              {...getOverrideProps(overrides, "Frame 103")}
            >
              <Text
                fontFamily="ffProBook"
                color="rgba(250,250,250,0.8)"
                fontSize={{ base: "11px", medium: "20px" }}
                fontWeight="700"
                lineHeight="32.6761360168457px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="364.13px"
                height="30.98px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Auto Compounding"
                {...getOverrideProps(overrides, "Deposit40822827")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {depositSuccessModalOpen && (
        <LoadingModal>
          <DepositCompletedModal
            setDepositSuccessModalOpen={setDepositSuccessModalOpen}
            modalText={modalText}
          ></DepositCompletedModal>
        </LoadingModal>
      )}
      {depositFailModalOpen && (
        <LoadingModal>
          <DepositFaildModal
            setDepositFailModalOpen={setDepositFailModalOpen}
            modalText={modalText}
          ></DepositFaildModal>
        </LoadingModal>
      )}
      {isLoading && (
        <LoadingModal>
          <LoadingCompo />
        </LoadingModal>
      )}
    </ModalCover>
  );
}

const ModalCover = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  align-items: center;
  z-index: 88;

  .ConnectModal {
    display: flex;
    justify-content: center;

    .cursorPointer {
      cursor: pointer;
    }
  }
  .Web3Button {
    button {
      background-color: orange !import;
    }
  }
`;

const LoadingModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  align-items: center;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  z-index: 999;
`;
