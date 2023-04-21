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
import { SwapCompo1440px } from "../ui-components";
import { getMainPoolList } from "../api/index.js";

export default function PoolListCom1440px(props) {
  const { overrides, ...rest } = props;

  const [poolList, setPoolList] = React.useState([]);
  const [currentPagePoolList, setCurrentPagePoolList] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    (async () => {
      const { result, resultTotalPages } = await getMainPoolList(pageIndex);
      setPoolList(result);

      setCurrentPagePoolList(
        result.slice((pageIndex - 1) * 10, pageIndex * 10)
      );
      setTotalPages(resultTotalPages);
    })();
  }, []);

  React.useEffect(() => {
    setCurrentPagePoolList(
      poolList.slice((pageIndex - 1) * 10, pageIndex * 10)
    );
  }, [pageIndex]);

  const paginationProps = usePagination({
    totalPages: totalPages,
    currentPage: pageIndex,
    siblingCount: 2,
  });

  return (
    <Flex
      className="1440box"
      display={{
        base: "none",
        small: "none",
        medium: "none",
        large: "none",
        xl: "flex",
        xxl: "flex",
      }}
      gap="27px"
      direction="column"
      width="88vw"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="35px"
      padding="59px 100px 59px 100px"
      backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
      {...getOverrideProps(overrides, "PoolListCom1440px")}
      {...rest}
    >
      <motion.div
        style={{
          width: "80vw",
          height: "unset",
          borderRadius: "33px",
          backgroundColor: "rgba(0, 136, 153, 0.86)",
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
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="21px"
          padding="32px 26px 32px 26px"
          {...getOverrideProps(overrides, "Networks39563029")}
        >
          <Text
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="600"
            lineHeight="43.568180084228516px"
            textAlign="center"
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
            children="Networks List"
            {...getOverrideProps(overrides, "Networks List")}
          ></Text>
          <Flex
            gap="57px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 19px 0px 19px"
            {...getOverrideProps(overrides, "NetWork List39563031")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 2939563300")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39563301")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3039563302")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39563303")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3139563304")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39563305")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3239563306")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39563307")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3339563308")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39563309")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3439563310")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39563311")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3539563312")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39563313")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3639563314")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39563315")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3739563316")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39563317")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3839563318")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39563319")}
              ></Image>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
      <motion.div
        style={{
          width: "80vw",
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
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="21px"
          padding="32px 26px 32px 26px"
          {...getOverrideProps(overrides, "Networks40122778")}
        >
          <Text
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="600"
            lineHeight="43.568180084228516px"
            textAlign="center"
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
            children="Dex List"
            {...getOverrideProps(overrides, "Dex List")}
          ></Text>
          <Flex
            gap="57px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 19px 0px 19px"
            {...getOverrideProps(overrides, "NetWork List40122780")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 2940122781")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g40122782")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3040122783")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g40122784")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3140122785")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g40122786")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3240122787")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g40122788")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3340122789")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g40122790")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3440122791")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g40122792")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3540122793")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g40122794")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3640122795")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g40122796")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3740122797")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g40122798")}
              ></Image>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              padding="10px 10px 10px 10px"
              backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
              {...getOverrideProps(overrides, "Frame 3840122799")}
            >
              <Image
                width="41.66px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g40122800")}
              ></Image>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
      <motion.div
        style={{
          width: "80vw",
          height: "unset",
          borderRadius: "15px",
          backgroundColor: "rgba(255,226,0,0.35)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          backgroundImage:
            "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
        }}
        whileHover={{ borderRadius: "35px" }}
      >
        <Flex
          gap="15px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="13px"
          padding="6px 15px 6px 15px"
          // backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
          {...getOverrideProps(overrides, "Top")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="398px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 3739412765")}
          >
            <Text
              fontFamily="Inter"
              fontSize="18px"
              fontWeight="600"
              lineHeight="21.784090042114258px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="358px"
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
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 13")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="600"
              lineHeight="16.94318199157715px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="25px"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
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
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 3839573866")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="600"
              lineHeight="16.94318199157715px"
              textAlign="center"
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
              alignSelf="stretch"
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
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 39")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="600"
              lineHeight="16.94318199157715px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="25px"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="APY"
              {...getOverrideProps(overrides, "APY")}
            ></Text>
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
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 14")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              lineHeight="16.94318199157715px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="25px"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="TVL"
              {...getOverrideProps(overrides, "TVL")}
            ></Text>
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
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 40")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              lineHeight="16.94318199157715px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="25px"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
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
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 1539313304")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              lineHeight="16.94318199157715px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="25px"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Action"
              {...getOverrideProps(overrides, "Action")}
            ></Text>
          </Flex>
        </Flex>
      </motion.div>

      <LayoutGroup>
        <motion.div
          layout
          initial={{ borderRadius: 25 }}
          transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {currentPagePoolList?.map((item, idx) => (
            <Flex
              key={`lpList-1440-${idx}`}
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
              {...getOverrideProps(overrides, "PoolItem")}
            >
              <ItemWrap
                onClick={toggleOpen}
                layout
                transition={{ duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                <motion.div
                  style={{
                    width: "80vw",
                    height: "unset",
                    borderRadius: "33px",
                    backgroundColor: "rgba(253, 253, 253, 0.75)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    backgroundImage:
                      "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
                  }}
                  whileHover={{ borderRadius: "75px" }}
                >
                  <Flex
                    gap="7px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="center"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    // borderRadius="18px"
                    padding="30px 15px 30px 15px"
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
                      position="relative"
                      padding="0px 0px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 11")}
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
                            "unsplash:AYOloXgqjzo39313162"
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
                            "unsplash:em1OiomfG3g39313163"
                          )}
                        ></Image>
                      </Flex>
                      <Flex
                        gap="13px"
                        direction="column"
                        width="338px"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "LogoTitle")}
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
                          height="25px"
                          gap="unset"
                          alignItems="unset"
                          shrink="0"
                          alignSelf="stretch"
                          position="relative"
                          padding="0px 0px 0px 0px"
                          whiteSpace="pre-wrap"
                          children={item.name}
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
                              fontSize="12px"
                              fontWeight="600"
                              color="rgba(239,239,239,1)"
                              lineHeight="14.522727012634277px"
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
                              {...getOverrideProps(overrides, "VELOCIMETER")}
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
                                "unsplash:AYOloXgqjzo39313160"
                              )}
                            ></Image>
                            <Text
                              fontFamily="Inter"
                              fontSize="12px"
                              fontWeight="600"
                              lineHeight="14.522727012634277px"
                              textAlign="center"
                              display="block"
                              direction="column"
                              justifyContent="unset"
                              width="105px"
                              height="15px"
                              gap="unset"
                              alignItems="unset"
                              shrink="0"
                              position="relative"
                              padding="0px 0px 0px 0px"
                              whiteSpace="pre-wrap"
                              children="STADER BOOST"
                              {...getOverrideProps(overrides, "STADER BOOST")}
                            ></Text>
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
                      grow="1"
                      shrink="1"
                      basis="0"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Frame 1539313290")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="14px"
                        fontWeight="500"
                        lineHeight="16.94318199157715px"
                        textAlign="center"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="17px"
                        gap="unset"
                        alignItems="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="wallet자리"
                        {...getOverrideProps(overrides, "039313291")}
                      ></Text>
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
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Frame 18")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="14px"
                        fontWeight="500"
                        lineHeight="16.94318199157715px"
                        textAlign="center"
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
                        children="deposit자리"
                        {...getOverrideProps(overrides, "039573871")}
                      ></Text>
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
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Frame 19")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="14px"
                        fontWeight="500"
                        lineHeight="16.94318199157715px"
                        textAlign="center"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="17px"
                        gap="unset"
                        alignItems="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children={`${Math.round(item?.apy * 10000) / 10000} %`}
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
                      grow="1"
                      shrink="1"
                      basis="0"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Frame 16")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="14px"
                        fontWeight="500"
                        lineHeight="16.94318199157715px"
                        textAlign="center"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="17px"
                        gap="unset"
                        alignItems="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children={`$${item.tvl}`}
                        {...getOverrideProps(overrides, "$999,99939313294")}
                      ></Text>
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
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Frame 20")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="14px"
                        fontWeight="500"
                        lineHeight="16.94318199157715px"
                        textAlign="center"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="17px"
                        gap="unset"
                        alignItems="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children={`$${
                          item.dailyTvlRate == null
                            ? 0
                            : Math.round(item.dailyTvlRate * 10000) / 10000
                        }`}
                        {...getOverrideProps(overrides, "$999,99939574041")}
                      ></Text>
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
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Frame 17")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="14px"
                        fontWeight="500"
                        lineHeight="16.94318199157715px"
                        textAlign="center"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="17px"
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
                      <SwapCompo1440px />
                    </motion.div>
                  </SubWrap>
                )}
              </AnimatePresence>
            </Flex>
          ))}
        </motion.div>
      </LayoutGroup>
      <Flex width="80vw" justifyContent="center" padding="30px 0px 0px 0px">
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
