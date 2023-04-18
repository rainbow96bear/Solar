/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Image,
  Text,
  Pagination,
  usePagination,
  ToggleButton,
  ToggleButtonGroup,
} from "@aws-amplify/ui-react";
import "../css/PoolList.css";

export default function PooListCom768px(props) {
  const [value, setValue] = React.useState("");
  const [dexvalue, setDexValue] = React.useState("");
  const paginationProps = usePagination({
    totalPages: 11,
    currentPage: 5,
    siblingCount: 2,
  });
  const { overrides, ...rest } = props;
  return (
    <Flex
      display={{
        base: "none",
        small: "flex",
        medium: "flex",
        large: "none",
        xl: "none",
        xxl: "none",
      }}
      gap="52px"
      direction="column"
      width="80vw"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
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
        <Flex
          gap="17px"
          direction="column"
          width="unset"
          height="212px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Networks List39563128")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
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

          <ToggleButtonGroup
            isExclusive={true}
            isSelectionRequired
            className="mycompo"
            value={value}
            onChange={value => setValue(value)}
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
            <ToggleButton
              value="w1"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w2"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w3"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w4"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w5"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            isExclusive={true}
            isSelectionRequired
            className="mycompo"
            value={value}
            onChange={value => setValue(value)}
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
            <ToggleButton
              value="w6"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w7"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w8"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w9"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w10"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
          </ToggleButtonGroup>
        </Flex>

        <Flex
          marginTop="30px"
          gap="17px"
          direction="column"
          width="unset"
          height="212px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "DexList")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
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

          <ToggleButtonGroup
            isExclusive={true}
            isSelectionRequired
            className="mycompo"
            value={dexvalue}
            onChange={dexvalue => setDexValue(dexvalue)}
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
            <ToggleButton
              value="w1"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w2"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w3"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w4"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w5"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            isExclusive={true}
            isSelectionRequired
            className="mycompo"
            value={dexvalue}
            onChange={dexvalue => setDexValue(dexvalue)}
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
            <ToggleButton
              value="w6"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w7"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w8"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w9"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
            <ToggleButton
              value="w10"
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
              {...getOverrideProps(overrides, "Frame 1939412770")}
            >
              <Image
                src="https://app.beefy.com/assets/ETH-26448be8.svg"
                width="38px"
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39412771")}
              ></Image>
            </ToggleButton>
          </ToggleButtonGroup>
        </Flex>

        <Flex
          gap="40px"
          direction="row"
          marginTop="80px"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
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
            padding="0px 0px 0px 0px"
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
                color="rgba(0,0,0,1)"
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
                color="rgba(0,0,0,1)"
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
                color="rgba(0,0,0,1)"
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
                color="rgba(0,0,0,1)"
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
                color="rgba(0,0,0,1)"
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
                color="rgba(0,0,0,1)"
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
                color="rgba(0,0,0,1)"
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
                {...getOverrideProps(overrides, "Action39574053")}
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
              height="48px"
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
                  color="rgba(0,0,0,1)"
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
                  children="Overnight Pulse Act ll"
                  overflow="hidden"
                  {...getOverrideProps(overrides, "Overnight Pulse Act ll")}
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
                    backgroundColor="rgba(255,255,255,1)"
                    {...getOverrideProps(overrides, "Frame 9")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="12px"
                      fontWeight="500"
                      color="rgba(0,0,0,1)"
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
                      overflow="hidden"
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
                    backgroundColor="rgba(255,255,255,1)"
                    {...getOverrideProps(overrides, "Frame 8")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="12px"
                      fontWeight="500"
                      color="rgba(0,0,0,1)"
                      lineHeight="14.522727012634277px"
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
                      overflow="hidden"
                      {...getOverrideProps(overrides, "STADER BOOST")}
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
              padding="10px 10px 10px 10px"
              {...getOverrideProps(overrides, "APY39422826")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
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
                children="0"
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
              padding="10px 10px 10px 10px"
              {...getOverrideProps(overrides, "TVL39422829")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
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
                children="0"
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
              padding="10px 10px 10px 10px"
              {...getOverrideProps(overrides, "Action39422832")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
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
                children="99.99%"
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
              padding="10px 10px 10px 10px"
              {...getOverrideProps(overrides, "Action39574042")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
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
                children="$999,999"
                {...getOverrideProps(overrides, "$999,99939574043")}
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
              {...getOverrideProps(overrides, "Action39574044")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
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
                children="$999,999"
                {...getOverrideProps(overrides, "$999,99939574045")}
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
              {...getOverrideProps(overrides, "Action39574046")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
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
                {...getOverrideProps(overrides, "Add Liquidity")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
