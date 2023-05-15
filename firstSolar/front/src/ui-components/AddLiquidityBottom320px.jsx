import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { motion } from "framer-motion";
import { Flex, Image, Text, TextAreaField } from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import "../css/Font.css";
import styled from "styled-components";
import AddLiquidityFaildModal from "./AddLiquidityFaildModal";
import AddLiquidityCompletedModal from "./AddLiquidityCompletedModal";
import { useSelector } from "react-redux";
import LoadingCompo from "./LoadingCompo";

export default function AddLiquidityBottom320px(props) {
  const isLoading = useSelector((state) => state.isLoading);
  const {
    overrides,
    oracleiddata,
    addLiquidityPossibility,
    addLiquidityFunc,
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
      gap="10px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="35px"
      padding="38px 0px 38px 0px"
      {...getOverrideProps(overrides, "AddLiquidityBottom320px")}
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
        padding="0px 40px 18px 40px"
        style={{
          borderBottom: "1px dashed rgba(234,0,50,0.45)",
          borderWidth: "2px",
        }}
        {...getOverrideProps(overrides, "Frame 105")}
      >
        <Text
          fontFamily="ffProMedium"
          fontSize="18px"
          fontWeight="600"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add Liquidity"
          {...getOverrideProps(overrides, "Add Liquidity")}
        ></Text>
      </Flex>
      <Flex
        gap="45px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="31px 43px 31px 43px"
        {...getOverrideProps(overrides, "Frame 106")}
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
            children="CHOOSE TOKEN PAIR"
            {...getOverrideProps(overrides, "CHOOSE TOKEN PAIR")}
          ></Text>
          <Flex
            gap="5px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
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
              shrink="0"
              alignSelf="stretch"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="25px"
              padding="10px 12px 10px 12px"
              backgroundColor="rgba(234,0,50,0.45)"
              {...getOverrideProps(overrides, "Dexname140053012")}
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
                {...getOverrideProps(overrides, "ghrgclzzd 740053013")}
              ></Image>
              <Text
                fontFamily="ffProMedium"
                fontSize="13px"
                fontWeight="600"
                color="rgba(239,239,239,1)"
                lineHeight="15.732954025268555px"
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
                {...getOverrideProps(overrides, "DEX Name40053014")}
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
                {...getOverrideProps(overrides, "ghrgclzzd 840053015")}
              ></Image>
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
                fontFamily="ffProMedium"
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
              shrink="0"
              alignSelf="stretch"
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
                {...getOverrideProps(overrides, "ghrgclzzd 740053019")}
              ></Image>
              <Text
                fontFamily="ffProMedium"
                fontSize="13px"
                fontWeight="600"
                color="rgba(239,239,239,1)"
                lineHeight="15.732954025268555px"
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
                {...getOverrideProps(overrides, "DEX Name40053020")}
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
                {...getOverrideProps(overrides, "ghrgclzzd 840053021")}
              ></Image>
            </Flex>
          </Flex>
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
            marginTop="15px"
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
              gap="3px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
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
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="25px"
                padding="11px 0px 11px 0px"
                {...getOverrideProps(overrides, "Dexname140053034")}
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
                  {...getOverrideProps(overrides, "ghrgclzzd 740053035")}
                ></Image>
                <Text
                  fontFamily="ffProMedium"
                  fontSize="13px"
                  fontWeight="600"
                  lineHeight="15.732954025268555px"
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
                  {...getOverrideProps(overrides, "DEX Name40053036")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="29px"
                justifyContent="flex-end"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 9740053040")}
              >
                <Text
                  fontFamily="ffProMedium"
                  fontSize="10px"
                  fontWeight="600"
                  lineHeight="12.102272033691406px"
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
                  {...getOverrideProps(overrides, "Balance : 040053041")}
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
              {...getOverrideProps(overrides, "TextAreaField40053042")}
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
              gap="3px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 9940053044")}
            >
              <Flex
                marginTop="30px"
                gap="5px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="25px"
                padding="11px 0px 11px 0px"
                {...getOverrideProps(overrides, "Dexname140053045")}
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
                  {...getOverrideProps(overrides, "ghrgclzzd 740053046")}
                ></Image>
                <Text
                  fontFamily="ffProMedium"
                  fontSize="13px"
                  fontWeight="600"
                  lineHeight="15.732954025268555px"
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
                  {...getOverrideProps(overrides, "DEX Name40053047")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="29px"
                justifyContent="flex-end"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 9740053051")}
              >
                <Text
                  fontFamily="ffProMedium"
                  fontSize="10px"
                  fontWeight="600"
                  lineHeight="12.102272033691406px"
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
                  {...getOverrideProps(overrides, "Balance : 040053052")}
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
              {...getOverrideProps(overrides, "TextAreaField40053053")}
            ></TextAreaField>
          </Flex>
        </Flex>
        <motion.div
          style={{
            width: "230px",
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
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="15px"
            padding="13px 73px 13px 73px"
            onClick={async () => {
              if (!addLiquidityPossibility) return;
              await addLiquidityFunc();
            }}
            style={{
              cursor: addLiquidityPossibility ? "pointer" : "not-allowed",
            }}
            {...getOverrideProps(overrides, "Frame 76")}
          >
            <Text
              fontFamily="ffProMedium"
              fontSize="17.5px"
              fontWeight="700"
              color="rgba(239,239,239,1)"
              lineHeight="18.15340805053711px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="center"
              width="144.04px"
              height="23px"
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
          <AddLiquidityCompletedModal
            setAddLiquiditySuccessModalOpen={setAddLiquiditySuccessModalOpen}
            firstSelectToken={props?.oracleiddata[0]?.firstToken}
            secondSelectToken={props?.oracleiddata[0]?.secondToken}
          />
        </LoadingModal>
      )}
      {addLiquidityFailModalOpen && (
        <LoadingModal>
          <AddLiquidityFaildModal
            setAddLiquidityFailModalOpen={setAddLiquidityFailModalOpen}
          />
        </LoadingModal>
      )}
      {isLoading && (
        <LoadingModal>
          <LoadingCompo />
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
