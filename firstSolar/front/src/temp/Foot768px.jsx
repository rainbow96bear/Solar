/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import { useMediaQuery } from "react-responsive";
import logo1 from "./images/1.png";
import logo2 from "./images/2.png";
import logo3 from "./images/3.png";
import logo4 from "./images/4.png";
import logo5 from "./images/5.png";
import logo6 from "./images/6.png";
import solarLogo from "./images/logo_new.png";
import "../css/Font.css";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function Foot768px(props) {
  const { overrides, ...rest } = props;
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.94 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const isTablet = useMediaQuery({
    query: "(min-width:481px) and (max-width:1544px)",
  });

  return (
    <>
      {isTablet ? (
        <motion.div
          style={{
            width: "91vw",
            height: "unset",
            backgroundColor: "rgba(255,255,255,0.8)",
            boxShadow: "38px 38px 29px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
          }}
          whileHover={{
            borderRadius: "45px",
            backgroundColor: "rgba(252,089,0,0.75)",
          }}
        >
          <Flex
            gap="35px"
            direction="column"
            width="91vw"
            height="unset"
            justifyContent="center"
            alignItems="center"
            position="relative"
            borderRadius="38px"
            padding="45px 35px 45px 35px"
            {...getOverrideProps(overrides, "Foot768px")}
            {...rest}
          >
            <Flex
              gap="23px"
              direction="column"
              width="unset"
              height="276px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 31")}
            >
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 30")}
              >
                <Image
                  src={solarLogo}
                  width="140px"
                  height="140px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="10px SOLID rgba(255,226,0,0.35)"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="70px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "ghrgclzzd 2")}
                ></Image>
              </Flex>
              <Flex
                gap="6px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 47")}
              >
                <Flex
                  gap="1px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 28")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="18px"
                    fontWeight="700"
                    lineHeight="27px"
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
                    children="Solar Project Team"
                    {...getOverrideProps(overrides, "Solar Project Team")}
                  ></Text>
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="11px"
                    fontWeight="700"
                    lineHeight="16.5px"
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
                    children="23.04.01 ~ 23.05.22"
                    {...getOverrideProps(overrides, "23.04.11 ~ 23.05.23")}
                  ></Text>
                </Flex>
                <Flex
                  gap="6px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  boxShadow="-3px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="6px 9px 6px 9px"
                  backgroundColor="rgba(234,0,50,0.45)"
                  {...getOverrideProps(overrides, "Frame 27")}
                >
                  <Image
                    src={solarLogo}
                    width="23px"
                    height="23px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="23px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 341052787")}
                  ></Image>
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="10px"
                    fontWeight="700"
                    lineHeight="15px"
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
                    children="@SolarDesign"
                    color="rgba(251,250,250,0.91)"
                    {...getOverrideProps(overrides, "@SolarDesign")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="40px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 19641052789")}
            >
              <Flex
                gap="38px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 195")}
              >
                <Flex
                  gap="0"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  overflow="hidden"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 15541052841")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    width="unset"
                    height="296px"
                    src={logo1}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="25px 25px 0px 0px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "nft (1) 341052842")}
                  ></Image>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="0px 0px 15px 15px"
                    padding="9px 11px 13px 11px"
                    backgroundColor="rgba(252,252,252,1)"
                    {...getOverrideProps(overrides, "Frame 11641052843")}
                  >
                    <Flex
                      gap="8px"
                      direction="column"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="flex-start"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 12px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 11541052844")}
                    >
                      <Flex
                        gap="6px"
                        direction="row"
                        width="297px"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 19241052845")}
                      >
                        <Flex
                          gap="10px"
                          direction="row"
                          width="unset"
                          height="unset"
                          justifyContent="flex-start"
                          alignItems="center"
                          grow="1"
                          shrink="1"
                          basis="0"
                          position="relative"
                          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                          borderRadius="25px"
                          padding="6px 9px 6px 9px"
                          backgroundColor="rgba(255,226,0,0.35)"
                          {...getOverrideProps(overrides, "Frame 10141052846")}
                        >
                          <Image
                            src={logo1}
                            width="30px"
                            height="30px"
                            display="block"
                            gap="unset"
                            alignItems="unset"
                            justifyContent="unset"
                            shrink="0"
                            position="relative"
                            borderRadius="23px"
                            padding="0px 0px 0px 0px"
                            objectFit="cover"
                            {...getOverrideProps(
                              overrides,
                              "ghrgclzzd 341052847"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProExtraLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
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
                            children="HGWA333"
                            {...getOverrideProps(overrides, "HGWA333")}
                          ></Text>
                        </Flex>
                        <Flex
                          gap="6px"
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
                          padding="6px 9px 6px 9px"
                          {...getOverrideProps(overrides, "Frame 10641052849")}
                        ></Flex>
                      </Flex>
                      <Flex
                        gap="1px"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="center"
                        alignItems="flex-start"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 3px"
                        {...getOverrideProps(overrides, "Frame 10541052850")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
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
                          children="FrontEnd"
                          {...getOverrideProps(overrides, "FrontEnd41052851")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
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
                          children="최 원 겸"
                          {...getOverrideProps(
                            overrides,
                            "\uCD5C \uC6D0 \uACB8"
                          )}
                        ></Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap="0"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  overflow="hidden"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 16041062578")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    width="unset"
                    height="296px"
                    src={logo2}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="25px 25px 0px 0px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "nft (1) 341062579")}
                  ></Image>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="0px 0px 15px 15px"
                    padding="9px 11px 13px 11px"
                    backgroundColor="rgba(252,252,252,1)"
                    {...getOverrideProps(overrides, "Frame 11641062580")}
                  >
                    <Flex
                      gap="8px"
                      direction="column"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="flex-start"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 12px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 11541062581")}
                    >
                      <Flex
                        gap="6px"
                        direction="row"
                        width="297px"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 19241062582")}
                      >
                        <Flex
                          gap="10px"
                          direction="row"
                          width="unset"
                          height="unset"
                          justifyContent="flex-start"
                          alignItems="center"
                          grow="1"
                          shrink="1"
                          basis="0"
                          position="relative"
                          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                          borderRadius="25px"
                          padding="6px 9px 6px 9px"
                          backgroundColor="rgba(0,136,153,0.59)"
                          {...getOverrideProps(overrides, "Frame 10141062583")}
                        >
                          <Image
                            src={logo2}
                            width="30px"
                            height="30px"
                            display="block"
                            gap="unset"
                            alignItems="unset"
                            justifyContent="unset"
                            shrink="0"
                            position="relative"
                            borderRadius="23px"
                            padding="0px 0px 0px 0px"
                            objectFit="cover"
                            {...getOverrideProps(
                              overrides,
                              "ghrgclzzd 341062584"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProExtraLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
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
                            children="@Koh-U-Seok"
                            {...getOverrideProps(overrides, "@Koh-U-Seok")}
                          ></Text>
                        </Flex>
                        <Flex
                          gap="6px"
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
                          padding="6px 9px 6px 9px"
                          {...getOverrideProps(overrides, "Frame 10641062586")}
                        ></Flex>
                      </Flex>
                      <Flex
                        gap="1px"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="center"
                        alignItems="flex-start"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 3px"
                        {...getOverrideProps(overrides, "Frame 10541062587")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
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
                          children="FrontEnd"
                          {...getOverrideProps(overrides, "FrontEnd41062588")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
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
                          children="고 우 석"
                          {...getOverrideProps(
                            overrides,
                            "\uACE0 \uC6B0 \uC11D"
                          )}
                        ></Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="38px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 19641062590")}
              >
                <Flex
                  gap="0"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  overflow="hidden"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 15541062591")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    src={logo3}
                    width="unset"
                    height="296px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="25px 25px 0px 0px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "nft (1) 341062592")}
                  ></Image>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="0px 0px 15px 15px"
                    padding="9px 11px 13px 11px"
                    backgroundColor="rgba(252,252,252,1)"
                    {...getOverrideProps(overrides, "Frame 11641062593")}
                  >
                    <Flex
                      gap="8px"
                      direction="column"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="flex-start"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 12px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 11541062594")}
                    >
                      <Flex
                        gap="6px"
                        direction="row"
                        width="297px"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 19241062595")}
                      >
                        <Flex
                          gap="10px"
                          direction="row"
                          width="unset"
                          height="unset"
                          justifyContent="flex-start"
                          alignItems="center"
                          grow="1"
                          shrink="1"
                          basis="0"
                          position="relative"
                          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                          borderRadius="25px"
                          padding="6px 9px 6px 9px"
                          backgroundColor="rgba(255,226,0,0.35)"
                          {...getOverrideProps(overrides, "Frame 10141062596")}
                        >
                          <Image
                            src={logo3}
                            width="30px"
                            height="30px"
                            display="block"
                            gap="unset"
                            alignItems="unset"
                            justifyContent="unset"
                            shrink="0"
                            position="relative"
                            borderRadius="23px"
                            padding="0px 0px 0px 0px"
                            objectFit="cover"
                            {...getOverrideProps(
                              overrides,
                              "ghrgclzzd 341062597"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProExtraLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
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
                            children="@JJeonghyun"
                            {...getOverrideProps(overrides, "@JJeonghyun")}
                          ></Text>
                        </Flex>
                        <Flex
                          gap="6px"
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
                          padding="6px 9px 6px 9px"
                          {...getOverrideProps(overrides, "Frame 10641062599")}
                        ></Flex>
                      </Flex>
                      <Flex
                        gap="1px"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="center"
                        alignItems="flex-start"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 3px"
                        {...getOverrideProps(overrides, "Frame 10541062600")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
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
                          children="BackEnd"
                          {...getOverrideProps(overrides, "BackEnd41062601")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
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
                          children="장 정 현"
                          {...getOverrideProps(
                            overrides,
                            "\uC7A5 \uC815 \uD604"
                          )}
                        ></Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap="0"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  overflow="hidden"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 16041062603")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    src={logo4}
                    width="unset"
                    height="296px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="25px 25px 0px 0px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "nft (1) 341062604")}
                  ></Image>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="0px 0px 15px 15px"
                    padding="9px 11px 13px 11px"
                    backgroundColor="rgba(252,252,252,1)"
                    {...getOverrideProps(overrides, "Frame 11641062605")}
                  >
                    <Flex
                      gap="8px"
                      direction="column"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="flex-start"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 12px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 11541062606")}
                    >
                      <Flex
                        gap="6px"
                        direction="row"
                        width="297px"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 19241062607")}
                      >
                        <Flex
                          gap="10px"
                          direction="row"
                          width="unset"
                          height="unset"
                          justifyContent="flex-start"
                          alignItems="center"
                          grow="1"
                          shrink="1"
                          basis="0"
                          position="relative"
                          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                          borderRadius="25px"
                          padding="6px 9px 6px 9px"
                          backgroundColor="rgba(0,136,153,0.59)"
                          {...getOverrideProps(overrides, "Frame 10141062608")}
                        >
                          <Image
                            src={logo4}
                            width="30px"
                            height="30px"
                            display="block"
                            gap="unset"
                            alignItems="unset"
                            justifyContent="unset"
                            shrink="0"
                            position="relative"
                            borderRadius="23px"
                            padding="0px 0px 0px 0px"
                            objectFit="cover"
                            {...getOverrideProps(
                              overrides,
                              "ghrgclzzd 341062609"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProExtraLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
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
                            children="@JaeHyuk"
                            {...getOverrideProps(overrides, "@JaeHyuk")}
                          ></Text>
                        </Flex>
                        <Flex
                          gap="6px"
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
                          padding="6px 9px 6px 9px"
                          {...getOverrideProps(overrides, "Frame 10641062611")}
                        ></Flex>
                      </Flex>
                      <Flex
                        gap="1px"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="center"
                        alignItems="flex-start"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 3px"
                        {...getOverrideProps(overrides, "Frame 10541062612")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
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
                          children="BackEnd"
                          {...getOverrideProps(overrides, "BackEnd41062613")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
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
                          children="이 재 혁"
                          {...getOverrideProps(
                            overrides,
                            "\uC774 \uC7AC \uD601"
                          )}
                        ></Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="38px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 197")}
              >
                <Flex
                  gap="0"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  overflow="hidden"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 15541062616")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    src={logo5}
                    width="unset"
                    height="296px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="25px 25px 0px 0px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "nft (1) 341062617")}
                  ></Image>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="0px 0px 15px 15px"
                    padding="9px 11px 13px 11px"
                    backgroundColor="rgba(252,252,252,1)"
                    {...getOverrideProps(overrides, "Frame 11641062618")}
                  >
                    <Flex
                      gap="8px"
                      direction="column"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="flex-start"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 12px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 11541062619")}
                    >
                      <Flex
                        gap="6px"
                        direction="row"
                        width="297px"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 19241062620")}
                      >
                        <Flex
                          gap="10px"
                          direction="row"
                          width="unset"
                          height="unset"
                          justifyContent="flex-start"
                          alignItems="center"
                          grow="1"
                          shrink="1"
                          basis="0"
                          position="relative"
                          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                          borderRadius="25px"
                          padding="6px 9px 6px 9px"
                          backgroundColor="rgba(255,226,0,0.35)"
                          {...getOverrideProps(overrides, "Frame 10141062621")}
                        >
                          <Image
                            src={logo5}
                            width="30px"
                            height="30px"
                            display="block"
                            gap="unset"
                            alignItems="unset"
                            justifyContent="unset"
                            shrink="0"
                            position="relative"
                            borderRadius="23px"
                            padding="0px 0px 0px 0px"
                            objectFit="cover"
                            {...getOverrideProps(
                              overrides,
                              "ghrgclzzd 341062622"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProExtraLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
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
                            children="@pippen11"
                            {...getOverrideProps(overrides, "@pippen11")}
                          ></Text>
                        </Flex>
                        <Flex
                          gap="6px"
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
                          padding="6px 9px 6px 9px"
                          {...getOverrideProps(overrides, "Frame 10641062624")}
                        ></Flex>
                      </Flex>
                      <Flex
                        gap="1px"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="center"
                        alignItems="flex-start"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 3px"
                        {...getOverrideProps(overrides, "Frame 10541062625")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
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
                          children="BlockChain"
                          {...getOverrideProps(overrides, "BlockChain41062626")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
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
                          children="신 상 목"
                          {...getOverrideProps(
                            overrides,
                            "\uC2E0 \uC0C1 \uBAA9"
                          )}
                        ></Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap="0"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  overflow="hidden"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 16041062628")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    src={logo6}
                    width="unset"
                    height="296px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="25px 25px 0px 0px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "nft (1) 341062629")}
                  ></Image>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="0px 0px 15px 15px"
                    padding="9px 11px 13px 11px"
                    backgroundColor="rgba(252,252,252,1)"
                    {...getOverrideProps(overrides, "Frame 11641062630")}
                  >
                    <Flex
                      gap="8px"
                      direction="column"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="flex-start"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 12px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 11541062631")}
                    >
                      <Flex
                        gap="6px"
                        direction="row"
                        width="297px"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "Frame 19241062632")}
                      >
                        <Flex
                          gap="10px"
                          direction="row"
                          width="unset"
                          height="unset"
                          justifyContent="flex-start"
                          alignItems="center"
                          grow="1"
                          shrink="1"
                          basis="0"
                          position="relative"
                          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                          borderRadius="25px"
                          padding="6px 9px 6px 9px"
                          backgroundColor="rgba(0,136,153,0.59)"
                          {...getOverrideProps(overrides, "Frame 10141062633")}
                        >
                          <Image
                            src={logo6}
                            width="30px"
                            height="30px"
                            display="block"
                            gap="unset"
                            alignItems="unset"
                            justifyContent="unset"
                            shrink="0"
                            position="relative"
                            borderRadius="23px"
                            padding="0px 0px 0px 0px"
                            objectFit="cover"
                            {...getOverrideProps(
                              overrides,
                              "ghrgclzzd 341062634"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProExtraLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
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
                            children="@rainbow96bear"
                            {...getOverrideProps(overrides, "@rainbow96bear")}
                          ></Text>
                        </Flex>
                        <Flex
                          gap="6px"
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
                          padding="6px 9px 6px 9px"
                          {...getOverrideProps(overrides, "Frame 10641062636")}
                        ></Flex>
                      </Flex>
                      <Flex
                        gap="1px"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="center"
                        alignItems="flex-start"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 3px"
                        {...getOverrideProps(overrides, "Frame 10541062637")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
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
                          children="BlockChain"
                          {...getOverrideProps(overrides, "BlockChain41062638")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
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
                          children="김 성 진"
                          {...getOverrideProps(
                            overrides,
                            "\uAE40 \uC131 \uC9C4"
                          )}
                        ></Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}
