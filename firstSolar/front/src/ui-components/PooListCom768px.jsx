/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Image,
  Text,
  Pagination,
  usePagination,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { ConnectCompo768px, SwapCompo768px } from "../ui-components";
import { getMainPoolList } from "../api/index.js";
import { useMediaQuery } from "react-responsive";

export default function PooListCom768px(props) {
  const { overrides, ...rest } = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const items = [
    {
      id: "0",
      title: "1",
    },
    {
      id: "1",
      title: "2",
    },
    {
      id: "2",
      title: "3",
    },
  ];

  return (
    <>
      {isTablet ? (
        <Flex
          className="768box"
          display="flex"
          gap="52px"
          direction={{ base: "row", medium: "column" }}
          width={{ base: "80vw", medium: "87vw" }}
          height="unset"
          justifyContent={{ base: "center", medium: "flex-start" }}
          alignItems={{ base: "center", medium: "flex-start" }}
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PooListCom768px")}
          {...rest}
        >
          <Flex
            gap="25px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "PoolList")}
          >
            <motion.div
              style={{
                width: "89vw",
                height: "unset",
                borderRadius: "33px",
                backgroundColor: "rgba(255,226,0,0.35)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                backgroundImage:
                  "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
              }}
              width={{ base: "80vw", medium: "87vw" }}
              whileHover={{ borderRadius: "75px" }}
            >
              <Flex
                gap="12px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="35px"
                padding="29px 27px 29px 27px"
                {...getOverrideProps(overrides, "Networks List39563128")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="24px"
                  fontWeight="700"
                  lineHeight="29.045454025268555px"
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
                  children="Networks List"
                  {...getOverrideProps(overrides, "Networks List39563127")}
                ></Text>
                <Flex
                  gap="12px"
                  direction="column"
                  width="unset"
                  height="128px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Networks39422850")}
                >
                  <Flex
                    gap="67px"
                    direction="row"
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
                    {...getOverrideProps(overrides, "Frame 3839412790")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 1939412770")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39412771"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2039573430")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573431"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2139573432")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573433"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2239573434")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573435"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2339573436")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573437"
                        )}
                      ></Image>
                    </Flex>
                  </Flex>
                  <Flex
                    gap="67px"
                    direction="row"
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
                    {...getOverrideProps(overrides, "Frame 3939573438")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 1939573439")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573440"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2039573441")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573442"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2139573443")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573444"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2239573445")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573446"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2339573447")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573448"
                        )}
                      ></Image>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </motion.div>

            <motion.div
              style={{
                width: "89vw",
                height: "unset",
                borderRadius: "33px",
                backgroundColor: "rgba(234,0,50,0.55)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                backgroundImage:
                  "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
              }}
              whileHover={{ borderRadius: "75px" }}
            >
              <Flex
                gap="12px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="35px"
                padding="29px 27px 29px 27px"
                backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                {...getOverrideProps(overrides, "DexList")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="24px"
                  fontWeight="700"
                  lineHeight="29.045454025268555px"
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
                  children="Dex List"
                  {...getOverrideProps(overrides, "Dex List")}
                ></Text>
                <Flex
                  gap="12px"
                  direction="column"
                  width="unset"
                  height="128px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Networks39573451")}
                >
                  <Flex
                    gap="67px"
                    direction="row"
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
                    {...getOverrideProps(overrides, "Frame 3839573452")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 1939573453")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573454"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2039573455")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573456"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2139573457")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573458"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2239573459")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573460"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2339573461")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573462"
                        )}
                      ></Image>
                    </Flex>
                  </Flex>
                  <Flex
                    gap="67px"
                    direction="row"
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
                    {...getOverrideProps(overrides, "Frame 3939573463")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 1939573464")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573465"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2039573466")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573467"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2139573468")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573469"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2239573470")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573471"
                        )}
                      ></Image>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      grow="1"
                      shrink="1"
                      basis="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(244,244,244,1)"
                      {...getOverrideProps(overrides, "Frame 2339573472")}
                    >
                      <Image
                        width="32.27px"
                        height="38px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39573473"
                        )}
                      ></Image>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </motion.div>

            <LayoutGroup>
              <motion.div
                layout
                initial={{ borderRadius: 25 }}
                transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                {currentPagePoolList.map((item, idx) => (
                  <Flex
                    key={`lpList-768-${idx}`}
                    gap="17px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                  >
                    <ItemWrap
                      onClick={toggleOpen}
                      layout
                      transition={{
                        duration: 0.2,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                    >
                      <motion.div
                        style={{
                          width: "89vw",
                          height: "unset",
                          borderRadius: "33px",
                          backgroundColor: "rgba(249,250,250,0.75)",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          backgroundImage:
                            "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
                        }}
                        whileHover={{ borderRadius: "75px" }}
                      >
                        <Flex
                          gap="40px"
                          direction="row"
                          width="unset"
                          height="unset"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          shrink="0"
                          alignSelf="stretch"
                          position="relative"
                          borderRadius="35px"
                          padding="30px 27px 30px 27px"
                          {...getOverrideProps(overrides, "PoolItem")}
                        >
                          <Flex
                            gap="40px"
                            direction="column"
                            width="unset"
                            height="unset"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            shrink="0"
                            position="relative"
                            padding="26px 0px 26px 0px"
                            {...getOverrideProps(overrides, "Top")}
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
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "lpList")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
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
                                children="LP List"
                                {...getOverrideProps(overrides, "LP List")}
                              ></Text>
                            </Flex>
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
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "APY39412809")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
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
                                children="WALLET"
                                {...getOverrideProps(overrides, "WALLET")}
                              ></Text>
                            </Flex>
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
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "TVL39412816")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
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
                                children="DEPOSITED"
                                {...getOverrideProps(overrides, "DEPOSITED")}
                              ></Text>
                            </Flex>
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
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "Action39412819")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
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
                                children="APY"
                                {...getOverrideProps(overrides, "APY39412820")}
                              ></Text>
                            </Flex>
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
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "Action39574048")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
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
                                children="TVL"
                                {...getOverrideProps(overrides, "TVL39574049")}
                              ></Text>
                            </Flex>
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
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "Action39574050")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
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
                                children="DAILY RATE"
                                {...getOverrideProps(overrides, "DAILY RATE")}
                              ></Text>
                            </Flex>
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
                              padding="10px 10px 10px 10px"
                              {...getOverrideProps(overrides, "Action39574052")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="21px"
                                fontWeight="700"
                                lineHeight="25.414772033691406px"
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
                                children="Action"
                                {...getOverrideProps(
                                  overrides,
                                  "Action39574053"
                                )}
                              ></Text>
                            </Flex>
                          </Flex>
                          <Flex
                            gap="46px"
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
                            {...getOverrideProps(overrides, "List")}
                          >
                            <Flex
                              gap="10px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="flex-start"
                              alignItems="center"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="0px 25px 0px 25px"
                              {...getOverrideProps(overrides, "Frame 18")}
                            >
                              <Flex
                                gap="-6px"
                                direction="row"
                                width="unset"
                                height="48px"
                                justifyContent="center"
                                alignItems="center"
                                shrink="0"
                                position="relative"
                                padding="5px 5px 5px 5px"
                                {...getOverrideProps(overrides, "PoolImg")}
                              >
                                <Image
                                  src={item.mainNetLogo}
                                  width="15px"
                                  height="15px"
                                  display="block"
                                  gap="unset"
                                  alignItems="unset"
                                  justifyContent="unset"
                                  shrink="0"
                                  position="relative"
                                  borderRadius="15px"
                                  padding="0px 0px 0px 0px"
                                  objectFit="cover"
                                  {...getOverrideProps(
                                    overrides,
                                    "unsplash:AYOloXgqjzo39422837"
                                  )}
                                ></Image>
                                <Image
                                  src={item.platformLogo}
                                  width="38px"
                                  height="38px"
                                  display="block"
                                  gap="unset"
                                  alignItems="unset"
                                  justifyContent="unset"
                                  shrink="0"
                                  position="relative"
                                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                  borderRadius="20px"
                                  padding="0px 0px 0px 0px"
                                  objectFit="cover"
                                  {...getOverrideProps(
                                    overrides,
                                    "unsplash:em1OiomfG3g39422838"
                                  )}
                                ></Image>
                              </Flex>
                              <Flex
                                gap="13px"
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
                                {...getOverrideProps(overrides, "LogoTitle")}
                              >
                                <Text
                                  fontFamily="Inter"
                                  fontSize="21px"
                                  fontWeight="500"
                                  lineHeight="25.414772033691406px"
                                  textAlign="left"
                                  display="block"
                                  direction="column"
                                  justifyContent="unset"
                                  width="unset"
                                  height="25px"
                                  gap="unset"
                                  alignItems="unset"
                                  shrink="0"
                                  alignSelf="stretch"
                                  position="relative"
                                  padding="0px 0px 0px 0px"
                                  whiteSpace="pre-wrap"
                                  children={item.name}
                                  overflow="hidden"
                                  {...getOverrideProps(
                                    overrides,
                                    "Overnight Pulse Act ll"
                                  )}
                                ></Text>
                                <Flex
                                  gap="15px"
                                  direction="row"
                                  width="unset"
                                  height="unset"
                                  justifyContent="flex-start"
                                  alignItems="flex-start"
                                  shrink="0"
                                  alignSelf="stretch"
                                  position="relative"
                                  padding="0px 0px 0px 0px"
                                  {...getOverrideProps(overrides, "Frame 10")}
                                >
                                  <Flex
                                    gap="10px"
                                    direction="column"
                                    width="unset"
                                    height="unset"
                                    justifyContent="center"
                                    alignItems="center"
                                    grow="1"
                                    shrink="1"
                                    basis="0"
                                    position="relative"
                                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                    borderRadius="19px"
                                    padding="10px 10px 10px 10px"
                                    backgroundColor="rgba(234,0,50,0.55)"
                                    {...getOverrideProps(overrides, "Frame 9")}
                                  >
                                    <Text
                                      fontFamily="Inter"
                                      fontSize="9px"
                                      fontWeight="600"
                                      color="rgba(239,239,239,1)"
                                      lineHeight="10.892045021057129px"
                                      textAlign="center"
                                      display="block"
                                      direction="column"
                                      justifyContent="unset"
                                      width="unset"
                                      height="15px"
                                      gap="unset"
                                      alignItems="unset"
                                      shrink="0"
                                      alignSelf="stretch"
                                      position="relative"
                                      padding="0px 0px 0px 0px"
                                      whiteSpace="pre-wrap"
                                      children="VELOCIMETER"
                                      {...getOverrideProps(
                                        overrides,
                                        "VELOCIMETER"
                                      )}
                                    ></Text>
                                  </Flex>
                                  <Flex
                                    gap="0"
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
                                    borderRadius="19px"
                                    padding="10px 10px 10px 10px"
                                    backgroundColor="rgba(255,226,0,0.35)"
                                    {...getOverrideProps(overrides, "Frame 8")}
                                  >
                                    <Text
                                      fontFamily="Inter"
                                      fontSize="9px"
                                      fontWeight="600"
                                      lineHeight="10.892045021057129px"
                                      textAlign="center"
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
                                      children="STADER BOOST"
                                      {...getOverrideProps(
                                        overrides,
                                        "STADER BOOST"
                                      )}
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
                                      borderRadius="15px"
                                      padding="0px 0px 0px 0px"
                                      objectFit="cover"
                                      {...getOverrideProps(
                                        overrides,
                                        "unsplash:AYOloXgqjzo39422845"
                                      )}
                                    ></Image>
                                  </Flex>
                                </Flex>
                              </Flex>
                            </Flex>
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
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "APY39422826")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="14px"
                                fontWeight="500"
                                lineHeight="16.94318199157715px"
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
                                children="wallet자리"
                                {...getOverrideProps(overrides, "039422827")}
                              ></Text>
                            </Flex>
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
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "TVL39422829")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="14px"
                                fontWeight="500"
                                lineHeight="16.94318199157715px"
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
                                children="deposit자리"
                                {...getOverrideProps(overrides, "039422830")}
                              ></Text>
                            </Flex>
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
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "Action39422832")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="14px"
                                fontWeight="500"
                                lineHeight="16.94318199157715px"
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
                                children={`${
                                  Math.round(item?.apy * 10000) / 10000
                                } %`}
                                {...getOverrideProps(overrides, "99.99%")}
                              ></Text>
                            </Flex>
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
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "Action39574042")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="14px"
                                fontWeight="500"
                                lineHeight="16.94318199157715px"
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
                                children={`$${item.tvl}`}
                                {...getOverrideProps(
                                  overrides,
                                  "$999,99939574043"
                                )}
                              ></Text>
                            </Flex>
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
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "Action39574044")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="14px"
                                fontWeight="500"
                                lineHeight="16.94318199157715px"
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
                                children={`$${
                                  item.dailyTvlRate == null
                                    ? 0
                                    : Math.round(item.dailyTvlRate * 10000) /
                                      10000
                                }`}
                                {...getOverrideProps(
                                  overrides,
                                  "$999,99939574045"
                                )}
                              ></Text>
                            </Flex>
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
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="10px"
                              padding="10px 10px 10px 10px"
                              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                              {...getOverrideProps(overrides, "Action39574046")}
                            >
                              <Text
                                fontFamily="Inter"
                                fontSize="14px"
                                fontWeight="500"
                                lineHeight="16.94318199157715px"
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
                                children="Add Liquidity"
                                {...getOverrideProps(
                                  overrides,
                                  "Add Liquidity"
                                )}
                              ></Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </motion.div>
                    </ItemWrap>
                    <AnimatePresence>
                      {isOpen && (
                        <SubWrap>
                          <motion.div
                            layout
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 0.25,
                              ease: [0.43, 0.13, 0.23, 0.96],
                            }}
                          >
                            <SwapCompo768px />
                          </motion.div>
                        </SubWrap>
                      )}
                    </AnimatePresence>
                  </Flex>
                ))}
              </motion.div>
            </LayoutGroup>
            <Flex
              width="80vw"
              justifyContent="center"
              padding="30px 0px 0px 0px"
            >
              <Pagination
                {...paginationProps}
                onChange={(pageNum) => {
                  setPageIndex(pageNum);
                }}
                onNext={() => {
                  setPageIndex(pageIndex + 1);
                }}
                onPrevious={() => {
                  setPageIndex(pageIndex - 1);
                }}
              />
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
}

const ItemWrap = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin-top: 38px;
`;

const SubWrap = styled(motion.div)`
  font-size: 15px;
  display: flex;
  :last-child {
    border-radius: 0 0 20px 20px;
  }
`;
