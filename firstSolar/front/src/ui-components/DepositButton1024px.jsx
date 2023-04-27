/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import QuestionModalDeposit from "./QuestionModalDeposit";

export default function DepositButton1024px(props) {
  const { overrides, ...rest } = props;
  const [questionMark, setQuestionMark] = React.useState(1);
  return (
    <>
      <Flex
        gap="33px"
        direction="row"
        width="78.1vw"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        borderRadius="35px"
        padding="31px 63.5px 31px 63.5px"
        {...getOverrideProps(overrides, "DepositButton1024px")}
        {...rest}
      >
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
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="45px"
          padding="19px 25px 19px 25px"
          backgroundColor="rgba(255,226,0,0.35)"
          {...getOverrideProps(overrides, "Connect40822711")}
        >
          <Text
            fontFamily="Inter"
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
            {...getOverrideProps(overrides, "Deposit")}
          ></Text>
          {questionMark == 1 ? (
            <QuestionModalDeposit
              setquestionmark={setQuestionMark}
            ></QuestionModalDeposit>
          ) : (
            <></>
          )}
        </Flex>
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
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="45px"
          padding="19px 25px 19px 25px"
          backgroundColor="rgba(234,0,50,0.45)"
          {...getOverrideProps(overrides, "Connect40822713")}
        >
          <Text
            fontFamily="Inter"
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
            {...getOverrideProps(overrides, "With Draw")}
          ></Text>
        </Flex>
      </Flex>
    </>
  );
}
