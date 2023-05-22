/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Loader, Text } from "@aws-amplify/ui-react";
import MyPageList768px from "../components/myPageList/MyPageList768px";
import logo from "./images/logo_new.png";
import { motion } from "framer-motion";
import "../css/Font.css";
import { useSelector } from "react-redux";

export default function MyPageCompo768px(props) {
  const {
    overrides,
    myList,
    getAutoCompoundStatusFunc,
    autoCompoundStatus,
    mypageLpListUp,
    lpTokenValue,
    lpToken,
    firstToken,
    secondToken,
    firstImgToken,
    secondImgToken,
    setLpTokenValue,
    setLpToken,
    setFirstToken,
    setSecondToken,
    setFirstImgToken,
    setSecondImgToken,
    navigate,
    isLoading2,
    setIsLoading2,
    ...rest
  } = props;
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isLoading = useSelector((state) => state.isLoading);
  return (
    <Flex
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      gap="31px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="38px"
      padding="38px 38px 38px 38px"
      {...getOverrideProps(overrides, "MyPageCompo768px")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="100px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="27px"
        padding="21px 21px 21px 21px"
        {...getOverrideProps(overrides, "Frame 17340773365")}
      >
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
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 14240773366")}
        >
          {isHovered ? (
            <Text
              color="#373C38"
              fontFamily="ffProMedium"
              fontSize={{ base: "21px", small: "24px", medium: "35px" }}
              fontWeight="600"
              lineHeight="42.35795211791992px"
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
              children="My Liquidity List"
              {...getOverrideProps(overrides, "My Liquidity List")}
            ></Text>
          ) : (
            <Text
              color="#00A497"
              fontFamily="ffProMedium"
              fontSize={{ base: "21px", small: "24px", medium: "35px" }}
              fontWeight="600"
              lineHeight="42.35795211791992px"
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
              children="My Liquidity List"
              {...getOverrideProps(overrides, "My Liquidity List")}
            ></Text>
          )}
        </Flex>
      </Flex>
      <Flex
        gap="39px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 174")}
      >
        <motion.div
          layout
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            width: "71.4vw",
            height: "unset",
            borderRadius: "23px",
            backgroundColor: "#F7EFE3",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))",
          }}
          whileHover={{
            borderRadius: "55px",
            backgroundColor: "rgba(0,056,071,0.75)",
          }}
        >
          <Flex
            gap="27px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="35px"
            padding="8px 0px 8px 0px"
            {...getOverrideProps(overrides, "Frame 17340782541")}
          >
            <Flex
              gap={{ base: "11px", small: "23px" }}
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="27px"
              padding="21px 34px 21px 34px"
              {...getOverrideProps(overrides, "Frame 16340782542")}
            >
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 14340782549")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="59.5px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Frame 16940782552")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize={{ base: "11px", small: "18px", medium: "25px" }}
                    fontWeight="600"
                    lineHeight="30.25568199157715px"
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
                    children={`Balance : ${
                      lpTokenValue?.slice(0, 7) / 1000000 || 0
                    } ${lpToken || ""} `}
                    {...getOverrideProps(overrides, "Balance : 0")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="2px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf={{ base: "center", small: "stretch" }}
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 144")}
              >
                <Flex
                  gap="5px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="11px 13px 11px 13px"
                  backgroundColor="rgba(255,255,252,1)"
                  {...getOverrideProps(overrides, "Dexname1")}
                >
                  <Image
                    width="28px"
                    height="28px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="35px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    src={firstImgToken || logo}
                    {...getOverrideProps(overrides, "ghrgclzzd 740892945")}
                  ></Image>
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize={{ base: "15px", small: "15px", medium: "19px" }}
                    fontWeight="600"
                    lineHeight="20.573863983154297px"
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
                    children={firstToken || "select list"}
                    {...getOverrideProps(overrides, "DEX Name40892946")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Frame 91")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="33px"
                    fontWeight="600"
                    lineHeight="39.9375px"
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
                    children="+"
                    {...getOverrideProps(overrides, "+")}
                  ></Text>
                </Flex>
                <Flex
                  gap="5px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="25px"
                  padding="11px 13px 11px 13px"
                  backgroundColor="rgba(255,226,0,0.35)"
                  {...getOverrideProps(overrides, "Dexname2")}
                >
                  <Image
                    src={secondImgToken || logo}
                    width="28px"
                    height="28px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="35px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "ghrgclzzd 740892950")}
                  ></Image>
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="17px"
                    fontWeight="600"
                    lineHeight="20.573863983154297px"
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
                    children={secondToken || "select list"}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
        <Flex
          gap="27px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 17140773334")}
        >
          {isLoading2 ? (
            <Flex minHeight="500px" alignItems="center">
              <Loader width="80px" height="80px" />
            </Flex>
          ) : (
            myList?.map((item, idx) => (
              <MyPageList768px
                key={`MyPageList768px-2${idx}`}
                pid={myList[idx]?.lpPidNumber}
                item={item}
                idx={idx}
                setLpToken={setLpToken}
                setLpTokenValue={setLpTokenValue}
                setFirstToken={setFirstToken}
                setSecondToken={setSecondToken}
                setFirstImgToken={setFirstImgToken}
                setSecondImgToken={setSecondImgToken}
                lpTokenValue={lpTokenValue}
                lpToken={lpToken}
                mypageLpListUp={mypageLpListUp}
                getAutoCompoundStatusFunc={getAutoCompoundStatusFunc}
                autoCompoundStatus={autoCompoundStatus}
                navigate={navigate}
                isLoading2={isLoading2}
                setIsLoading2={setIsLoading2}
              />
            ))
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
