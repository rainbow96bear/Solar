import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConnectCompo768px, SwapCompo768px } from "../../ui-components";
import { connectThunk } from "../../modules/connect";
import { useDispatch } from "react-redux";
import "../../css/Font.css";

const Poolitem768px = props => {
  const { overrides, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  return (
    <>
      <ItemWrap
        onClick={toggleOpen}
        layout
        transition={{
          duration: 0.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        key={`Poolitem768px-${props}`}
      >
        <motion.div
          style={{
            width: "89vw",
            height: "unset",
            borderRadius: "33px",
            backgroundColor: "rgba(249,250,250,0.75)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
          }}
          whileHover={{ borderRadius: "75px" }}
        >
          <Flex
            gap="40px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="35px"
            padding="29px 48px 29px 30px"
            {...getOverrideProps(overrides, "PoolItem")}
          >
            <Flex
              gap="84px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="87px 27px 26px 27px"
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
                  fontFamily="ffProBook"
                  fontSize="21px"
                  fontWeight="700"
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
                gap="38px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 140")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="141px"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "APY39412809")}
                >
                  <Text
                    fontFamily="ffProBook"
                    fontSize="21px"
                    fontWeight="700"
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
                  width="141px"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "TVL39412816")}
                >
                  <Text
                    fontFamily="ffProBook"
                    fontSize="21px"
                    fontWeight="700"
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
                  width="141px"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Action39412819")}
                >
                  <Text
                    fontFamily="ffProBook"
                    fontSize="21px"
                    fontWeight="700"
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
                  width="141px"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Action39574048")}
                >
                  <Text
                    fontFamily="ffProBook"
                    fontSize="21px"
                    fontWeight="700"
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
                  width="141px"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Action39574050")}
                >
                  <Text
                    fontFamily="ffProBook"
                    fontSize="21px"
                    fontWeight="700"
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
                  width="141px"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Action39574052")}
                >
                  <Text
                    fontFamily="ffProBook"
                    fontSize="21px"
                    fontWeight="700"
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
            </Flex>
            <Flex
              gap="46px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "List")}
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
                padding="0px 10px 0px 10px"
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
                    src={props.item?.mainNetLogo}
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
                    src={props.item?.platformLogo}
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
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 14px 0px 14px"
                  {...getOverrideProps(overrides, "LogoTitle")}
                >
                  <Text
                    fontFamily="ffProBold"
                    fontSize="21px"
                    fontWeight="500"
                    lineHeight="25.414772033691406px"
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
                    children={props.item?.name}
                    overflow="hidden"
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
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      borderRadius="19px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(234,0,50,0.45)"
                      {...getOverrideProps(overrides, "Frame 9")}
                    >
                      <Text
                        fontFamily="ffProExtraLight"
                        fontSize="9px"
                        fontWeight="600"
                        color="rgba(239,239,239,1)"
                        lineHeight="10.892045021057129px"
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
                        children={props?.item?.network}
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
                      backgroundColor="rgba(255,226,0,0.35)"
                      {...getOverrideProps(overrides, "Frame 8")}
                    >
                      <Text
                        fontFamily="ffProExtraLight"
                        fontSize="9px"
                        fontWeight="600"
                        lineHeight="10.892045021057129px"
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
                        children={props?.item?.platformId}
                        {...getOverrideProps(overrides, "STADER BOOST")}
                      ></Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="46px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 141")}
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
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="10px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "APY39422826")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="14px"
                    fontWeight="500"
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
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="10px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "TVL39422829")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="14px"
                    fontWeight="500"
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
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="10px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Action39422832")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="14px"
                    fontWeight="500"
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
                    children={`${
                      Math.round(props.item?.apy * 10000) / 10000
                    } %`}
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
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="10px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Action39574042")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="14px"
                    fontWeight="500"
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
                    children={`$${props.item?.tvl}`}
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
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="10px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Action39574044")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="14px"
                    fontWeight="500"
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
                    children={`$${
                      props.item?.dailyTvlRate == null
                        ? 0
                        : Math.round(props.item?.dailyTvlRate * 10000) / 10000
                    }`}
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
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="10px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Action39574046")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="14px"
                    fontWeight="500"
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
              {document.cookie ? (
                <SwapCompo768px props={props} />
              ) : (
                <ConnectCompo768px
                  onClick={() => {
                    dispatch(connectThunk({ connect: true }));
                  }}
                />
              )}
            </motion.div>
          </SubWrap>
        )}
      </AnimatePresence>
    </>
  );
};

export default Poolitem768px;
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
