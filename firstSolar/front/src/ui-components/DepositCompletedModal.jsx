/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View, Image } from "@aws-amplify/ui-react";
import { useDispatch, useSelector } from "react-redux";
import { setCompleteModal } from "../modules/completeModal";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import logo1 from "./images/1.png";
import logo2 from "./images/5.png";

export default function DepositCompletedModal(props) {
  const { overrides, ...rest } = props;

  const dispatch = useDispatch();
  const completeModal = useSelector(state => state.completeModal);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.94 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const [timer, setTimer] = React.useState(6); // 초기 값: 5초
  let intervalId;
  React.useEffect(() => {
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      props?.setDepositSuccessModalOpen(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  React.useEffect(() => {
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
      backgroundColor="rgba(252,253,254,1)"
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

      <motion.div
        style={{
          width: "unset",
          height: "unset",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          backgroundImage: `url(${logo2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px dashed rgba(0,0,0,1)",
          borderWidth: "2px",
          borderRadius: "21px",
        }}
        whileHover={{
          backgroundImage: `url(${logo1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px dashed rgba(0,0,0,1)",
          borderWidth: "2px",
          boxShadow: "-38px 45px 28px rgba(0, 0, 0, 0.25)",
          borderRadius: "35px",
        }}
      >
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
            <Image
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              src={logo1}
              width="100px"
              height="100px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              style={{ border: "1px dashed rgba(0,0,0,1)", borderWidth: "2px" }}
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Rectangle 14")}
            ></Image>
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
        </Flex>
      </motion.div>
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
          props?.setDepositSuccessModalOpen(false);
          clearInterval(intervalId);
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
