import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { ConnectCompo1440px, SwapCompo1440px } from "../../ui-components";
import { getMainPoolList } from "../../api/index.js";

const TestMan = (props, { item }) => {
  console.log("test", props);
  console.log("item", item);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const { overrides, ...rest } = props;
  return (
    <Flex
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
        item={item}
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
              item={item}
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
  );
};

export default TestMan;

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
