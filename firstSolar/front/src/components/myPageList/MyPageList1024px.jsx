import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Flex, Text } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { DepositButton1024px } from "../../ui-components";
import "../../css/Font.css";
import { getAutoCompound } from "../../api";
import { useEffect, useState } from "react";

const MyPageList1024px = (props) => {
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
            width: "78.4vw",
            height: "unset",
            borderRadius: "33px",
            backgroundColor: "rgba(249,251,250,0.85)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
          }}
          whileHover={{
            borderRadius: "75px",
            backgroundColor: "rgba(0,049,073,0.85)",
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
            padding="27px 34px 27px 34px"
            {...getOverrideProps(overrides, "Frame 163")}
          >
            <Flex
              style={{ borderBottom: "1px dashed black", borderWidth: "2px" }}
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
              {...getOverrideProps(overrides, "Frame 14240692545")}
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
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 183")}
              >
                <Text
                  fontFamily="ffProLight"
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="21.784090042114258px"
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
                  children="No."
                  {...getOverrideProps(overrides, "No.")}
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
                {...getOverrideProps(overrides, "Frame 184")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="21.784090042114258px"
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
                  children="POOL"
                  {...getOverrideProps(overrides, "POOL")}
                ></Text>
              </Flex>
              <Flex
                gap="5px"
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
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 185")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="21.784090042114258px"
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
                  children="Auto"
                  {...getOverrideProps(overrides, "APY")}
                ></Text>
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="16px"
                  fontWeight="600"
                  lineHeight="21.784090042114258px"
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
                  children="Compounding"
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
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 186")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="21.784090042114258px"
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
                {...getOverrideProps(overrides, "Frame 187")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="21.784090042114258px"
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
                  children="FEE"
                  {...getOverrideProps(overrides, "FEE")}
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
                {...getOverrideProps(overrides, "Frame 188")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="21.784090042114258px"
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
                  children={`MY ${item?.oracleId.split("-")[0]}`}
                  {...getOverrideProps(overrides, "DFS")}
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
                {...getOverrideProps(overrides, "Frame 189")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="21.784090042114258px"
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
                  children={`MY ${item?.oracleId.split("-")[1]}`}
                  {...getOverrideProps(overrides, "ETH")}
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
              {...getOverrideProps(overrides, "Frame 14340702569")}
            >
              <Flex
                style={{ borderRight: "1px dashed black", borderWidth: "2px" }}
                gap="10px"
                direction="row"
                width="unset"
                height="52px"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="9px 9px 9px 9px"
                {...getOverrideProps(overrides, "Frame 16540712596")}
              >
                <Text
                  fontFamily="ffProLight"
                  fontSize="20px"
                  fontWeight="600"
                  lineHeight="24.204544067382812px"
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
                  children={idx + 1}
                  {...getOverrideProps(overrides, "1")}
                ></Text>
              </Flex>
              <Flex
                style={{ borderRight: "1px dashed black", borderWidth: "2px" }}
                gap="10px"
                direction="row"
                width="unset"
                height="52px"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="9px 9px 9px 9px"
                {...getOverrideProps(overrides, "Frame 169")}
              >
                <Text
                  fontFamily="ffProLight"
                  fontSize="16px"
                  fontWeight="600"
                  lineHeight="24.204544067382812px"
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
                  children={item.name}
                  {...getOverrideProps(overrides, "DFS-ETH")}
                ></Text>
              </Flex>
              <Flex
                style={{ borderRight: "1px dashed black", borderWidth: "2px" }}
                gap="10px"
                direction="row"
                width="unset"
                height="52px"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 16640712597")}
              >
                <Text
                  fontFamily="ffProLight"
                  fontSize="16px"
                  fontWeight="600"
                  lineHeight="24.204544067382812px"
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
                  children={auto ? "ON" : "OFF"}
                  {...getOverrideProps(overrides, "040702571")}
                ></Text>
              </Flex>
              <Flex
                style={{ borderRight: "1px dashed black", borderWidth: "2px" }}
                gap="10px"
                direction="row"
                width="unset"
                height="52px"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="9px 9px 9px 9px"
                {...getOverrideProps(overrides, "Frame 167")}
              >
                <Text
                  fontFamily="ffProLight"
                  fontSize="16px"
                  fontWeight="600"
                  lineHeight="24.204544067382812px"
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
                  children={`${item?.tvl.slice(0, 10) / 100}`}
                  {...getOverrideProps(overrides, "040702572")}
                ></Text>
              </Flex>
              <Flex
                style={{ borderRight: "1px dashed black", borderWidth: "2px" }}
                gap="10px"
                direction="row"
                width="unset"
                height="52px"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="9px 9px 9px 9px"
                {...getOverrideProps(overrides, "Frame 168")}
              >
                <Text
                  fontFamily="ffProLight"
                  fontSize="16px"
                  fontWeight="600"
                  lineHeight="24.204544067382812px"
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
                  children={`${item.fee}%`}
                  {...getOverrideProps(overrides, "0.3%")}
                ></Text>
              </Flex>
              <Flex
                style={{ borderRight: "1px dashed black", borderWidth: "2px" }}
                gap="10px"
                direction="row"
                width="unset"
                height="52px"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="9px 9px 9px 9px"
                {...getOverrideProps(overrides, "Frame 17040892896")}
              >
                <Text
                  fontFamily="ffProLight"
                  fontSize="16px"
                  fontWeight="600"
                  lineHeight="24.204544067382812px"
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
                  children={`${
                    Math.floor(item?.DFSTokenBalance.slice(0, 6)) / 100
                  } `}
                  {...getOverrideProps(overrides, "040892897")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="52px"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="9px 9px 9px 9px"
                {...getOverrideProps(overrides, "Frame 171")}
              >
                <Text
                  fontFamily="ffProLight"
                  fontSize="16px"
                  fontWeight="600"
                  lineHeight="24.204544067382812px"
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
                  children={`${
                    Math.floor(item?.OtherTokenBalance.slice(0, 6)) / 100
                  } `}
                  {...getOverrideProps(overrides, "040892899")}
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
              <DepositButton1024px
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

export default MyPageList1024px;

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
