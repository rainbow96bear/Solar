import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConnectCompo320px, SwapCompo320px } from "../../ui-components";
import { setConnect } from "../../modules/connect";
import { useDispatch } from "react-redux";
import "../../css/Font.css";
import { setIsLoading } from "../../modules/isLoading";

const Poolitem320px = (props) => {
  const { overrides, currentPagePoolList, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isDFS, setIsDFS] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props?.last == true) dispatch(setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsDFS(props?.item?.oracleId.includes("DFS"));
  }, [currentPagePoolList]);

  return (
    <>
      <ItemWrap
        onClick={toggleOpen}
        layout
        transition={{
          duration: 0.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        key={`Poolitem320px-${props}`}
      >
        <motion.div
          style={{
            width: "89vw",
            height: "unset",
            borderRadius: "33px",
            backgroundColor: !isDFS && "rgba(249,250,250,0.75)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              isDFS &&
              "linear-gradient(180deg,rgba(252,089,0,0.33) 0%,rgba(246,247,248,0.15) 20%)",
          }}
          whileHover={{
            borderRadius: "75px",
            backgroundColor: "#F6F7F8",
          }}
        >
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
            borderRadius="15px"
            padding="0px 34px 23px 14px"
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
                <Flex
                  marginTop="35px"
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Frame 84")}
                >
                  <Text
                    fontFamily="ffProMedium"
                    fontSize="0.7rem"
                    fontWeight="700"
                    lineHeight="25.414772033691406px"
                    textAlign="left"
                    display="flex"
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
                  fontFamily="ffProMedium"
                  fontSize="0.7rem"
                  fontWeight="700"
                  lineHeight="25.414772033691406px"
                  textAlign="left"
                  display="flex"
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
                  fontFamily="ffProMedium"
                  fontSize="0.7rem"
                  fontWeight="700"
                  lineHeight="25.414772033691406px"
                  textAlign="left"
                  display="flex"
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
                  fontFamily="ffProMedium"
                  fontSize="0.7rem"
                  fontWeight="700"
                  lineHeight="25.414772033691406px"
                  textAlign="left"
                  display="flex"
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
                  fontFamily="ffProMedium"
                  fontSize="0.7rem"
                  fontWeight="700"
                  lineHeight="25.414772033691406px"
                  textAlign="left"
                  display="flex"
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
              gap="34px"
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
                  gap="5px"
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
                    width="30px"
                    height="30px"
                    display="flex"
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
                    src={props.item?.platformLogo}
                    width="38px"
                    height="38px"
                    display="flex"
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
                  gap="10px"
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
                    children={props.item?.name}
                    fontFamily="ffProMedium"
                    fontSize="11px"
                    fontWeight="700"
                    lineHeight="13.3125px"
                    textAlign="center"
                    display="flex"
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
                      backgroundColor="rgba(234,0,50,0.45)"
                      {...getOverrideProps(overrides, "Frame 9")}
                    >
                      <Text
                        fontFamily="ffProLight"
                        fontSize="11px"
                        fontWeight="700"
                        color="rgba(239,239,239,1)"
                        lineHeight="10.892045021057129px"
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
                      backgroundColor="rgba(0,136,153,0.59)"
                      {...getOverrideProps(overrides, "Frame 8")}
                    >
                      <Text
                        fontFamily="ffProLight"
                        fontSize="11px"
                        fontWeight="700"
                        color="rgba(239,239,239,1)"
                        lineHeight="10.892045021057129px"
                        textAlign="center"
                        display="flex"
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
                backgroundImage="linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))"
                {...getOverrideProps(overrides, "Action39433747")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="10px"
                  fontWeight="700"
                  lineHeight="12.102272033691406px"
                  textAlign="left"
                  display="flex"
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
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="10px"
                padding="10px 10px 10px 10px"
                backgroundImage="linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))"
                {...getOverrideProps(overrides, "Action39574060")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="10px"
                  fontWeight="700"
                  lineHeight="12.102272033691406px"
                  textAlign="left"
                  display="flex"
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
                    props?.item?.name?.includes("DFS")
                      ? parseInt((props?.item?.tvl / 10 ** 18) * 10000) /
                          10000 || 0
                      : props?.item?.tvl
                  }`}
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
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="10px"
                padding="10px 10px 10px 10px"
                backgroundImage="linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))"
                {...getOverrideProps(overrides, "Action39574062")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="10px"
                  fontWeight="700"
                  lineHeight="12.102272033691406px"
                  textAlign="left"
                  display="flex"
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
                    props.item?.dailyTvlRate == null
                      ? 0
                      : Math.round(props.item?.dailyTvlRate * 10000) / 10000
                  }`}
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
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="10px"
                padding="10px 10px 10px 10px"
                backgroundImage="linear-gradient(-7deg, #FDFCF5, rgba(246,247,248,0.15))"
                {...getOverrideProps(overrides, "Action39574064")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="10px"
                  fontWeight="700"
                  lineHeight="12.102272033691406px"
                  textAlign="left"
                  display="flex"
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
                <SwapCompo320px props={props} />
              ) : (
                <ConnectCompo320px
                  onClick={() => {
                    dispatch(setConnect(true));
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

export default Poolitem320px;

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
