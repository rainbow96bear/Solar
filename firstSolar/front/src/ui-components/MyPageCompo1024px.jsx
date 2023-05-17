/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Loader, Text } from "@aws-amplify/ui-react";
import MyPageList1024px from "../components/myPageList/MyPageList1024px";
import logo from "./images/logo_new.png";
import { motion } from "framer-motion";
import "../css/Font.css";
import { useSelector } from "react-redux";
import LoadingCompo from "./LoadingCompo";

export default function MyPageCompo1024px(props) {
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

  const isLoading = useSelector((state) => state.isLoading);
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Flex
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      gap="31px"
      direction="column"
      width="83vw"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="35px"
      padding="38px 33px 38px 33px"
      {...getOverrideProps(overrides, "MyPageCompo1024px")}
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
        {...getOverrideProps(overrides, "Frame 16640762656")}
      >
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
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 14240762657")}
        >
          {isHovered ? (
            <Text
              color="#373C38"
              fontFamily="ffProBlack"
              fontSize="43px"
              fontWeight="600"
              lineHeight="52.039772033691406px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="58px"
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
              fontFamily="ffProBlack"
              fontSize="43px"
              fontWeight="600"
              lineHeight="52.039772033691406px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="58px"
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
        gap="27px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="center"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 17040762674")}
      >
        <motion.div
          layout
          style={{
            width: "78.4vw",
            height: "unset",
            borderRadius: "33px",
            backgroundColor: "#F7EFE3",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))",
          }}
          whileHover={{
            borderRadius: "75px",
            backgroundColor: "rgba(0,056,071,0.75)",
          }}
        >
          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="27px"
            padding="23px 34px 23px 34px"
            {...getOverrideProps(overrides, "Frame 16540762633")}
          >
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 9140892932")}
            >
              <Flex
                gap="5px"
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
                  {...getOverrideProps(overrides, "ghrgclzzd 740892934")}
                ></Image>
                <Text
                  fontFamily="ffProMedium"
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
                  children={firstToken || "select list"}
                  {...getOverrideProps(overrides, "DEX Name40892935")}
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
                {...getOverrideProps(overrides, "Frame 9140892937")}
              >
                <Text
                  fontFamily="ffProLight"
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
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="25px"
                padding="11px 13px 11px 13px"
                backgroundColor="rgba(0,136,153,0.59)"
                {...getOverrideProps(overrides, "Dexname2")}
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
                  src={secondImgToken || logo}
                  {...getOverrideProps(overrides, "ghrgclzzd 740892940")}
                ></Image>
                <Text
                  fontFamily="ffProMedium"
                  fontSize="17px"
                  fontWeight="600"
                  color="rgba(239,239,239,1)"
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
                  {...getOverrideProps(overrides, "DEX Name40892941")}
                ></Text>
              </Flex>
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
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 14340822639")}
            >
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-end"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 175")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="24px"
                  fontWeight="600"
                  lineHeight="29.045454025268555px"
                  textAlign="right"
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
                  children={`Balance : ${
                    parseInt((lpTokenValue / 10 ** 18) * 10000) / 10000 || 0
                  } ${lpToken || ""} `}
                  {...getOverrideProps(overrides, "Balance : 0")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
        {isLoading2 ? (
          <Flex minHeight="500px" alignItems="center">
            <Loader width="80px" height="80px" />
          </Flex>
        ) : (
          myList?.map((item, idx) => (
            <MyPageList1024px
              key={`MyPageList1024px-2${idx}`}
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
  );
}
