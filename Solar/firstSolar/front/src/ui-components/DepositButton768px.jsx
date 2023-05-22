/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import { motion } from "framer-motion";
import QuestionModalDeposit from "./QuestionModalDeposit";
import QuestionModalWithDraw from "./QuestionModalWithDraw";
import "../css/Font.css";
import { useDispatch } from "react-redux";

export default function DepositButton768px(props) {
  const {
    overrides,
    autoState,
    mypageList,
    lpTokenValue,
    lpToken,
    mypageLpListUp,
    pid,
    setLpTokenValue,
    mypageMethod,
    lpTokenBalance,
    getAutoCompoundStatusFunc,
    auto,
    navigate,
    isLoading2,
    setIsLoading2,
    ...rest
  } = props;

  const [questionMark, setQuestionMark] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      <Flex
        gap="33px"
        direction="row"
        width="100vw"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="relative"
        borderRadius="35px"
        padding="31px 80px 31px 80px"
        {...getOverrideProps(overrides, "DepositButton1024px")}
        {...rest}
      >
        <motion.div
          style={{
            width: "50vw",
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
          }}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height={{ base: "45px", small: "50px" }}
            justifyContent="flex-end"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            borderRadius="45px"
            padding="19px 25px 19px 25px"
            {...getOverrideProps(overrides, "Connect40822711")}
          >
            <Text
              fontFamily="ffProMedium"
              fontSize={{ base: "13px", small: "15px" }}
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
              {...getOverrideProps(overrides, "Deposit")}
            ></Text>
          </Flex>
        </motion.div>

        <motion.div
          style={{
            width: "50vw",
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
          }}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height={{ base: "45px", small: "50px" }}
            justifyContent="flex-end"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            borderRadius="45px"
            padding="19px 25px 19px 25px"
            overflow="hidden"
            {...getOverrideProps(overrides, "Connect40822713")}
          >
            <Text
              fontFamily="ffProMedium"
              fontSize={{ base: "13px", small: "15px" }}
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
              {...getOverrideProps(overrides, "With Draw")}
            ></Text>
          </Flex>
        </motion.div>
      </Flex>
      {questionMark == 1 ? (
        <QuestionModalDeposit
          autoState={autoState}
          setQuestionMark={setQuestionMark}
          mypageList={mypageList}
          mypageLpListUp={mypageLpListUp}
          lpTokenValue={lpTokenValue}
          lpToken={lpToken}
          setLpTokenValue={setLpTokenValue}
          mypageMethod={mypageMethod}
          pid={pid}
          lpTokenBalance={lpTokenBalance}
          getAutoCompoundStatusFunc={getAutoCompoundStatusFunc}
          auto={auto}
          navigate={navigate}
        ></QuestionModalDeposit>
      ) : (
        <></>
      )}
      {questionMark == 2 ? (
        <QuestionModalWithDraw
          setQuestionMark={setQuestionMark}
          mypageList={mypageList}
          lpTokenValue={lpTokenValue}
          mypageLpListUp={mypageLpListUp}
          lpToken={lpToken}
          mypageMethod={mypageMethod}
          pid={pid}
          setLpTokenValue={setLpTokenValue}
          dispatch={dispatch}
          navigate={navigate}
        ></QuestionModalWithDraw>
      ) : (
        <></>
      )}
    </>
  );
}
