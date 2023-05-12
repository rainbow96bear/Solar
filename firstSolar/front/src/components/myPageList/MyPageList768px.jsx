import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Flex, Text } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { DepositButton768px } from "../../ui-components";
import "../../css/Font.css";
import { getAutoCompound } from "../../api";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const MyPageList768px = (props) => {
  const {
    overrides,
    setLpTokenValue,
    setLpToken,
    setFirstToken,
    setSecondToken,
    setFirstImgToken,
    setSecondImgToken,
    LPTokenBalance,
    item,
    autoCompoundStatus,
    pid,
    getAutoCompoundStatusFunc,
    lpTokenValue,
    idx,
    lpToken,
    mypageLpListUp,
    dispatch,
    navigate,
    ...rest
  } = props;
  const [auto, setAuto] = useState();
  const account2 = useSelector((state) => state.account);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const mypageMethod = () => {
    setLpTokenValue(item?.LPTokenBalance);
    setLpToken(item?.name);
    setFirstToken(item?.firstToken);
    setSecondToken(item?.secondToken);
    setFirstImgToken(item?.mainNetLogo);
    setSecondImgToken(item?.platformLogo);
  };
  const checkAuto = async () => {
    const result = await getAutoCompound(account2, item.name);
    setAuto(result);
  };
  useEffect(() => {
    checkAuto();
  }, [autoCompoundStatus]);
  return (
    <>
      <ItemWrap
        transition={{
          duration: 0.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <motion.div
          onClick={() => {
            toggleOpen();
            mypageMethod();
          }}
          layout
          style={{
            width: "70vw",
            height: "unset",
            borderRadius: "25px",
            backgroundColor: "rgba(127,190,171,0.85)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
            overflow: "hidden",
          }}
          whileHover={{
            borderRadius: "39px",
            backgroundColor: "rgba(199,184,151,0.75)",
          }}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="419px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="27px"
            padding={{
              base: "21px 5px 21px 5px",
              small: "21px 34px 21px 34px",
              medium: "21px 34px 21px 34px",
            }}
            {...getOverrideProps(overrides, "Frame 16340773335")}
          >
            <Flex
              gap="0"
              direction="column"
              width="110px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 14240773336")}
            >
              <Flex
                gap="10px"
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
                padding="10px 0px 10px 10px"
                {...getOverrideProps(overrides, "Frame 176")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="29.045454025268555px"
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
                  children="No."
                  {...getOverrideProps(overrides, "No.")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
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
                padding="10px 0px 10px 10px"
                {...getOverrideProps(overrides, "Frame 177")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="29.045454025268555px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="unset"
                  width="67px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="POOL"
                  {...getOverrideProps(overrides, "POOL")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
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
                padding="10px 0px 10px 10px"
                {...getOverrideProps(overrides, "Frame 178")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="29.045454025268555px"
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
                  children="AUTO"
                  {...getOverrideProps(overrides, "APY")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
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
                padding="10px 0px 10px 10px"
                {...getOverrideProps(overrides, "Frame 179")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="29.045454025268555px"
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
                  {...getOverrideProps(overrides, "TVL")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
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
                padding="10px 0px 10px 10px"
                {...getOverrideProps(overrides, "Frame 180")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="29.045454025268555px"
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
                  children="FEE"
                  {...getOverrideProps(overrides, "FEE")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
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
                padding="10px 0px 10px 10px"
                {...getOverrideProps(overrides, "Frame 181")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="29.045454025268555px"
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
                  children={`MY ${item?.oracleId.split("-")[0]}`}
                  {...getOverrideProps(overrides, "DFS")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
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
                padding="10px 0px 10px 10px"
                {...getOverrideProps(overrides, "Frame 182")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="29.045454025268555px"
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
                  children={`MY ${item?.oracleId.split("-")[1]}`}
                  {...getOverrideProps(overrides, "ETH")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="0"
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
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 14340773342")}
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
                style={{
                  borderTop: "1px dashed rgba(0,0,0,1)",
                  borderLeft: "1px dashed rgba(0,0,0,1)",
                  borderRight: "1px dashed rgba(0,0,0,1)",
                  borderTopWidth: "2px",
                  borderLeftWidth: "2px",
                  borderRightWidth: "2px",
                  marginRight: "10px",
                }}
                padding="9px 0px 9px 0px"
                {...getOverrideProps(overrides, "Frame 165")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="center"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={idx + 1}
                  {...getOverrideProps(overrides, "1")}
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
                style={{
                  borderTop: "1px dashed rgba(0,0,0,1)",
                  borderLeft: "1px dashed rgba(0,0,0,1)",
                  borderRight: "1px dashed rgba(0,0,0,1)",
                  borderTopWidth: "2px",
                  borderLeftWidth: "2px",
                  borderRightWidth: "2px",
                  marginRight: "10px",
                }}
                padding="9px 0px 9px 0px"
                {...getOverrideProps(overrides, "Frame 16940773345")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="center"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={item.name}
                  {...getOverrideProps(overrides, "DFS-ETH")}
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
                style={{
                  borderTop: "1px dashed rgba(0,0,0,1)",
                  borderLeft: "1px dashed rgba(0,0,0,1)",
                  borderRight: "1px dashed rgba(0,0,0,1)",
                  borderTopWidth: "2px",
                  borderLeftWidth: "2px",
                  borderRightWidth: "2px",
                  marginRight: "10px",
                }}
                padding="9px 0px 9px 0px"
                {...getOverrideProps(overrides, "Frame 166")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="center"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={auto ? "ON" : "OFF"}
                  {...getOverrideProps(overrides, "040773348")}
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
                style={{
                  borderTop: "1px dashed rgba(0,0,0,1)",
                  borderLeft: "1px dashed rgba(0,0,0,1)",
                  borderRight: "1px dashed rgba(0,0,0,1)",
                  borderTopWidth: "2px",
                  borderLeftWidth: "2px",
                  borderRightWidth: "2px",
                  marginRight: "10px",
                }}
                padding="9px 0px 9px 0px"
                {...getOverrideProps(overrides, "Frame 167")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="center"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`${item?.tvl.slice(0, 10) / 100}`}
                  {...getOverrideProps(overrides, "040773350")}
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
                style={{
                  borderTop: "1px dashed rgba(0,0,0,1)",
                  borderLeft: "1px dashed rgba(0,0,0,1)",
                  borderRight: "1px dashed rgba(0,0,0,1)",
                  borderTopWidth: "2px",
                  borderLeftWidth: "2px",
                  borderRightWidth: "2px",
                  marginRight: "10px",
                }}
                padding="9px 0px 9px 0px"
                {...getOverrideProps(overrides, "Frame 168")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="center"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`${item.fee}%`}
                  {...getOverrideProps(overrides, "0.3%")}
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
                style={{
                  borderTop: "1px dashed rgba(0,0,0,1)",
                  borderLeft: "1px dashed rgba(0,0,0,1)",
                  borderRight: "1px dashed rgba(0,0,0,1)",
                  borderTopWidth: "2px",
                  borderLeftWidth: "2px",
                  borderRightWidth: "2px",
                  marginRight: "10px",
                }}
                padding="9px 0px 9px 0px"
                {...getOverrideProps(overrides, "Frame 170")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="center"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`${
                    Math.floor(item?.DFSTokenBalance.slice(0, 6)) / 100
                  } `}
                  {...getOverrideProps(overrides, "040892928")}
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
                style={{
                  border: "1px dashed rgba(0,0,0,1)",
                  borderWidth: "2px",
                  marginRight: "10px",
                }}
                padding="9px 0px 9px 0px"
                {...getOverrideProps(overrides, "Frame 17140892929")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize={{ base: "0.7rem", small: "18px", medium: "21px" }}
                  fontWeight="600"
                  color="rgba(055,060,056,1)"
                  lineHeight="21.784090042114258px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="center"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`${
                    Math.floor(item?.OtherTokenBalance.slice(0, 6)) / 100
                  } `}
                  {...getOverrideProps(overrides, "040892930")}
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
              <DepositButton768px
                autoState={item?.getAutoCompoundStatus}
                mypageList={item}
                lpTokenValue={lpTokenValue}
                lpToken={lpToken}
                mypageLpListUp={mypageLpListUp}
                pid={pid}
                setLpTokenValue={setLpTokenValue}
                mypageMethod={mypageMethod}
                lpTokenBalance={item?.LPTokenBalance}
                getAutoCompoundStatusFunc={getAutoCompoundStatusFunc}
                auto={auto}
                dispatch={dispatch}
                navigate={navigate}
              />
            </motion.div>
          </SubWrap>
        )}
      </AnimatePresence>
    </>
  );
};

export default MyPageList768px;

const ItemWrap = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 38px;
`;

const SubWrap = styled(motion.div)`
  font-size: 15px;
  display: flex;

  :last-child {
    border-radius: 0 0 20px 20px;
  }
`;
