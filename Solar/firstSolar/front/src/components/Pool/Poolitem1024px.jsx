import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ConnectCompo1440px, SwapCompo1440px } from "../../ui-components";

import { useDispatch, useSelector } from "react-redux";
import "../../css/Font.css";
import { useAccount } from "wagmi";

const Poolitem1024 = (props) => {
  const { overrides, currentPagePoolList, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isDFS, setIsDFS] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const address2 = useSelector((state) => state.account);
  const { address } = useAccount();

  const addressResult = address || address2;
  const dispatch = useDispatch();

  useEffect(() => {
    setIsDFS(props?.item?.oracleId.includes("DFS"));
  }, [currentPagePoolList]);

  return (
    <>
      <ItemWrap
        transition={{
          duration: 0.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        key={`Poolitem1024px-${props?.idx}`}
      >
        <motion.div
          onClick={toggleOpen}
          layout
          style={{
            zIndex: "1",
            width: "89vw",
            height: "unset",
            borderRadius: "33px",
            backgroundColor: !isDFS && "rgba(249, 250, 250, 1)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              isDFS &&
              "linear-gradient(90deg,rgba(252,089,0,0.33) 0%,rgba(246,247,248,0.15) 20%)",
          }}
          whileHover={{
            borderRadius: "75px",
            backgroundColor: "rgba(247,239,227,0.75)",
          }}
        >
          <Flex
            gap="29px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="18px"
            padding="7px 18px 7px 18px"
            {...getOverrideProps(overrides, "List")}
          >
            <Flex
              gap="3px"
              direction="column"
              width="252px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="12px"
              padding="14px 24px 14px 24px"
              {...getOverrideProps(overrides, "Frame 11")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="48px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="5px 5px 5px 5px"
                {...getOverrideProps(overrides, "PoolImg")}
              >
                <Image
                  src={props?.item?.mainNetLogo}
                  width="28px"
                  height="28px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="15px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "unsplash:AYOloXgqjzo")}
                ></Image>
                <Image
                  src={props?.item?.platformLogo}
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
                  {...getOverrideProps(
                    overrides,
                    "unsplash:em1OiomfG3g39913040"
                  )}
                ></Image>
              </Flex>
              <Flex
                gap="13px"
                direction="column"
                width="unset"
                height="88px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 0px 10px 0px"
                {...getOverrideProps(overrides, "LogoTitle")}
              >
                <Text
                  fontFamily="ffProBold"
                  fontSize="16px"
                  fontWeight="500"
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
                  children={props?.item?.name}
                  {...getOverrideProps(overrides, "Overnight Pulse Act ll")}
                ></Text>
                <Flex
                  gap="7px"
                  direction="row"
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
                    alignSelf="stretch"
                    position="relative"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="19px"
                    padding="10px 10px 10px 10px"
                    backgroundColor="rgba(234,0,50,0.55)"
                    {...getOverrideProps(overrides, "Frame 9")}
                  >
                    <Text
                      fontFamily="ffProExtraLight"
                      fontSize="13px"
                      fontWeight="500"
                      color="rgba(239,239,239,1)"
                      lineHeight="9.681818008422852px"
                      textAlign="center"
                      display="flex"
                      direction="column"
                      justifyContent="center"
                      width="unset"
                      height="15px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={props?.item?.network}
                      {...getOverrideProps(overrides, "VELOCIMETER")}
                    ></Text>
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
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="19px"
                    padding="10px 0px 10px 0px"
                    backgroundColor="rgba(255,226,0,0.35)"
                    {...getOverrideProps(overrides, "Frame 8")}
                  >
                    <Text
                      fontFamily="ffProExtraLight"
                      fontSize="13px"
                      fontWeight="500"
                      lineHeight="9.681818008422852px"
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
                      children={props?.item?.platformId}
                      {...getOverrideProps(overrides, "STADER BOOST")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="7px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 85")}
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
                borderRadius="11px"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 1539913049")}
              >
                <Text
                  fontFamily="ffCompExtraLight"
                  fontSize="19px"
                  fontWeight="900"
                  lineHeight="14.522727012634277px"
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
                  children="-"
                  {...getOverrideProps(overrides, "039913050")}
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
                borderRadius="11px"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 18")}
              >
                <Text
                  fontFamily="ffCompExtraLight"
                  fontSize="19px"
                  fontWeight="900"
                  lineHeight="14.522727012634277px"
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
                  children="-"
                  {...getOverrideProps(overrides, "039913052")}
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
                borderRadius="11px"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 1939913053")}
              >
                <Text
                  fontFamily="ffCompExtraLight"
                  fontSize="px"
                  fontWeight="500"
                  lineHeight="14.522727012634277px"
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
                  children={`${Math.round(props?.item?.apy * 10000) / 10000} %`}
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
                alignSelf="stretch"
                position="relative"
                borderRadius="11px"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 16")}
              >
                <Text
                  fontFamily="ffCompExtraLight"
                  fontSize="19px"
                  fontWeight="500"
                  lineHeight="10.892045021057129px"
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
                    props?.item?.name?.includes("DFS")
                      ? parseInt((props?.item?.tvl / 10 ** 18) * 10000) /
                          10000 || 0
                      : props?.item?.tvl
                  }`}
                  {...getOverrideProps(overrides, "$999,99939913056")}
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
                borderRadius="11px"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 2039913057")}
              >
                <Text
                  fontFamily="ffCompExtraLight"
                  fontSize="19px"
                  fontWeight="500"
                  lineHeight="10.892045021057129px"
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
                    props?.item?.dailyTvlRate == null ||
                    props?.item?.dailyTvlRate == undefined
                      ? 0
                      : Math.round(props?.item?.dailyTvlRate * 10000) / 10000
                  }`}
                  {...getOverrideProps(overrides, "$999,99939913058")}
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
                borderRadius="11px"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 17")}
              >
                <Text
                  fontFamily="ffCompExtraLight"
                  fontSize="19px"
                  fontWeight="500"
                  lineHeight="10.892045021057129px"
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
              {addressResult ? (
                <SwapCompo1440px props={props} />
              ) : (
                <ConnectCompo1440px />
              )}
            </motion.div>
          </SubWrap>
        )}
      </AnimatePresence>
    </>
  );
};

export default Poolitem1024;
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
