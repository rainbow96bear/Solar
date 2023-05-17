import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, TextAreaField } from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import "../css/Font.css";

import { motion } from "framer-motion";
import styled from "styled-components";

export default function AddLiquidityBottom768px(props) {
  const {
    overrides,
    addLiquidityPossibility,
    addLiquidityFunc,
    oracleiddata,
    balance,
    userFirstBalance,
    firstValue,
    setFirstValue,
    userSecondBalance,
    secondValue,
    setSecondValue,
    addLiquiditySuccessModalOpen,
    setAddLiquiditySuccessModalOpen,
    addLiquidityFailModalOpen,
    setAddLiquidityFailModalOpen,
    ...rest
  } = props;

  return (
    <Flex
      gap="75px"
      direction="column"
      top={{
        small: "-205px",
        medium: "-150px",
        large: "-20px",
      }}
      width={{
        small: "86vw",
        medium: "86vw",
        large: "43vw",
      }}
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="11px 11px 31px rgba(0, 0, 0, 0.25)"
      borderRadius="35px"
      padding="71px 0px 71px 0px"
      backgroundImage="linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))"
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
                  oracleiddata[0]?.mainNetLogo
                    ? oracleiddata[0]?.mainNetLogo
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
                  oracleiddata[0]?.firstToken
                    ? oracleiddata[0]?.firstToken
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
                  oracleiddata[0]?.platformLogo
                    ? oracleiddata[0]?.platformLogo
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
                  oracleiddata[0]?.secondToken
                    ? oracleiddata[0]?.secondToken
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
                    oracleiddata[0]?.mainNetLogo
                      ? oracleiddata[0]?.mainNetLogo
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
                    oracleiddata[0]?.firstToken
                      ? oracleiddata[0]?.firstToken
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
                    oracleiddata[0]?.platformLogo
                      ? oracleiddata[0]?.platformLogo
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
                    oracleiddata[0]?.secondToken
                      ? oracleiddata[0]?.secondToken
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
            width={{ base: "23vw", small: "30vw", medium: "32vw" }}
            height="66px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="13px 73px 13px 73px"
            onClick={async () => {
              if (!addLiquidityPossibility) return;
              await addLiquidityFunc();
            }}
            style={{
              cursor: addLiquidityPossibility ? "pointer" : "not-allowed",
            }}
            {...getOverrideProps(overrides, "Frame 10340122803")}
          >
            <Text
              fontFamily="ffProBook"
              fontSize={{ base: "12px", small: "17px", medium: "28px" }}
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
    </Flex>
  );
}

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
  z-index: 999999999;
`;
