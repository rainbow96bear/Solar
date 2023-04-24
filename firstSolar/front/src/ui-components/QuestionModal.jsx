/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, SearchField, Text, Icon } from "@aws-amplify/ui-react";

export default function QuestionModal(props) {
  // console.log("QuestionModal", props);
  const { overrides, setquestionmark, ...rest } = props;

  return (
    <ModalCover
      onClick={e => {
        if (e.target !== e.currentTarget) return;
      }}
    >
      <Flex
        gap="31px"
        direction="column"
        width="650px"
        height="unset"
        justifyContent="flex-end"
        alignItems="flex-end"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="55px"
        padding="53px 58px 53px 58px"
        backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,1))"
        {...getOverrideProps(overrides, "SelTokken768px")}
        {...rest}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          className="cursorPointer"
          onClick={() => {
            props.setquestionmark(2);
          }}
          {...getOverrideProps(overrides, "XIcon")}
        >
          <Icon
            width="20px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
            paths={[
              {
                d: "M3.59236 0L0 3.59236L1.8344 5.42675L6.36943 10.0382L1.8344 14.5732L0 16.3312L3.59236 20L5.42675 18.1656L10.0382 13.5541L14.5732 18.1656L16.3312 20L20 16.3312L18.1656 14.5732L13.5541 10.0382L18.1656 5.42675L20 3.59236L16.3312 1.13144e-15L14.5732 1.8344L10.0382 6.36943L5.42675 1.8344L3.59236 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="35px 9px 35px 9px"
          {...getOverrideProps(overrides, "Frame 131")}
        >
          <Text
            fontFamily="Inter"
            fontSize="38px"
            fontWeight="700"
            lineHeight="57px"
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
            children="Select a Token"
            {...getOverrideProps(overrides, "Select a Token")}
          ></Text>
        </Flex>
        <SearchField
          width="unset"
          height="unset"
          placeholder="Search name or Paste address"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Flex
          gap="9px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 136")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 132")}
          >
            <Text
              fontFamily="Inter"
              fontSize="18px"
              fontWeight="700"
              lineHeight="27px"
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
              children="Common bases"
              {...getOverrideProps(overrides, "Common bases")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 133")}
          >
            <Flex
              gap="8px"
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
              padding="10px 12px 10px 12px"
              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
              {...getOverrideProps(overrides, "Dexname140432841")}
            >
              <Image
                width="25px"
                height="25px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 740432842")}
              ></Image>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                lineHeight="24.204544067382812px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="16px"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="USDT"
                {...getOverrideProps(overrides, "USDT40432843")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
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
              padding="10px 12px 10px 12px"
              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
              {...getOverrideProps(overrides, "Dexname140432854")}
            >
              <Image
                width="25px"
                height="25px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 740432855")}
              ></Image>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                lineHeight="24.204544067382812px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="16px"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="USDT"
                {...getOverrideProps(overrides, "USDT40432856")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
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
              padding="10px 12px 10px 12px"
              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
              {...getOverrideProps(overrides, "Dexname140432857")}
            >
              <Image
                width="25px"
                height="25px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 740432858")}
              ></Image>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                lineHeight="24.204544067382812px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="16px"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="USDT"
                {...getOverrideProps(overrides, "USDT40432859")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
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
              padding="10px 12px 10px 12px"
              backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
              {...getOverrideProps(overrides, "Dexname140432860")}
            >
              <Image
                width="25px"
                height="25px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="35px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "ghrgclzzd 740432861")}
              ></Image>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                lineHeight="24.204544067382812px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="16px"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="USDT"
                {...getOverrideProps(overrides, "USDT40432862")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,226,0,0.35)"
          {...getOverrideProps(overrides, "MapList40472817")}
        >
          <Flex
            gap="25px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="25px"
            padding="11px 13px 11px 13px"
            {...getOverrideProps(overrides, "Dexname140472818")}
          >
            <Image
              width="45px"
              height="45px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              borderRadius="35px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "ghrgclzzd 740472819")}
            ></Image>
            <Flex
              gap="8px"
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
              {...getOverrideProps(overrides, "Frame 13540472820")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                lineHeight="24.204544067382812px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="16px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="USDT"
                {...getOverrideProps(overrides, "USDT40472821")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="15px"
                fontWeight="700"
                lineHeight="18.15340805053711px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="16px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Binance Chain Native Token"
                {...getOverrideProps(
                  overrides,
                  "Binance Chain Native Token40472822"
                )}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="25px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="25px"
            padding="11px 13px 11px 13px"
            {...getOverrideProps(overrides, "Dexname140472823")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              lineHeight="24.204544067382812px"
              textAlign="right"
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
              {...getOverrideProps(overrides, "040472824")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,226,0,0.35)"
          {...getOverrideProps(overrides, "MapList40493192")}
        >
          <Flex
            gap="25px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="25px"
            padding="11px 13px 11px 13px"
            {...getOverrideProps(overrides, "Dexname140493193")}
          >
            <Image
              width="45px"
              height="45px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              borderRadius="35px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "ghrgclzzd 740493194")}
            ></Image>
            <Flex
              gap="8px"
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
              {...getOverrideProps(overrides, "Frame 13540493195")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                lineHeight="24.204544067382812px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="16px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="USDT"
                {...getOverrideProps(overrides, "USDT40493196")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="15px"
                fontWeight="700"
                lineHeight="18.15340805053711px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="16px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Binance Chain Native Token"
                {...getOverrideProps(
                  overrides,
                  "Binance Chain Native Token40493197"
                )}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="25px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="25px"
            padding="11px 13px 11px 13px"
            {...getOverrideProps(overrides, "Dexname140493198")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              lineHeight="24.204544067382812px"
              textAlign="right"
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
              {...getOverrideProps(overrides, "040493199")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,226,0,0.35)"
          {...getOverrideProps(overrides, "MapList40632581")}
        >
          <Flex
            gap="25px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="25px"
            padding="11px 13px 11px 13px"
            {...getOverrideProps(overrides, "Dexname140632582")}
          >
            <Image
              width="45px"
              height="45px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              borderRadius="35px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "ghrgclzzd 740632583")}
            ></Image>
            <Flex
              gap="8px"
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
              {...getOverrideProps(overrides, "Frame 13540632584")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                lineHeight="24.204544067382812px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="16px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="USDT"
                {...getOverrideProps(overrides, "USDT40632585")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="15px"
                fontWeight="700"
                lineHeight="18.15340805053711px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="16px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Binance Chain Native Token"
                {...getOverrideProps(
                  overrides,
                  "Binance Chain Native Token40632586"
                )}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="25px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="25px"
            padding="11px 13px 11px 13px"
            {...getOverrideProps(overrides, "Dexname140632587")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              lineHeight="24.204544067382812px"
              textAlign="right"
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
              {...getOverrideProps(overrides, "040632588")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </ModalCover>
  );
}

const ModalCover = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  // bottom: 0%;
  justify-content: center;
  align-items: center;
  z-index: 88;

  .ConnectModal {
    display: flex;
    justify-content: center;

    .cursorPointer {
      cursor: pointer;
    }
  }
  .Web3Button {
    button {
      background-color: orange !import;
    }
  }
`;
