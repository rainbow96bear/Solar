import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getConvertPrice,
  lpBalance,
  oracleIdList,
  swapApprove,
  swapBalance,
  swapTransaction,
} from "../../api/index";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import styled from "styled-components";
import {
  Swap320px,
  Swap768px,
  SwapTop320px,
  SwapTop768px,
} from "../../ui-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flex } from "@aws-amplify/ui-react";
import { useMediaQuery } from "react-responsive";
import { setIsLoading } from "../../modules/isLoading";
import { useWeb3 } from "../../modules/useWeb3";
import { useWeb3T } from "../../modules/useWeb3Trust";
import { useWeb3C } from "../../modules/useWeb3Coinbase";

const SwapContainer = () => {
  const params = useLocation().search.replace("?", "");
  const { web3, login } = useWeb3();
  const { web3T, loginT } = useWeb3T();
  const { web3C, loginC } = useWeb3C();
  const navigate = useNavigate();

  const { address } = useAccount();
  const address2 = useSelector((state) => state.account);
  const [userFirstBalance, setUserFirstBalance] = useState(0);
  const [userSecondBalance, setUserSecondBalance] = useState(0);
  const [textareaValue, setTextAreaValue] = useState("");
  const [swapPossibility, setSwapPossibility] = useState(false);
  const [rightPool, setRightPool] = useState(false);
  const [questionMark, setQuestionMark] = useState(0);

  const [swapSuccessModalOpen, setSwapSuccessModalOpen] = useState(false);
  const [swapFailModalOpen, setSwapFailModalOpen] = useState(false);

  const [convertPrice, setConvertPrice] = useState({
    bnb: "",
    eth: "",
    usdt: "",
  });

  const [firstAmountPrice, setFirstAmountPrice] = useState(0);
  const [secondAmountPrice, setSecondAmountPrice] = useState(0);

  const [firstSelectToken, setFirstSelectToken] = useState("DFS");
  const [firstSelectTokenPrice, setFirstSelectTokenPrice] = useState(0);

  const [secondSelectToken, setSecondSelectToken] = useState("ETH");
  const [secondSelectTokenPrice, setSecondSelectTokenPrice] = useState("");

  const [oracleId, setOracleId] = useState([]);
  const [balance, setBalance] = useState(0);
  const [lastTimeStamp, setLastTimeStamp] = useState();

  const [firstLiquidity, setFirstLiquidity] = useState();
  const [secondLiquidity, setSecondLiquidity] = useState();

  const [tokenNumBer, setTokenNumber] = useState();
  const [reducedNumber, setReducedNumber] = useState();

  const [dateString, setDateString] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({
    query: "(min-width:500px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:499px)",
  });

  useEffect(() => {
    (async () => {
      if (!address2 || !oracleId) return;
      try {
        const oracleId = await oracleIdList(params);
        setOracleId(oracleId);
        if (!params.includes("DFS")) {
          const account = address2 ? address2 : address;
          const balance = await lpBalance(account, oracleId[0]?.oracleId);
          setBalance(balance);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [address2]);

  useEffect(() => {
    (async () => {
      dispatch(setIsLoading(true));
      const tempDate = new Date(lastTimeStamp * 1000);
      setLastTimeStamp(
        oracleId[0]?.lastHarvest
          ? oracleId[0]?.lastHarvest
          : oracleId[0]?.updatedAt.split("T")[0]
      );
      setDateString(tempDate.toLocaleDateString());
      setFirstLiquidity(
        oracleId[0]?.name?.includes("DFS")
          ? (parseInt(oracleId[0]?.firstTokenBalance / 10 ** 18) * 100000) /
              100000
          : parseInt(oracleId[0]?.firstTokenBalance * 1000) / 1000
      );
      setSecondLiquidity(
        oracleId[0]?.name?.includes("DFS")
          ? (parseInt(oracleId[0]?.secondTokenBalance / 10 ** 18) * 100000) /
              100000
          : parseInt(oracleId[0]?.secondTokenBalance * 1000) / 1000
      );
      setTokenNumber(oracleId[0]?.firstTokenBalance);
      setReducedNumber(tokenNumBer?.toString().substring(0, 7));
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 3000);
    })();
  }, [oracleId[0]]);

  useEffect(() => {
    (async () => {
      try {
        dispatch(setIsLoading(true));
        const { bnb, eth, usdt, tokenPrice } = await getConvertPrice(
          firstSelectToken
        );
        setConvertPrice({ bnb: bnb, eth: eth, usdt: usdt });
        setFirstSelectTokenPrice(tokenPrice);
        setTextAreaValue(0);
        setFirstAmountPrice(0);
        setSecondAmountPrice(0);

        setTimeout(() => {
          dispatch(setIsLoading(false));
        }, 2000);
      } catch (error) {
        console.error(error);
        dispatch(setIsLoading(false));
      }
    })();
  }, [firstSelectToken]);

  useEffect(() => {
    if (firstSelectToken == "DFS") {
      setSecondSelectToken("ETH");
    } else if (firstSelectToken != "DFS") {
      setSecondSelectToken("DFS");
    }
  }, [firstSelectToken]);

  useEffect(() => {
    (async () => {
      try {
        const data = await swapBalance(
          address ? address : address2,
          firstSelectToken
        );
        setUserFirstBalance(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [firstSelectToken, oracleId]);

  useEffect(() => {
    (async () => {
      try {
        const data = await swapBalance(
          address ? address : address2,
          secondSelectToken
        );
        setUserSecondBalance(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [secondSelectToken, oracleId]);

  useEffect(() => {
    if (
      textareaValue == 0 ||
      textareaValue == undefined ||
      textareaValue == null ||
      textareaValue > userFirstBalance ||
      !oracleId[0]?.name.includes(firstSelectToken) ||
      !oracleId[0]?.name.includes(secondSelectToken)
    ) {
      setSwapPossibility(false);
    } else {
      setSwapPossibility(true);
    }
  }, [firstSelectToken, secondSelectToken, textareaValue]);

  useEffect(() => {
    if (
      !oracleId[0]?.name?.includes(firstSelectToken) ||
      !oracleId[0]?.name?.includes(secondSelectToken)
    ) {
      setRightPool(false);
    } else setRightPool(true);
  }, [firstSelectToken, secondSelectToken, oracleId]);

  useEffect(() => {
    if (document.cookie) {
      if (document.cookie.split(":")[0] == "metamask") {
        login();
      } else if (document.cookie.split(":")[0] == "trust") {
        loginT();
      } else if (document.cookie.split(":")[0] == "coinbase") {
        loginC();
      }
    } else navigate("/redirectHome");
  }, []);

  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9", // 0-9
    "Numpad0",
    "Numpad1",
    "Numpad2",
    "Numpad3",
    "Numpad4",
    "Numpad5",
    "Numpad6",
    "Numpad7",
    "Numpad8",
    "Numpad9", // 키보드 상단의 0-9
    ".", // 소수점
    "Backspace", // 백스페이스
  ];

  const handleKeyPress = (e) => {
    const keyCode = e.key;
    if (!allowedKeys.includes(keyCode)) {
      e.preventDefault();
    }
  };

  const setPercentBalance = (percentNum) => {
    if (
      userFirstBalance == 0 &&
      userFirstBalance == undefined &&
      userFirstBalance == null
    )
      return;
    setTextAreaValue(userFirstBalance * percentNum);
    delayedFunction1(userFirstBalance * percentNum);
  };

  const handleTextareaChange = (event) => {
    const value = event.target.value;

    const filteredValue = value.replace(/[^0-9.\b]/g, "");

    if (
      filteredValue.length > 1 &&
      filteredValue.startsWith("0") &&
      !filteredValue.startsWith("0.")
    ) {
      setTextAreaValue(filteredValue.slice(1));
    } else {
      const dotIndex = filteredValue.indexOf(".");
      const lastDotIndex = filteredValue.lastIndexOf(".");
      if (dotIndex !== -1 && dotIndex !== lastDotIndex) {
        const newValue =
          filteredValue.substring(0, dotIndex) +
          filteredValue.substring(dotIndex + 1);
        setTextAreaValue(newValue);
      } else {
        setTextAreaValue(filteredValue);
      }
    }
  };
  let timerId = null;

  function delayedFunction1(num) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      try {
        setFirstAmountPrice(num * firstSelectTokenPrice);
        delayedFunction2(num);
      } catch (error) {
        console.error(error);
      } finally {
        timerId = null;
      }
    }, 1000);
  }

  const delayedFunction2 = (num) => {
    try {
      if (secondSelectToken == "DFS") {
        setSecondAmountPrice(convertPrice.usdt * num);
      } else if (secondSelectToken == "ETH") {
        setSecondAmountPrice(convertPrice.eth * num);
      } else if (secondSelectToken == "BNB") {
        setSecondAmountPrice(convertPrice.bnb * num);
      } else if (secondSelectToken == "USDT") {
        setSecondAmountPrice(convertPrice.usdt * num);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const swapMethod = async () => {
    try {
      dispatch(setIsLoading(true));

      const result1 = (
        await swapApprove(
          address ? address : address2,
          firstSelectToken.toLowerCase(),
          textareaValue,
          oracleId[0].tokenAddress
        )
      ).data;
      let transactionResult;
      if (document.cookie.split(":")[0] == "metamask") {
        transactionResult = await web3.eth.sendTransaction(result1);
      } else if (document.cookie.split(":")[0] == "trust") {
        transactionResult = await web3T.eth.sendTransaction(result1);
      } else if (document.cookie.split(":")[0] == "coinbase") {
        transactionResult = await web3C.eth.sendTransaction(result1);
      }

      const result2 = (
        await swapTransaction(
          address ? address : address2,
          oracleId[0].oracleId,
          +textareaValue,
          firstSelectToken.toLowerCase(),
          secondSelectToken.toLowerCase()
        )
      ).data;

      if (document.cookie.split(":")[0] == "metamask") {
        transactionResult = await web3.eth.sendTransaction(result2);
      } else if (document.cookie.split(":")[0] == "trust") {
        transactionResult = await web3T.eth.sendTransaction(result2);
      } else if (document.cookie.split(":")[0] == "coinbase") {
        transactionResult = await web3C.eth.sendTransaction(result2);
      }

      const firstBalanceTemp = await swapBalance(
        address ? address : address2,
        firstSelectToken
      );
      setUserFirstBalance(firstBalanceTemp);

      const secondBalanceTemp = await swapBalance(
        address ? address : address2,
        secondSelectToken
      );
      setUserSecondBalance(secondBalanceTemp);
      setTextAreaValue("");
      dispatch(setIsLoading(false));

      setSwapSuccessModalOpen(true);
    } catch (error) {
      console.error(error);
      dispatch(setIsLoading(false));
      setSwapFailModalOpen(true);
    }
  };

  return (
    <>
      {isDesktop && (
        <Swap>
          <Flex
            gap={{
              small: "100px",
              medium: "50px",
            }}
            direction={{
              small: "column",
              medium: "column",
              large: "row",
            }}
            alignItems="center"
          >
            <ItemWrap
              onClick={() => {
                if (oracleId[0]?.name?.includes("DFS")) {
                  toggleOpen();
                }
              }}
              layout
              transition={{
                duration: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <motion.div
                style={{
                  marginTop: "-158px",
                  height: "unset",
                  borderRadius: "35px",
                  backgroundColor: "rgba(249,249,249,1)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                whileHover={{
                  borderRadius: "55px",
                  scale: 0.99,
                  backgroundColor: "rgba(249,249,249,0.55)",
                  boxShadow: "-18px 25px 28px rgba(0, 0, 0, 0.25)",
                }}
              >
                <SwapTop768px
                  oracleiddata={oracleId}
                  balance={balance}
                  firstLiquidity={firstLiquidity}
                  secondLiquidity={secondLiquidity}
                  lastTimeStamp={lastTimeStamp}
                />
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
                    <Swap768px
                      style={{
                        height: "unset",
                        borderRadius: "35px",
                        backgroundColor: "rgba(249,249,249,1)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      }}
                      whileHover={{
                        borderRadius: "55px",
                        backgroundColor: "rgba(249,249,249,0.55)",
                        boxShadow: "10px 10px 20px rgba(0, 20, 0, 0.25)",
                      }}
                      oracleiddata={oracleId}
                      balance={balance}
                      userFirstBalance={userFirstBalance}
                      userSecondBalance={userSecondBalance}
                      firstSelectToken={firstSelectToken}
                      secondSelectToken={secondSelectToken}
                      firstAmountPrice={firstAmountPrice}
                      secondAmountPrice={secondAmountPrice}
                      questionMark={questionMark}
                      setQuestionMark={setQuestionMark}
                      textareaValue={textareaValue}
                      setTextAreaValue={setTextAreaValue}
                      handleTextareaChange={handleTextareaChange}
                      handleKeyPress={handleKeyPress}
                      delayedFunction1={delayedFunction1}
                      delayedFunction2={delayedFunction2}
                      setPercentBalance={setPercentBalance}
                      swapPossibility={swapPossibility}
                      swapMethod={swapMethod}
                      swapSuccessModalOpen={swapSuccessModalOpen}
                      setSwapSuccessModalOpen={setSwapSuccessModalOpen}
                      swapFailModalOpen={swapFailModalOpen}
                      setSwapFailModalOpen={setSwapFailModalOpen}
                      rightPool={rightPool}
                    />
                  </motion.div>
                </SubWrap>
              )}
            </AnimatePresence>
          </Flex>
        </Swap>
      )}
      {isMobile && (
        <Swap>
          <Flex
            direction={{
              base: "column",
              medium: "row",
            }}
            alignItems="center"
            justifyContent="center"
          >
            <ItemWrap
              layout
              transition={{
                duration: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <motion.div
                onClick={() => {
                  if (oracleId[0].name.includes("DFS")) {
                    toggleOpen();
                  }
                }}
                style={{
                  marginTop: "-110px",
                  height: "unset",
                  borderRadius: "35px",
                  backgroundColor: "rgba(249,249,249,1)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                whileHover={{
                  borderRadius: "55px",
                  scale: 0.99,
                  backgroundColor: "rgba(249,249,249,0.55)",
                  boxShadow: "-18px 25px 28px rgba(0, 0, 0, 0.25)",
                }}
              >
                <SwapTop320px
                  oracleiddata={oracleId}
                  balance={balance}
                  firstLiquidity={firstLiquidity}
                  secondLiquidity={secondLiquidity}
                  lastTimeStamp={lastTimeStamp}
                  reducedNumber={reducedNumber}
                  dateString={dateString}
                />
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
                    style={{
                      marginTop: "-100px",
                      height: "unset",
                      borderRadius: "35px",
                      backgroundColor: "rgba(249,249,249,1)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                    whileHover={{
                      borderRadius: "55px",
                      backgroundColor: "rgba(249,249,249,0.55)",
                      boxShadow: "10px 10px 20px rgba(0, 20, 0, 0.25)",
                    }}
                  >
                    <Swap320px
                      oracleiddata={oracleId}
                      balance={balance}
                      userFirstBalance={userFirstBalance}
                      userSecondBalance={userSecondBalance}
                      firstSelectToken={firstSelectToken}
                      secondSelectToken={secondSelectToken}
                      firstAmountPrice={firstAmountPrice}
                      secondAmountPrice={secondAmountPrice}
                      questionMark={questionMark}
                      setQuestionMark={setQuestionMark}
                      textareaValue={textareaValue}
                      setTextAreaValue={setTextAreaValue}
                      handleTextareaChange={handleTextareaChange}
                      handleKeyPress={handleKeyPress}
                      delayedFunction1={delayedFunction1}
                      delayedFunction2={delayedFunction2}
                      setPercentBalance={setPercentBalance}
                      swapPossibility={swapPossibility}
                      swapMethod={swapMethod}
                      swapSuccessModalOpen={swapSuccessModalOpen}
                      setSwapSuccessModalOpen={setSwapSuccessModalOpen}
                      swapFailModalOpen={swapFailModalOpen}
                      setSwapFailModalOpen={setSwapFailModalOpen}
                      rightPool={rightPool}
                    />
                  </motion.div>
                </SubWrap>
              )}
            </AnimatePresence>
          </Flex>
        </Swap>
      )}
    </>
  );
};

export default SwapContainer;

const Swap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin-bottom: 50px;
`;

const ItemWrap = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  scale: 0.74;
`;

const SubWrap = styled(motion.div)`
  font-size: 15px;
  display: flex;
  :last-child {
    border-radius: 0 0 20px 20px;
  }
`;
