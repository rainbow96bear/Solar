/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
import { useDispatch, useSelector } from "react-redux";
import { setCompleteModal } from "../modules/completeModal";
export default function DepositCompletedModal(props) {
  const { overrides, ...rest } = props;

  const dispatch = useDispatch();
  const completeModal = useSelector((state) => state.completeModal);

  const [timer, setTimer] = React.useState(6); // 초기 값: 5초
  let intervalId;
  React.useEffect(() => {
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      dispatch(setCompleteModal(false));
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <Flex
      gap="28px"
      direction="column"
      width="580px"
      height="720px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 25px 28px rgba(0, 0, 0, 0.25)"
      borderRadius="55px"
      padding="0px 132px 0px 132px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DepositCompletedModal")}
      {...rest}
    >
      <Flex
        gap="7px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 62")}
      >
        <Text width="100%" children={`${timer - 1} 초 후에 종료됩니다.`}></Text>
        <Text
          fontFamily="Inter"
          fontSize="31px"
          fontWeight="700"
          color="rgba(6,0,22,1)"
          lineHeight="37.51704406738281px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.09px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Deposit Completed"
          {...getOverrideProps(overrides, "Deposit Completed")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="500"
          color="rgba(114,113,113,1)"
          lineHeight="21px"
          textAlign="center"
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
          children="Please press the OK button"
          {...getOverrideProps(overrides, "Please press the OK button")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="380px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1.5px SOLID rgba(0,0,0,1)"
        borderRadius="40px"
        padding="36.5px 29.5px 36.5px 29.5px"
        {...getOverrideProps(overrides, "Frame 60")}
      >
        <Flex
          gap="27px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 59")}
        >
          <View
            width="100px"
            height="100px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            border="1.5px SOLID rgba(0,0,0,1)"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle 14")}
          ></View>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            borderRadius="35px"
            padding="4px 20px 4px 20px"
            {...getOverrideProps(overrides, "Frame 58")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="21px"
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
              {...getOverrideProps(overrides, "Deposit")}
            ></Text>
          </Flex>
        </Flex>
        <View
          width="316px"
          height="380px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="40px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Dust")}
        ></View>
      </Flex>
      <Flex
        gap="7px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 61")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="500"
          color="rgba(114,113,113,1)"
          lineHeight="21px"
          textAlign="center"
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
          children="Thank you for using it."
          {...getOverrideProps(overrides, "Thank you for using it.")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        borderRadius="35px"
        shrink="0"
        backgroundColor="rgba(12,12,12,1)"
        size="small"
        isDisabled={false}
        variation="primary"
        children="OK"
        onClick={() => {
          dispatch(setCompleteModal(false));
          clearInterval(intervalId);
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
