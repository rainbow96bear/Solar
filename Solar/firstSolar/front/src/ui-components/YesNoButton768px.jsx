import { useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import { motion } from "framer-motion";
import "../css/Font.css";
import { useSelector } from "react-redux";
import { useWeb3 } from "../modules/useWeb3";

import { useAccount } from "wagmi";
import { removeLiquidity } from "../api";
import "../css/Font.css";
import { useWeb3T } from "../modules/useWeb3Trust";
import { useWeb3C } from "../modules/useWeb3Coinbase";
import { setIsLoading } from "../modules/isLoading";

export default function YesNoButton768px(props) {
  const {
    overrides,
    withDrawAmountValue,
    lpTokenValue,
    setLpTokenValue,
    setRemoveQuestion,
    lpSymbol,
    mypageLpListUp,
    mypageMethod,
    dispatch,
    navigate,
    ...rest
  } = props;

  const account2 = useSelector((state) => state.account);
  const { web3, login } = useWeb3();
  const { web3T, loginT } = useWeb3T();
  const { web3C, loginC } = useWeb3C();
  const { account } = useAccount();
  const removeLiquidityFunc = async () => {
    try {
      dispatch(setIsLoading(true));
      const result2 = await removeLiquidity(
        account2 ? account2 : account,
        withDrawAmountValue,
        lpSymbol
      );

      let removeTx;
      if (document.cookie.split(":")[0] == "metamask") {
        removeTx = await web3.eth.sendTransaction(result2);
      } else if (document.cookie.split(":")[0] == "trust") {
        removeTx = await web3T.eth.sendTransaction(result2);
      } else if (document.cookie.split(":")[0] == "coinbase") {
        removeTx = await web3C.eth.sendTransaction(result2);
      }

      setLpTokenValue(lpTokenValue - withDrawAmountValue);
      dispatch(setIsLoading(false));
      setRemoveQuestion(0);
      navigate("/redirectHome");
    } catch (error) {
      console.error(error);
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    if (document.cookie) {
      if (document.cookie.split(":")[0] == "metamask") {
        login();
      } else if (document.cookie.split(":")[0] == "trust") {
        loginT();
      } else if (document.cookie.split(":")[0] == "coinbase") {
        loginC();
      }
    }
  }, []);

  return (
    <Flex
      gap="30px"
      direction="column"
      width="46vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="18px"
      padding="41px 50px 41px 50px"
      backgroundColor="rgb(255,255,255)"
      {...getOverrideProps(overrides, "YesNoButton768px")}
      {...rest}
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
        padding="19px 19px 19px 19px"
        {...getOverrideProps(overrides, "Frame 9740822812")}
      >
        <Text
          fontFamily="ffCondExtraLight"
          fontSize="21px"
          fontWeight="600"
          lineHeight="15.732954025268555px"
          textAlign="center"
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
          children="Do you want to remove the liquidity pool?"
          {...getOverrideProps(overrides, "Balance : 040822813")}
        ></Text>
      </Flex>

      <Flex
        direction="row"
        width="36vw"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="relative"
        gap="33px"
      >
        <motion.div
          style={{
            width: "15vw",
            height: "unset",
            borderRadius: "35px",
            backgroundColor: "rgba(234,0,50,0.55)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
          }}
          whileHover={{ borderRadius: "13px", scale: 1.1, opacity: 0.88 }}
        >
          <Flex
            onClick={() => {
              removeLiquidityFunc();
            }}
            gap="10px"
            direction="row"
            width="unset"
            height="50px"
            justifyContent="flex-end"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            borderRadius="45px"
            padding="19px 25px 19px 25px"
            {...getOverrideProps(overrides, "Connect40052829")}
          >
            <Text
              fontFamily="ffProMedium"
              fontSize="24px"
              fontWeight="700"
              color="rgba(239,239,239,1)"
              lineHeight="29.045454025268555px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="29px"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Yes"
              {...getOverrideProps(overrides, "Swap")}
            ></Text>
          </Flex>
        </motion.div>
        <motion.div
          style={{
            width: "15vw",
            height: "unset",
            borderRadius: "35px",
            backgroundColor: "rgba(255,226,0,0.35)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
          }}
          whileHover={{ borderRadius: "13px", scale: 1.1, opacity: 0.88 }}
        >
          <Flex
            onClick={() => {
              setRemoveQuestion(0);
            }}
            gap="10px"
            direction="row"
            width="unset"
            height="50px"
            justifyContent="flex-end"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            borderRadius="45px"
            padding="19px 25px 19px 25px"
            overflow="hidden"
            {...getOverrideProps(overrides, "Connect40052831")}
          >
            <Text
              fontFamily="ffProMedium"
              fontSize="1.5rem"
              fontWeight="700"
              lineHeight="29.045454025268555px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="29px"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="No"
              {...getOverrideProps(overrides, "Add Liquidity")}
            ></Text>
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
}
