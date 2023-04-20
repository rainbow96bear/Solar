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
  View,
} from "@aws-amplify/ui-react";
import Poolitem320px from "../components/Pool/Poolitem320px";
import { motion, LayoutGroup } from "framer-motion";
import { getMainPoolList } from "../api";
import { useMediaQuery } from "react-responsive";

export default function PooListCom320px(props) {
  const { overrides, ...rest } = props;

  const [currentPagePoolList, setCurrentPagePoolList] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const paginationProps = usePagination({
    totalPages: totalPages,
    currentPage: pageIndex,
    siblingCount: 1,
  });

  const isMobile = useMediaQuery({
    query: "(min-width:0px) and (max-width:480px)",
  });

  return (
    <>
      {isMobile ? (
        <View
          display="flex"
          width="88vw"
          height="1364px"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PooListCom320px")}
          {...rest}
        >
          <Flex
            gap="29px"
            direction="column"
            width="320px"
            height="380px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="calc(50% - 190px - 492px)"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "PoolList")}
          >
            <motion.div
              style={{
                width: "89vw",
                height: "unset",
                borderRadius: "33px",
                backgroundColor: "rgba(248,251,251,0.35)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                backgroundImage:
                  "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
              }}
              whileHover={{ borderRadius: "75px" }}
            >
              <Flex
                gap="14px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="15px"
                padding="24px 26px 24px 26px"
                {...getOverrideProps(overrides, "NetworksList")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="21.784090042114258px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="18px"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Networks List"
                  {...getOverrideProps(overrides, "Networks List")}
                ></Text>
                <Flex
                  gap="12px"
                  direction="column"
                  width="unset"
                  height="106px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Networks39422981")}
                >
                  <Flex
                    gap="12px"
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
                    {...getOverrideProps(overrides, "Frame 3839422982")}
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
                        )}
                      ></Image>
                    </Flex>
                  </Flex>
                  <Flex
                    gap="12px"
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
                    {...getOverrideProps(overrides, "Frame 3839422982")}
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                backgroundColor: "rgba(248,251,251,0.35)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                backgroundImage:
                  "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
              }}
              whileHover={{ borderRadius: "75px" }}
            >
              <Flex
                gap="14px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="15px"
                padding="24px 26px 24px 26px"
                {...getOverrideProps(overrides, "NetworksList")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="21.784090042114258px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="18px"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Dex List"
                  {...getOverrideProps(overrides, "Networks List")}
                ></Text>
                <Flex
                  gap="12px"
                  direction="column"
                  width="unset"
                  height="106px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Networks39422981")}
                >
                  <Flex
                    gap="12px"
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
                    {...getOverrideProps(overrides, "Frame 3839422982")}
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
                        )}
                      ></Image>
                    </Flex>
                  </Flex>
                  <Flex
                    gap="12px"
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
                    {...getOverrideProps(overrides, "Frame 3839422982")}
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                      {...getOverrideProps(overrides, "Frame 1939422983")}
                    >
                      <Image
                        width="unset"
                        height="unset"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="20px"
                        padding="0px 0px 0px 0px"
                        objectFit="cover"
                        {...getOverrideProps(
                          overrides,
                          "unsplash:em1OiomfG3g39422984"
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
                  <Poolitem320px
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
                    key={`PoolList320px-${idx}`}
                    item={item}
                  />
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
                onChange={pageNum => {
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
        </View>
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
