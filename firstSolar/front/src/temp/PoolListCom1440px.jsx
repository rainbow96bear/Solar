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

export default function PoolListCom1440px(props) {
  const test = 500;
  const [value, setValue] = React.useState([""]);
  const [Dexvalue, setDexValue] = React.useState([""]);
  const paginationProps = usePagination({
    totalPages: `${test}`,
    currentPage: 5,
    siblingCount: 2,
  });

  const { overrides, ...rest } = props;
  return (
    <Flex
      display={{
        base: "none",
        small: "none",
        medium: "none",
        large: "flex",
        xl: "flex",
      }}
      gap="52px"
      direction="column"
      width="1200px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PoolListCom1440px")}
      {...rest}
    >
      <Flex
        gap="43px"
        direction="column"
        width="unset"
        height="144px"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Networks39313311")}
      >
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
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
        <ToggleButtonGroup
          className="mycompo"
          value={value}
          onChange={value => setValue(value)}
          isExclusive={true}
          isSelectionRequired
          gap="71px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
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
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
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
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
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
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
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
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
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
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>
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
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
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
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
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
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
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
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>
          <ToggleButton
            value="w99"
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
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>
        </ToggleButtonGroup>
      </Flex>
      <Flex
        gap="43px"
        direction="column"
        width="unset"
        height="144px"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Networks39563029")}
      >
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
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
        <ToggleButtonGroup
          className="mycompo"
          value={Dexvalue}
          onChange={Dexvalue => setDexValue(Dexvalue)}
          isExclusive={true}
          isSelectionRequired
          gap="71px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
        >
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
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>

          <ToggleButton
            value="w11"
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
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>

          <ToggleButton
            value="w12"
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
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>

          <ToggleButton
            value="w13"
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
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>
          <ToggleButton
            value="w14"
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
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>
          <ToggleButton
            value="w15"
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
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>
          <ToggleButton
            value="w16"
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
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>
          <ToggleButton
            value="w17"
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
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>
          <ToggleButton
            value="w18"
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
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>
          <ToggleButton
            value="w19"
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
            borderRadius="5px"
            padding="10px 10px 10px 10px"
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
              {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313309")}
            ></Image>
          </ToggleButton>
        </ToggleButtonGroup>
      </Flex>
      <Flex
        gap="37px"
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
        <Flex
          gap="15px"
          direction="row"
          width="unset"
          height="45px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
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
              fontWeight="500"
              color="rgba(0,0,0,1)"
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
              fontSize="18px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="21.784090042114258px"
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
              fontSize="18px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="21.784090042114258px"
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
              fontSize="18px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="21.784090042114258px"
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
              fontSize="18px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="21.784090042114258px"
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
              fontSize="18px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="21.784090042114258px"
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
              fontSize="18px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="21.784090042114258px"
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
        <Flex
          gap="7px"
          direction="row"
          width="unset"
          height="108px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
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
                {...getOverrideProps(overrides, "unsplash:AYOloXgqjzo39313162")}
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
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39313163")}
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
                    fontWeight="500"
                    color="rgba(0,0,0,1)"
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
              color="rgba(0,0,0,1)"
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
              children="0"
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
              color="rgba(0,0,0,1)"
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
              children="0"
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
            {...getOverrideProps(overrides, "Frame 1939573872")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
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
              color="rgba(0,0,0,1)"
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
              children="$999,999"
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
            {...getOverrideProps(overrides, "Frame 2039574040")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
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
              children="$999,999"
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
              color="rgba(0,0,0,1)"
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
        <Pagination {...paginationProps} />
      </Flex>
    </Flex>
  );
}
