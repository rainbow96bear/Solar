/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import { motion } from "framer-motion";
import QuestionModalDeposit from "./QuestionModalDeposit";
import QuestionModalWithDraw from "./QuestionModalWithDraw";
import "../css/Font.css";

export default function DepositButton1024px(props) {
  const { overrides, ...rest } = props;

  const [questionMark, setQuestionMark] = React.useState(0);
  return (
    <>
      <Flex
        gap="33px"
        direction="row"
        width="78.1vw"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="relative"
        borderRadius="35px"
        padding="31px 63.5px 31px 63.5px"
        {...getOverrideProps(overrides, "DepositButton1024px")}
        {...rest}>
        <motion.div
          style={{
            width: "31vw",
            height: "unset",
            borderRadius: "35px",
            backgroundColor: "rgba(255,226,0,0.35)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
          }}
          whileHover={{
            borderRadius: "13px",
            backgroundColor: "rgba(247,239,227,0.75)",
            scale: 1.03,
            opacity: 0.88,
          }}>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="50px"
            justifyContent="flex-end"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            borderRadius="45px"
            padding="19px 25px 19px 25px"
            {...getOverrideProps(overrides, "Connect40822711")}>
            <Text
              fontFamily="ffProMedium"
              fontSize="24px"
              fontWeight="700"
              lineHeight="29.045454025268555px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="29px"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Deposit"
              onClick={() => {
                setQuestionMark(1);
              }}
              style={{ cursor: "pointer" }}
              {...getOverrideProps(overrides, "Deposit")}></Text>
          </Flex>
        </motion.div>

        <motion.div
          style={{
            width: "31vw",
            height: "unset",
            borderRadius: "35px",
            backgroundColor: "rgba(234,0,50,0.55)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
          }}
          whileHover={{
            borderRadius: "13px",
            scale: 1.03,
            opacity: 0.88,
            backgroundColor: "rgba(0,056,071,0.75)",
          }}>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="50px"
            justifyContent="flex-end"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            borderRadius="45px"
            padding="19px 25px 19px 25px"
            {...getOverrideProps(overrides, "Connect40822713")}>
            <Text
              fontFamily="ffProMedium"
              fontSize="24px"
              fontWeight="700"
              color="rgba(244,244,244,1)"
              lineHeight="29.045454025268555px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="29px"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="With Draw"
              onClick={() => {
                setQuestionMark(2);
              }}
              style={{ cursor: "pointer" }}
              {...getOverrideProps(overrides, "With Draw")}></Text>
          </Flex>
        </motion.div>
      </Flex>
      {questionMark == 1 ? (
        <QuestionModalDeposit
          autoState={props?.autoState}
          setquestionmark={setQuestionMark}
          lpBalanceValue={props.lpBalanceValue}
          mypagelist={props.mypagelist}
          mypagelplistup={props.mypagelplistup}
          lptokenvalue={props.lptokenvalue}
          lptoken={props.lptoken}
          setlptokenvalue={props?.setlptokenvalue}
          mypageMethod={props?.mypageMethod}
          pid={props?.pid}
          lpTokenBalance={props?.lpTokenBalance}
          getAutoCompoundStatusFunc={props?.getAutoCompoundStatusFunc}
          auto={props?.auto}></QuestionModalDeposit>
      ) : (
        <></>
      )}
      {questionMark == 2 ? (
        <QuestionModalWithDraw
          setquestionmark={setQuestionMark}
          lpBalanceValue={props.lpBalanceValue}
          mypagelist={props.mypagelist}
          lptokenvalue={props.lptokenvalue}
          mypagelplistup={props.mypagelplistup}
          lptoken={props.lptoken}
          mypageMethod={props?.mypageMethod}
          pid={props?.pid}
          setLpTokenValue={props.setLpTokenValue}></QuestionModalWithDraw>
      ) : (
        <></>
      )}
    </>
  );
}
