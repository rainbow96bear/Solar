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
import { useSelector } from "react-redux";
import { approveDFS, approveOtherToken, addLiquidity } from "../api/index";

export default function AddLiquidityBottom768px(props) {
  const { overrides, oracleiddata, ...rest } = props;

  const [firstValue, setFirstValue] = React.useState();
  const [secondValue, setSecondValue] = React.useState();

  const { address } = useAccount();
  const address2 = useSelector(state => state.account.account.account);

  const addLiquidtiyFunc = async () => {
    const approveDFSTx = await approveDFS(
      address2 ? address2 : address,
      firstValue
    );
    const txResult = await web3.eth.sendTransaction(approveDFSTx);

    if (txResult) {
      const approveOtherTokenTx = await approveOtherToken(
        address2 ? address2 : address,
        secondValue,
        props?.oracleiddata[0]?.secondToken
      );
      const pairTxResult = await web3.eth.sendTransaction(approveOtherTokenTx);
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
        if (addLiquidityTxResult) console.log(addLiquidityTxResult);
      }
    }
  };

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
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
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
        style={{ borderBottom: "1px dashed rgba(234,0,50,0.45)" }}
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
              {/* <Image
                width="15px"
                height="15px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 840052882")}
              ></Image> */}
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
              {/* <Image
                width="15px"
                height="15px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 840052903")}
              ></Image> */}
            </Flex>
          </Flex>
          {/* <Flex
            gap="50px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="10px"
            padding="15px 15px 15px 15px"
            backgroundColor="rgba(234,0,50,0.45)"
            {...getOverrideProps(overrides, "Frame 95")}
          >
            <Flex
              gap="13px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 93")}
            >
              <Text
                fontFamily="ffProExtraLight"
                fontSize="15px"
                fontWeight="600"
                color="rgba(239,239,239,1)"
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
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="V3 LP - 0.25% fee tier"
                {...getOverrideProps(overrides, "V3 LP - 0.25% fee tier")}
              ></Text>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="35px"
                padding="9px 9px 9px 9px"
                backgroundColor="rgba(255,255,253,1)"
                {...getOverrideProps(overrides, "Frame 92")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="12px"
                  fontWeight="600"
                  lineHeight="14.522727012634277px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="60px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="100% Pick"
                  {...getOverrideProps(overrides, "100% Pick")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="7px"
              direction="row"
              width="unset"
              height="15px"
              justifyContent="flex-end"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 94")}
            >
              <Text
                fontFamily="ffProExtraLight"
                fontSize="12px"
                fontWeight="600"
                color="rgba(239,239,239,1)"
                lineHeight="14.522727012634277px"
                textAlign="right"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="15px"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="More"
                {...getOverrideProps(overrides, "More")}
              ></Text>
              <Image
                width="15px"
                height="15px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 840052855")}
              ></Image>
            </Flex>
          </Flex> */}
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
                <Flex
                  gap="5px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 9940052912")}
                >
                  <Image
                    width="15px"
                    height="15px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="35px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 840052907")}
                  ></Image>
                  <Image
                    width="15px"
                    height="15px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="35px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 940052908")}
                  ></Image>
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
                  children={`Balance : ${props?.balance ? props?.balance : 0}`}
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
              onChange={e => {
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
                <Flex
                  gap="5px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 9940052983")}
                >
                  <Image
                    width="15px"
                    height="15px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="35px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 840052984")}
                  ></Image>
                  <Image
                    width="15px"
                    height="15px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="35px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 940052985")}
                  ></Image>
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
                  children={`Balance : ${0}`}
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
              onChange={e => {
                setSecondValue(e.target.value);
              }}
              {...getOverrideProps(overrides, "TextAreaField40052988")}
            ></TextAreaField>
          </Flex>
        </Flex>
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
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="15px"
          padding="13px 73px 13px 73px"
          backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
          onClick={() => {
            addLiquidtiyFunc();
          }}
          {...getOverrideProps(overrides, "Frame 10340122803")}
        >
          <Text
            fontFamily="ffProMedium"
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
      </Flex>
    </Flex>
  );
}
