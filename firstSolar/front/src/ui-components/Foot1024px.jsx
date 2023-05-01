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

export default function Foot1024px(props) {
  const { overrides, ...rest } = props;
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.94 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const isDesktop = useMediaQuery({
    query: "(min-width:1545px) and (max-width:3080px)",
  });

  return (
    <>
      {isDesktop ? (
        <motion.div
          style={{
            width: "89vw",
            height: "unset",
            backgroundColor: "rgba(255,255,255,0.8)",
            boxShadow: "38px 38px 29px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
          }}
          whileHover={{
            borderRadius: "55px",
            backgroundColor: "rgba(0,056,071,0.75)",
          }}
        >
          <Flex
            gap="35px"
            direction="row"
            width="89vw"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="relative"
            borderRadius="35px"
            padding="45px 35px 45px 35px"
            {...getOverrideProps(overrides, "Foot1024px")}
            {...rest}
          >
            <Flex
              gap="23px"
              direction="column"
              width="unset"
              height="unset"
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
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                  style={{ cursor: "pointer" }}
                  src={solarLogo}
                  width="140px"
                  height="140px"
                  display="flex"
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
                height="113px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
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
                    display="flex"
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
                    display="flex"
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
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                  style={{ cursor: "pointer" }}
                  gap="6px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
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
                    display="flex"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="23px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 341052697")}
                  ></Image>
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="10px"
                    fontWeight="700"
                    lineHeight="15px"
                    textAlign="left"
                    display="flex"
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
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 19741063213")}
            >
              <Flex
                gap="38px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
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
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 15541063215")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    style={{ cursor: "pointer" }}
                    src={logo1}
                    width="unset"
                    height="296px"
                    display="flex"
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
                    {...getOverrideProps(overrides, "nft (1) 341063216")}
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
                    {...getOverrideProps(overrides, "Frame 11641063217")}
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
                      {...getOverrideProps(overrides, "Frame 11541063218")}
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
                        {...getOverrideProps(overrides, "Frame 19241063219")}
                      >
                        <Flex
                          onMouseEnter={onEnter}
                          onMouseLeave={onLeave}
                          style={{ cursor: "pointer" }}
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
                          {...getOverrideProps(overrides, "Frame 10141063220")}
                        >
                          <Image
                            src={logo1}
                            width="30px"
                            height="30px"
                            display="flex"
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
                              "ghrgclzzd 341063221"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
                            textAlign="left"
                            display="flex"
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
                            children="@HGWA333"
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
                          {...getOverrideProps(overrides, "Frame 10641063223")}
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
                        {...getOverrideProps(overrides, "Frame 10541063224")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
                          textAlign="left"
                          display="flex"
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
                          {...getOverrideProps(overrides, "FrontEnd41063225")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
                          display="flex"
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
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 16041063227")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    style={{ cursor: "pointer" }}
                    src={logo2}
                    width="unset"
                    height="296px"
                    display="flex"
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
                    {...getOverrideProps(overrides, "nft (1) 341063228")}
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
                    {...getOverrideProps(overrides, "Frame 11641063229")}
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
                      {...getOverrideProps(overrides, "Frame 11541063230")}
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
                        {...getOverrideProps(overrides, "Frame 19241063231")}
                      >
                        <Flex
                          onMouseEnter={onEnter}
                          onMouseLeave={onLeave}
                          style={{ cursor: "pointer" }}
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
                          {...getOverrideProps(overrides, "Frame 10141063232")}
                        >
                          <Image
                            src={logo2}
                            width="30px"
                            height="30px"
                            display="flex"
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
                              "ghrgclzzd 341063233"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
                            textAlign="left"
                            display="flex"
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
                          {...getOverrideProps(overrides, "Frame 10641063235")}
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
                        {...getOverrideProps(overrides, "Frame 10541063236")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
                          textAlign="left"
                          display="flex"
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
                          {...getOverrideProps(overrides, "FrontEnd41063237")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
                          display="flex"
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
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 196")}
              >
                <Flex
                  gap="0"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  overflow="hidden"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 15541063240")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    style={{ cursor: "pointer" }}
                    src={logo3}
                    width="unset"
                    height="296px"
                    display="flex"
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
                    {...getOverrideProps(overrides, "nft (1) 341063241")}
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
                    {...getOverrideProps(overrides, "Frame 11641063242")}
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
                      {...getOverrideProps(overrides, "Frame 11541063243")}
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
                        {...getOverrideProps(overrides, "Frame 19241063244")}
                      >
                        <Flex
                          onMouseEnter={onEnter}
                          onMouseLeave={onLeave}
                          style={{ cursor: "pointer" }}
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
                          {...getOverrideProps(overrides, "Frame 10141063245")}
                        >
                          <Image
                            src={logo3}
                            width="30px"
                            height="30px"
                            display="flex"
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
                              "ghrgclzzd 341063246"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
                            textAlign="left"
                            display="flex"
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
                          {...getOverrideProps(overrides, "Frame 10641063248")}
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
                        {...getOverrideProps(overrides, "Frame 10541063249")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
                          textAlign="left"
                          display="flex"
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
                          {...getOverrideProps(overrides, "BackEnd41063250")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
                          display="flex"
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
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 16041063252")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    style={{ cursor: "pointer" }}
                    src={logo4}
                    width="unset"
                    height="296px"
                    display="flex"
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
                    {...getOverrideProps(overrides, "nft (1) 341063253")}
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
                    {...getOverrideProps(overrides, "Frame 11641063254")}
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
                      {...getOverrideProps(overrides, "Frame 11541063255")}
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
                        {...getOverrideProps(overrides, "Frame 19241063256")}
                      >
                        <Flex
                          onMouseEnter={onEnter}
                          onMouseLeave={onLeave}
                          style={{ cursor: "pointer" }}
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
                          {...getOverrideProps(overrides, "Frame 10141063257")}
                        >
                          <Image
                            src={logo4}
                            width="30px"
                            height="30px"
                            display="flex"
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
                              "ghrgclzzd 341063258"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProExtraLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
                            textAlign="left"
                            display="flex"
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
                          {...getOverrideProps(overrides, "Frame 10641063260")}
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
                        {...getOverrideProps(overrides, "Frame 10541063261")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
                          textAlign="left"
                          display="flex"
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
                          {...getOverrideProps(overrides, "BackEnd41063262")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
                          display="flex"
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
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 196")}
              >
                <Flex
                  gap="0"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  overflow="hidden"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 15541063240")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    style={{ cursor: "pointer" }}
                    src={logo5}
                    width="unset"
                    height="296px"
                    display="flex"
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
                    {...getOverrideProps(overrides, "nft (1) 341063241")}
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
                    {...getOverrideProps(overrides, "Frame 11641063242")}
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
                      {...getOverrideProps(overrides, "Frame 11541063243")}
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
                        {...getOverrideProps(overrides, "Frame 19241063244")}
                      >
                        <Flex
                          onMouseEnter={onEnter}
                          onMouseLeave={onLeave}
                          style={{ cursor: "pointer" }}
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
                          {...getOverrideProps(overrides, "Frame 10141063245")}
                        >
                          <Image
                            src={logo5}
                            width="30px"
                            height="30px"
                            display="flex"
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
                              "ghrgclzzd 341063246"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
                            textAlign="left"
                            display="flex"
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
                          {...getOverrideProps(overrides, "Frame 10641063248")}
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
                        {...getOverrideProps(overrides, "Frame 10541063249")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
                          textAlign="left"
                          display="flex"
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
                          {...getOverrideProps(overrides, "BackEnd41063250")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
                          display="flex"
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
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgb(255,255,255)"
                  {...getOverrideProps(overrides, "Frame 16041063252")}
                >
                  <Image
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    style={{ cursor: "pointer" }}
                    src={logo6}
                    width="unset"
                    height="296px"
                    display="flex"
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
                    {...getOverrideProps(overrides, "nft (1) 341063253")}
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
                    {...getOverrideProps(overrides, "Frame 11641063254")}
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
                      {...getOverrideProps(overrides, "Frame 11541063255")}
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
                        {...getOverrideProps(overrides, "Frame 19241063256")}
                      >
                        <Flex
                          onMouseEnter={onEnter}
                          onMouseLeave={onLeave}
                          style={{ cursor: "pointer" }}
                          gap="10px"
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
                          padding="6px 25px 6px 25px"
                          backgroundColor="rgba(0,136,153,0.59)"
                          {...getOverrideProps(overrides, "Frame 10141063257")}
                        >
                          <Image
                            src={logo6}
                            width="30px"
                            height="30px"
                            display="flex"
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
                              "ghrgclzzd 341063258"
                            )}
                          ></Image>
                          <Text
                            fontFamily="ffProLight"
                            fontSize="9px"
                            fontWeight="700"
                            lineHeight="13.5px"
                            textAlign="left"
                            display="flex"
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
                          {...getOverrideProps(overrides, "Frame 10641063260")}
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
                        {...getOverrideProps(overrides, "Frame 10541063261")}
                      >
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="10px"
                          fontWeight="700"
                          color="rgba(86,86,86,1)"
                          lineHeight="15px"
                          textAlign="left"
                          display="flex"
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
                          {...getOverrideProps(overrides, "BackEnd41063262")}
                        ></Text>
                        <Text
                          fontFamily="ffProExtraLight"
                          fontSize="12px"
                          fontWeight="700"
                          lineHeight="18px"
                          textAlign="right"
                          display="flex"
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
                            "\uC774 \uC7AC \uD601"
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
