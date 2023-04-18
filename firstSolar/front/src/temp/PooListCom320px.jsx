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
  View,
  Pagination,
  usePagination,
  ToggleButton,
  ToggleButtonGroup,
} from "@aws-amplify/ui-react";
import "../css/PoolList.css";

export default function PooListCom320px(props) {
  const [value, setValue] = React.useState("");
  const [dexvalue, setDexValue] = React.useState("");
  const paginationProps = usePagination({
    totalPages: 11,
    currentPage: 5,
    siblingCount: 2,
  });
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="1364px"
      display={{
        base: "flex",
        small: "none",
        medium: "none",
        large: "none",
        xl: "none",
        xxl: "none",
      }}
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
        width="100%"
        height="769px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="calc(50% - 384.5px - 297.5px)"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PoolList")}
      >
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="136px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "NetworksList")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
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
            overflow="hidden"
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
            <ToggleButtonGroup
              isExclusive={true}
              isSelectionRequired
              className="mycompo"
              value={value}
              onChange={value => setValue(value)}
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
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              isExclusive={true}
              isSelectionRequired
              className="mycompo"
              value={value}
              onChange={value => setValue(value)}
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
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
            </ToggleButtonGroup>
          </Flex>
        </Flex>
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="136px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "DexList")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
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
            overflow="hidden"
            {...getOverrideProps(overrides, "Dex List")}
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
            {...getOverrideProps(overrides, "Networks39573898")}
          >
            <ToggleButtonGroup
              isExclusive={true}
              isSelectionRequired
              className="mycompo"
              value={dexvalue}
              onChange={dexvalue => setDexValue(dexvalue)}
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
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              isExclusive={true}
              isSelectionRequired
              className="mycompo"
              value={dexvalue}
              onChange={dexvalue => setDexValue(dexvalue)}
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
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
              <ToggleButton
                className="mycompo"
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
                {...getOverrideProps(overrides, "Frame 1939422983")}
              >
                <Image
                  src="https://app.beefy.com/assets/ETH-26448be8.svg"
                  width="25px"
                  height="26.11px"
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
                    "unsplash:em1OiomfG3g39422984"
                  )}
                ></Image>
              </ToggleButton>
            </ToggleButtonGroup>
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="row"
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
            gap="21px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Top")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="241px"
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
              {...getOverrideProps(overrides, "APY39433721")}
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
              {...getOverrideProps(overrides, "TVL39433724")}
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
              {...getOverrideProps(overrides, "Action39433727")}
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
                {...getOverrideProps(overrides, "APY39433728")}
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
              {...getOverrideProps(overrides, "Action39574054")}
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
                {...getOverrideProps(overrides, "TVL39574055")}
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
              {...getOverrideProps(overrides, "Action39574056")}
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
              {...getOverrideProps(overrides, "Action39574058")}
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
                {...getOverrideProps(overrides, "Action39574059")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="31px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "List")}
          >
            <Flex
              gap="10px"
              direction="column"
              width="unset"
              height="233px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
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
                    "unsplash:AYOloXgqjzo39433733"
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
                    "unsplash:em1OiomfG3g39433734"
                  )}
                ></Image>
              </Flex>
              <Flex
                gap="13px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "LogoTitle")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
                  lineHeight="18.15340805053711px"
                  textAlign="center"
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
                  {...getOverrideProps(overrides, "Overnight Pulse Act ll")}
                ></Text>
                <Flex
                  gap="15px"
                  direction="column"
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
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="19px"
                    padding="10px 10px 10px 10px"
                    backgroundColor="rgba(255,255,255,1)"
                    {...getOverrideProps(overrides, "Frame 9")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="11px"
                      fontWeight="500"
                      color="rgba(0,0,0,1)"
                      lineHeight="13.3125px"
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
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="19px"
                    padding="10px 10px 10px 10px"
                    backgroundColor="rgba(255,255,255,1)"
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
                        "unsplash:AYOloXgqjzo39433741"
                      )}
                    ></Image>
                    <Text
                      fontFamily="Inter"
                      fontSize="11px"
                      fontWeight="500"
                      color="rgba(0,0,0,1)"
                      lineHeight="13.3125px"
                      textAlign="center"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="94px"
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
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="10px 10px 10px 10px"
              {...getOverrideProps(overrides, "APY39433743")}
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
                {...getOverrideProps(overrides, "039433744")}
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
              {...getOverrideProps(overrides, "TVL39433745")}
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
                {...getOverrideProps(overrides, "039433746")}
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
              {...getOverrideProps(overrides, "Action39433747")}
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
              {...getOverrideProps(overrides, "Action39574060")}
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
                {...getOverrideProps(overrides, "$999,99939574061")}
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
              {...getOverrideProps(overrides, "Action39574062")}
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
                {...getOverrideProps(overrides, "$999,99939574063")}
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
              {...getOverrideProps(overrides, "Action39574064")}
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
    </View>
  );
}
