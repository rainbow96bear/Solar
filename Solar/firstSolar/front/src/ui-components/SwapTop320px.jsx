/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import "../css/Font.css";

export default function SwapTop320px(props) {
  const {
    overrides,
    oracleiddata,
    balance,
    firstLiquidity,
    secondLiquidity,
    lastTimeStamp,
    reducedNumber,
    dateString,
    ...rest
  } = props;

  return (
    <>
      <Flex
        gap="43px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        borderRadius="35px"
        padding="44px 40px 44px 40px"
        {...getOverrideProps(overrides, "AddLiquidityTop320px")}
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
          {...getOverrideProps(overrides, "Frame 121")}
        >
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
            padding="0px 0px 0px 0px"
            marginBottom="15px"
            {...getOverrideProps(overrides, "Frame 122")}
          >
            <Text
              fontFamily="ffCondExtraLight"
              fontSize="30px"
              fontWeight="600"
              lineHeight="19.363636016845703px"
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
              children="Information"
              color="rgba(234, 0, 50, 0.45)"
              {...getOverrideProps(overrides, "TokenName40162904")}
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
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 122")}
          >
            <Text
              fontFamily="ffProMedium"
              fontSize="16px"
              fontWeight="600"
              lineHeight="19.363636016845703px"
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
              children={
                oracleiddata[0]?.firstToken
                  ? oracleiddata[0]?.firstToken
                  : oracleiddata[0]?.assets[0]
              }
              {...getOverrideProps(overrides, "TokenName40162904")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="25px"
            fontWeight="600"
            lineHeight="30.25568199157715px"
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
            children="-"
            {...getOverrideProps(overrides, "-")}
          ></Text>
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
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 123")}
          >
            <Text
              fontFamily="ffProMedium"
              fontSize="16px"
              fontWeight="600"
              lineHeight="19.363636016845703px"
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
              children={
                oracleiddata[0]?.secondToken
                  ? oracleiddata[0]?.secondToken
                  : oracleiddata[0]?.assets[1]
              }
              {...getOverrideProps(overrides, "TokenName40162908")}
            ></Text>
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
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="15px"
            padding="13px 21px 13px 21px"
            backgroundColor="rgba(234,0,50,0.45)"
            {...getOverrideProps(overrides, "Frame 119")}
          >
            <Text
              fontFamily="ffCondExtraLight"
              fontSize="21px"
              fontWeight="600"
              color="rgba(239,239,239,1)"
              lineHeight="25.414772033691406px"
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
              children={
                oracleiddata[0]?.apy
                  ? `APY :  ${
                      Math.round(oracleiddata[0]?.apy * 10000) / 10000
                    } %`
                  : "APY :  0%"
              }
              {...getOverrideProps(overrides, "99.99%")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="26px"
          direction="column"
          width="240px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          border="1.8px SOLID rgba(255,226,0,0.35)"
          borderRadius="35px"
          padding="23.200000047683716px 48.200000047683716px 23.200000047683716px 48.200000047683716px"
          backgroundImage="linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))"
          {...getOverrideProps(overrides, "Frame 11340162850")}
        >
          <Text
            fontFamily="ffProBlack"
            fontSize="16px"
            fontWeight="700"
            lineHeight="19.363636016845703px"
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
            children="ToTal Tokens Locked"
            {...getOverrideProps(overrides, "ToTal Tokens Locked")}
          ></Text>
          <Flex
            gap="11px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 10940162852")}
          >
            <Flex
              gap="7px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 10840162853")}
            >
              <Image
                width="19px"
                height="19px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="15px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                src={
                  oracleiddata[0]?.mainNetLogo
                    ? oracleiddata[0]?.mainNetLogo
                    : logo
                }
                {...getOverrideProps(overrides, "ghrgclzzd 940162854")}
              ></Image>
              <Text
                fontFamily="ffCondBold"
                fontSize="13px"
                fontWeight="700"
                lineHeight="15.732954025268555px"
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
                children={
                  oracleiddata[0]?.name?.includes("DFS")
                    ? oracleiddata[0]?.firstToken
                    : oracleiddata[0]?.network
                }
                {...getOverrideProps(overrides, "TokenName40162855")}
              ></Text>
            </Flex>
            <Text
              fontFamily="ffCondExtraLight"
              fontSize="13px"
              fontWeight="700"
              lineHeight="16.94318199157715px"
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
              children={
                !isNaN(oracleiddata[0]?.firstTokenBalance)
                  ? oracleiddata[0]?.name?.includes("DFS")
                    ? `${
                        (parseInt(
                          oracleiddata[0]?.firstTokenBalance / 10 ** 18
                        ) *
                          100000) /
                        100000
                      } K`
                    : `${
                        parseInt(oracleiddata[0]?.firstTokenBalance * 1000) /
                        1000
                      } K`
                  : "0 K"
              }
              {...getOverrideProps(overrides, "99,99M40162856")}
            ></Text>
          </Flex>
          <Flex
            gap="11px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 11040162881")}
          >
            <Flex
              gap="7px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 10840162882")}
            >
              <Image
                width="19px"
                height="19px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="15px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                src={
                  oracleiddata[0]?.platformLogo
                    ? oracleiddata[0]?.platformLogo
                    : logo
                }
                {...getOverrideProps(overrides, "ghrgclzzd 940162883")}
              ></Image>
              <Text
                fontFamily="ffCondBold"
                fontSize="13px"
                fontWeight="700"
                lineHeight="15.732954025268555px"
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
                children={
                  oracleiddata[0]?.secondToken
                    ? oracleiddata[0]?.secondToken
                    : oracleiddata[0]?.platformId
                }
                {...getOverrideProps(overrides, "TokenName40162884")}
              ></Text>
            </Flex>
            <Text
              fontFamily="ffCondExtraLight"
              fontSize="13px"
              fontWeight="700"
              lineHeight="16.94318199157715px"
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
              children={
                !isNaN(oracleiddata[0]?.secondTokenBalance)
                  ? oracleiddata[0]?.name?.includes("DFS")
                    ? `${
                        (parseInt(
                          oracleiddata[0]?.secondTokenBalance / 10 ** 18
                        ) *
                          100000) /
                        100000
                      } K`
                    : `${
                        parseInt(oracleiddata[0]?.secondTokenBalance * 1000) /
                        1000
                      } K`
                  : "0 K"
              }
              {...getOverrideProps(overrides, "99,99M40162885")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="27px"
          direction="column"
          width="240px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          border="1.8px SOLID rgba(0,136,153,0.59)"
          borderRadius="35px"
          padding="23.200000047683716px 48.200000047683716px 23.200000047683716px 48.200000047683716px"
          backgroundImage="linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))"
          {...getOverrideProps(overrides, "Frame 11440162862")}
        >
          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 116")}
          >
            <Text
              fontFamily="ffProBook"
              fontSize="14px"
              fontWeight="700"
              lineHeight="16.94318199157715px"
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
              children="TVL"
              {...getOverrideProps(overrides, "TVL")}
            ></Text>

            <Flex
              gap="172px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 11040162867")}
            >
              <Text
                fontFamily="ffCondExtraLight"
                fontSize="13px"
                fontWeight="700"
                color="rgba(234,0,50,0.45)"
                lineHeight="15.732954025268555px"
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
                children={
                  oracleiddata[0]?.tvl
                    ? `${oracleiddata[0]?.tvl.slice(0, 10) / 100} `
                    : 0
                }
                {...getOverrideProps(overrides, "16.82%")}
              ></Text>
            </Flex>
          </Flex>

          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 117")}
          >
            <Flex
              gap="172px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 112")}
            >
              <Text
                fontFamily="ffProBook"
                fontSize="14px"
                fontWeight="700"
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
                children="Daily TVl Rate"
                {...getOverrideProps(overrides, "Volume 24H")}
              ></Text>
            </Flex>

            <Flex
              gap="172px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 11340162874")}
            >
              <Text
                fontFamily="ffCondExtraLight"
                fontSize="13px"
                fontWeight="700"
                color="rgba(234,0,50,0.45)"
                lineHeight="15.732954025268555px"
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
                children={
                  oracleiddata[0]?.dailyTvlRate
                    ? `${
                        Math.round(oracleiddata[0]?.dailyTvlRate * 10000) /
                        10000
                      } %`
                    : 0
                }
                {...getOverrideProps(overrides, "262.40%")}
              ></Text>
            </Flex>
          </Flex>

          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 117")}
          >
            <Flex
              gap="172px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 112")}
            >
              <Text
                fontFamily="ffProBook"
                fontSize="14px"
                fontWeight="700"
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
                children="Last Harvest"
                {...getOverrideProps(overrides, "Volume 24H")}
              ></Text>
            </Flex>

            <Flex
              gap="172px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 11340162874")}
            >
              <Text
                fontFamily="ffCondExtraLight"
                fontSize="13px"
                fontWeight="700"
                color="rgba(234,0,50,0.45)"
                lineHeight="15.732954025268555px"
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
                children={
                  oracleiddata[0]?.lastHarvest ? dateString : "불러오는 중"
                }
                {...getOverrideProps(overrides, "262.40%")}
              ></Text>
            </Flex>
          </Flex>

          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 117")}
          >
            <Flex
              gap="172px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 112")}
            >
              <Text
                fontFamily="ffProBook"
                fontSize="14px"
                fontWeight="700"
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
                children="Daily TVl Rate"
                {...getOverrideProps(overrides, "Volume 24H")}
              ></Text>
            </Flex>

            <Flex
              gap="172px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 11340162874")}
            >
              <Text
                fontFamily="ffCondExtraLight"
                fontSize="13px"
                fontWeight="700"
                color="rgba(234,0,50,0.45)"
                lineHeight="15.732954025268555px"
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
                children={oracleiddata[0]?.fee ? `${oracleiddata[0]?.fee}%` : 0}
                {...getOverrideProps(overrides, "262.40%")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
