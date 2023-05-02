/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, TextAreaField } from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import "../css/Font.css";
import { useAccount } from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import {
  approveDFS,
  approveOtherToken,
  addLiquidity,
  updatePool,
} from "../api/index";
import { swapBalance } from "../api";
import { useWeb3 } from "../modules/useWeb3.js";
import { useWeb3K } from "../modules/useWeb3Kaikas";
import { isLoadingThunk } from "../modules/isLoading.js";
import { motion } from "framer-motion";
import styled from "styled-components";
import AddLiquiditySuccessModal from "./AddLiquiditySuccessModal";
import AddLiquidityFailModal from "./AddLiquidityFailModal";

export default function AddLiquidityBottom768px(props) {
  const { overrides, oracleiddata, ...rest } = props;

  const dispatch = useDispatch();

  const { web3, account, chainId, login } = useWeb3();
  const { web3K, accountK, chainIdK, loginK } = useWeb3K();

  const [firstValue, setFirstValue] = React.useState();
  const [secondValue, setSecondValue] = React.useState();

  const { address } = useAccount();
  const address2 = useSelector((state) => state.account.account.account);

  const [userFirstBalance, setUserFirstBalance] = React.useState(0);
  const [userSecondBalance, setUserSecondBalance] = React.useState(0);

  const [addLiquidityPossibility, setAddLiquidityPossibility] =
    React.useState(false);

  const [addLiquiditySuccessModalOpen, setAddLiquiditySuccessModalOpen] =
    React.useState(false);
  const [addLiquidityFailModalOpen, setAddLiquidityFailModalOpen] =
    React.useState(false);

  const addLiquidtiyFunc = async () => {
    dispatch(isLoadingThunk({ isLoading: true }));
    const approveDFSTx = await approveDFS(
      address2 ? address2 : address,
      firstValue,
      props?.oracleiddata[0]?.secondToken
    );
    try {
      const txResult = await web3.eth.sendTransaction(approveDFSTx);

      if (txResult) {
        const approveOtherTokenTx = await approveOtherToken(
          address2 ? address2 : address,
          secondValue,
          props?.oracleiddata[0]?.secondToken
        );

        const pairTxResult = await web3.eth.sendTransaction(
          approveOtherTokenTx
        );
        if (pairTxResult) {
          const addLiquidityTx = await addLiquidity(
            address2 ? address2 : address,
            firstValue,
            secondValue,
            props?.oracleiddata[0]?.secondToken
          );

          const addLiquidityTxResult = await web3.eth.sendTransaction(
            addLiquidityTx
          );
          await updatePool(props?.oracleiddata[0]?.tokenAddress);

          if (addLiquidityTxResult) {
            const firstBalanceTemp = await swapBalance(
              address ? address : address2,
              props?.oracleiddata[0]?.firstToken
                ? props?.oracleiddata[0]?.firstToken
                : "DFS"
            );

            setUserFirstBalance(firstBalanceTemp);

            const secondBalanceTemp = await swapBalance(
              address ? address : address2,
              props?.oracleiddata[0]?.secondToken
                ? props?.oracleiddata[0]?.secondToken
                : "ETH"
            );
            setUserSecondBalance(secondBalanceTemp);
            setFirstValue(0);
            setSecondValue(0);
            dispatch(isLoadingThunk({ isLoading: false }));
            setAddLiquiditySuccessModalOpen(true);
          }
        }
      }
    } catch (err) {
      console.error(err);
      dispatch(isLoadingThunk({ isLoading: false }));
      setAddLiquidityFailModalOpen(true);
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        const data = await swapBalance(
          address ? address : address2,
          props?.oracleiddata[0]?.firstToken
        );
        setUserFirstBalance(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        const data = await swapBalance(
          address ? address : address2,
          props?.oracleiddata[0]?.secondToken
        );
        setUserSecondBalance(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (document.cookie) {
      if (document.cookie.split(":")[0] == "metamask") {
        login();
      } else if (document.cookie.split(":")[0] == "kaikas") {
        loginK();
      }
    }
  }, []);

  React.useEffect(() => {
    if (
      +firstValue <= +userFirstBalance &&
      +secondValue <= +userSecondBalance &&
      firstValue == secondValue &&
      firstValue != 0 &&
      secondValue != 0 &&
      firstValue != undefined &&
      secondValue != undefined
    ) {
      setAddLiquidityPossibility(true);
    } else setAddLiquidityPossibility(false);
  }, [firstValue, secondValue]);

  return (
    <Flex
      gap="75px"
      direction="column"
      width="689px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="11px 11px 31px rgba(0, 0, 0, 0.25)"
      borderRadius="35px"
      padding="71px 0px 71px 0px"
      backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
      {...getOverrideProps(overrides, "AddLiquidityBottom768px")}
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
          borderBottom: "1px dashed rgba(234,0,50,0.45)",
          borderWidth: "2px",
        }}
        {...getOverrideProps(overrides, "Frame 10340052999")}
      >
        <Text
          fontFamily="ffProMedium"
          fontSize="25px"
          fontWeight="600"
          lineHeight="30.25568199157715px"
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
          children="Add Liquidity"
          {...getOverrideProps(overrides, "Add Liquidity")}
        ></Text>
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
        {...getOverrideProps(overrides, "Frame 104")}
      >
        <Flex
          gap="27px"
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
            fontFamily="ffProMedium"
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
            children="CHOOSE TOKEN PAIR"
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
            <Flex
              gap="5px"
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
              {...getOverrideProps(overrides, "Dexname140052879")}
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
                src={
                  props?.oracleiddata[0]?.mainNetLogo
                    ? props?.oracleiddata[0]?.mainNetLogo
                    : { logo }
                }
                {...getOverrideProps(overrides, "ghrgclzzd 740052880")}
              ></Image>
              <Text
                fontFamily="ffProExtraLight"
                fontSize="17px"
                fontWeight="600"
                lineHeight="15px"
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
                children={
                  props?.oracleiddata[0]?.firstToken
                    ? props?.oracleiddata[0]?.firstToken
                    : "DFS"
                }
                {...getOverrideProps(overrides, "DEX Name40052881")}
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
              gap="5px"
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
              backgroundColor="rgba(0,136,153,0.59)"
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
                src={
                  props?.oracleiddata[0]?.platformLogo
                    ? props?.oracleiddata[0]?.platformLogo
                    : { logo }
                }
                {...getOverrideProps(overrides, "ghrgclzzd 740052901")}
              ></Image>
              <Text
                fontFamily="ffProExtraLight"
                fontSize="17px"
                fontWeight="600"
                color="rgba(239,239,239,1)"
                lineHeight="15px"
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
                children={
                  props?.oracleiddata[0]?.secondToken
                    ? props?.oracleiddata[0]?.secondToken
                    : "DFS"
                }
                {...getOverrideProps(overrides, "DEX Name40052902")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="20px"
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
            fontFamily="ffProMedium"
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
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 101")}
          >
            <Flex
              gap="9px"
              direction="row"
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
                {...getOverrideProps(overrides, "Dexname140052904")}
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
                  src={
                    props?.oracleiddata[0]?.mainNetLogo
                      ? props?.oracleiddata[0]?.mainNetLogo
                      : { logo }
                  }
                  {...getOverrideProps(overrides, "ghrgclzzd 740052905")}
                ></Image>
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="21px"
                  fontWeight="600"
                  lineHeight="15px"
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
                  children={
                    props?.oracleiddata[0]?.firstToken
                      ? props?.oracleiddata[0]?.firstToken
                      : "DFS"
                  }
                  {...getOverrideProps(overrides, "DEX Name40052906")}
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
                {...getOverrideProps(overrides, "Frame 9740052910")}
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
                  children={`Balance : ${
                    userFirstBalance ? userFirstBalance : 0
                  }`}
                  {...getOverrideProps(overrides, "Balance : 040052909")}
                ></Text>
              </Flex>
            </Flex>
            <TextAreaField
              width="unset"
              height="unset"
              placeholder="0.0"
              shrink="0"
              alignSelf="stretch"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={firstValue}
              onChange={(e) => {
                if (+e.target.value > +userFirstBalance) {
                  e.target.value = userFirstBalance;
                }
                setFirstValue(e.target.value);
              }}
              {...getOverrideProps(overrides, "TextAreaField40052913")}
            ></TextAreaField>
          </Flex>
          <Flex
            gap="9px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 100")}
          >
            <Flex
              gap="9px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 9940052979")}
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
                {...getOverrideProps(overrides, "Dexname140052980")}
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
                  src={
                    props?.oracleiddata[0]?.platformLogo
                      ? props?.oracleiddata[0]?.platformLogo
                      : { logo }
                  }
                  {...getOverrideProps(overrides, "ghrgclzzd 740052981")}
                ></Image>
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="21px"
                  fontWeight="600"
                  lineHeight="15px"
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
                  children={
                    props?.oracleiddata[0]?.secondToken
                      ? props?.oracleiddata[0]?.secondToken
                      : "Solar"
                  }
                  {...getOverrideProps(overrides, "DEX Name40052982")}
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
                {...getOverrideProps(overrides, "Frame 9740052986")}
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
                  children={`Balance : ${
                    userSecondBalance ? userSecondBalance : 0
                  }`}
                  {...getOverrideProps(overrides, "Balance : 040052987")}
                ></Text>
              </Flex>
            </Flex>
            <TextAreaField
              width="unset"
              height="unset"
              placeholder="0.0"
              shrink="0"
              alignSelf="stretch"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={secondValue}
              onChange={(e) => {
                if (+e.target.value > +userSecondBalance) {
                  e.target.value = userSecondBalance;
                }
                setSecondValue(e.target.value);
              }}
              {...getOverrideProps(overrides, "TextAreaField40052988")}
            ></TextAreaField>
          </Flex>
        </Flex>
        <motion.div
          style={{
            height: "unset",
            borderRadius: "15px",
            backgroundImage:
              "linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          whileHover={{
            borderRadius: "31px",
            scale: 0.985,
            backgroundImage:
              "linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))",
            boxShadow: "10px 10px 20px rgba(0, 20, 0, 0.25)",
          }}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="66px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="13px 73px 13px 73px"
            onClick={async () => {
              if (!addLiquidityPossibility) return;
              await addLiquidtiyFunc();
            }}
            style={{
              cursor: addLiquidityPossibility ? "pointer" : "not-allowed",
            }}
            {...getOverrideProps(overrides, "Frame 10340122803")}
          >
            <Text
              fontFamily="ffProBook"
              fontSize="28px"
              fontWeight="700"
              color="rgba(239,239,239,1)"
              lineHeight="33.8863639831543px"
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
              children="Add Liquidity"
              {...getOverrideProps(overrides, "Enter an Amount")}
            ></Text>
          </Flex>
        </motion.div>
      </Flex>
      {addLiquiditySuccessModalOpen && (
        <LoadingModal>
          <AddLiquiditySuccessModal
            setAddLiquiditySuccessModalOpen={setAddLiquiditySuccessModalOpen}
            firstSelectToken={props?.oracleiddata[0]?.firstToken}
            secondSelectToken={props?.oracleiddata[0]?.secondToken}
          />
        </LoadingModal>
      )}
      {addLiquidityFailModalOpen && (
        <LoadingModal>
          <AddLiquidityFailModal
            setAddLiquidityFailModalOpen={setAddLiquidityFailModalOpen}
          />
        </LoadingModal>
      )}
    </Flex>
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
