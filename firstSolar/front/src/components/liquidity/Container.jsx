import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "@aws-amplify/ui-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import {
  AddLiquidityBottom320px,
  AddLiquidityBottom768px,
  AddLiquidityTop320px,
  AddLiquidityTop768px,
} from "../../ui-components";
import {
  addLiquidity,
  approveDFS,
  approveOtherToken,
  oracleIdList,
  swapBalance,
  updatePool,
} from "../../api/index";
import { useWeb3 } from "../../modules/useWeb3";
import { useWeb3T } from "../../modules/useWeb3Trust";
import { useWeb3C } from "../../modules/useWeb3Coinbase";
import { useAccount } from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../modules/isLoading";

import LoadingCompo from "../../ui-components/LoadingCompo";
import AddLiquidityCompletedModal from "../../ui-components/AddLiquidityCompletedModal";
import AddLiquidityFaildModal from "../../ui-components/AddLiquidityFaildModal";

const LiquidityContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [oracleId, setOracleId] = useState([]);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { web3, account, chainId, login } = useWeb3();
  const { web3T, accountT, chainIdT, loginT } = useWeb3T();
  const { web3C, accounCC, chainIdC, loginC } = useWeb3C();

  const params = useLocation().search.replace("?", "");

  const toggleOpen = () => setIsOpen(!isOpen);

  const lastTimeStamp = oracleId[0]?.lastHarvest
    ? oracleId[0]?.lastHarvest
    : oracleId[0]?.updatedAt.split("T")[0];

  const tokenNumBer = oracleId[0]?.firstTokenBalance;
  const reducedNumber = tokenNumBer?.toString().substring(0, 5);

  const isDesktop = useMediaQuery({
    query: "(min-width:500px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:499px)",
  });

  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();

  const { address } = useAccount();
  const address2 = useSelector((state) => state.account);

  const [userFirstBalance, setUserFirstBalance] = useState(0);
  const [userSecondBalance, setUserSecondBalance] = useState(0);

  const [addLiquidityPossibility, setAddLiquidityPossibility] = useState(false);

  const [addLiquiditySuccessModalOpen, setAddLiquiditySuccessModalOpen] =
    useState(false);
  const [addLiquidityFailModalOpen, setAddLiquidityFailModalOpen] =
    useState(false);
  const isLoading = useSelector((state) => state.isLoading);
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

  useEffect(() => {
    (async () => {
      try {
        setOracleId(await oracleIdList(params));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (!address2) return;
        const data1 = await swapBalance(
          address2 ? address2 : address,
          oracleId[0]?.firstToken
        );
        const data2 = await swapBalance(
          address2 ? address2 : address,
          oracleId[0]?.secondToken
        );
        setUserFirstBalance(data1);
        setUserSecondBalance(data2);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [address2, oracleId]);

  useEffect(() => {
    if (
      +firstValue <= +userFirstBalance &&
      +secondValue <= +userSecondBalance &&
      firstValue == secondValue &&
      firstValue != 0 &&
      secondValue != 0 &&
      firstValue != undefined &&
      secondValue != undefined
    ) {
      setAddLiquidityPossibility(true);
    } else setAddLiquidityPossibility(false);
  }, [firstValue, secondValue]);

  const addLiquidtiyFunc = async () => {
    dispatch(setIsLoading(true));
    const approveDFSTx = await approveDFS(
      address2 ? address2 : address,
      firstValue,
      oracleId[0]?.secondToken
    );
    try {
      let txResult;

      if (document.cookie.split(":")[0] == "metamask") {
        txResult = await web3.eth.sendTransaction(approveDFSTx);
      } else if (document.cookie.split(":")[0] == "trust") {
        txResult = await web3T.eth.sendTransaction(approveDFSTx);
      } else if (document.cookie.split(":")[0] == "coinbase") {
        txResult = await web3C.eth.sendTransaction(approveDFSTx);
      }

      if (txResult) {
        const approveOtherTokenTx = await approveOtherToken(
          address2 ? address2 : address,
          secondValue,
          oracleId[0]?.secondToken
        );

        let pairTxResult;
        if (document.cookie.split(":")[0] == "metamask") {
          pairTxResult = await web3.eth.sendTransaction(approveOtherTokenTx);
        } else if (document.cookie.split(":")[0] == "trust") {
          pairTxResult = await web3T.eth.sendTransaction(approveOtherTokenTx);
        } else if (document.cookie.split(":")[0] == "coinbase") {
          pairTxResult = await web3C.eth.sendTransaction(approveOtherTokenTx);
        }
        if (pairTxResult) {
          const addLiquidityTx = await addLiquidity(
            address2 ? address2 : address,
            firstValue,
            secondValue,
            oracleId[0]?.secondToken
          );

          let addLiquidityTxResult;
          if (document.cookie.split(":")[0] == "metamask") {
            addLiquidityTxResult = await web3.eth.sendTransaction(
              addLiquidityTx
            );
          } else if (document.cookie.split(":")[0] == "trust") {
            addLiquidityTxResult = await web3T.eth.sendTransaction(
              addLiquidityTx
            );
          } else if (document.cookie.split(":")[0] == "coinbase") {
            addLiquidityTxResult = await web3C.eth.sendTransaction(
              addLiquidityTx
            );
          }

          await updatePool(oracleId[0]?.tokenAddress);

          if (addLiquidityTxResult) {
            const firstBalanceTemp = await swapBalance(
              address ? address : address2,
              oracleId[0]?.firstToken ? oracleId[0]?.firstToken : "DFS"
            );

            setUserFirstBalance(firstBalanceTemp);

            const secondBalanceTemp = await swapBalance(
              address ? address : address2,
              oracleId[0]?.secondToken ? oracleId[0]?.secondToken : "ETH"
            );
            setUserSecondBalance(secondBalanceTemp);
            setFirstValue(0);
            setSecondValue(0);
            dispatch(setIsLoading(false));
            setAddLiquiditySuccessModalOpen(true);
          }
        }
      }
    } catch (err) {
      console.error(err);
      dispatch(setIsLoading(false));
      setAddLiquidityFailModalOpen(true);
    }
  };

  return (
    <>
      {isDesktop && (
        <Addliqud>
          <Flex
            alignItems="center"
            justifyContent="center"
            marginLeft="15px"
            gap={{
              small: "100px",
              medium: "0px",
            }}
            direction={{
              small: "column",
              medium: "column",
              large: "row",
            }}
          >
            <ItemWrap
              onClick={toggleOpen}
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
                <AddLiquidityTop768px
                  oracleiddata={oracleId}
                  balance={balance}
                  lastTimeStamp={lastTimeStamp}
                  tokenNumBer={tokenNumBer}
                  reducedNumber={reducedNumber}
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
                    <AddLiquidityBottom768px
                      style={{
                        marginTop: "15px",
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
                      addLiquidityPossibility={addLiquidityPossibility}
                      addLiquidityFunc={addLiquidtiyFunc}
                      oracleiddata={oracleId}
                      balance={balance}
                      userFirstBalance={userFirstBalance}
                      firstValue={firstValue}
                      setFirstValue={setFirstValue}
                      userSecondBalance={userSecondBalance}
                      secondValue={secondValue}
                      setSecondValue={setSecondValue}
                      addLiquiditySuccessModalOpen={
                        addLiquiditySuccessModalOpen
                      }
                      setAddLiquiditySuccessModalOpen={
                        setAddLiquiditySuccessModalOpen
                      }
                      addLiquidityFailModalOpen={addLiquidityFailModalOpen}
                      setAddLiquidityFailModalOpen={
                        setAddLiquidityFailModalOpen
                      }
                    />
                  </motion.div>
                </SubWrap>
              )}
            </AnimatePresence>
          </Flex>

          {addLiquiditySuccessModalOpen && (
            <LoadingModal>
              <AddLiquidityCompletedModal
                setAddLiquiditySuccessModalOpen={
                  setAddLiquiditySuccessModalOpen
                }
                firstSelectToken={oracleId[0]?.firstToken}
                secondSelectToken={oracleId[0]?.secondToken}
              />
            </LoadingModal>
          )}
          {addLiquidityFailModalOpen && (
            <LoadingModal>
              <AddLiquidityFaildModal
                setAddLiquidityFailModalOpen={setAddLiquidityFailModalOpen}
              />
            </LoadingModal>
          )}
          {isLoading && (
            <LoadingModal>
              <LoadingCompo />
            </LoadingModal>
          )}
        </Addliqud>
      )}
      {isMobile && (
        <Addliqud>
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
                onClick={toggleOpen}
                style={{
                  marginTop: "-150px",
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
                <AddLiquidityTop320px
                  oracleiddata={oracleId}
                  balance={balance}
                  lastTimeStamp={lastTimeStamp}
                  tokenNumBer={tokenNumBer}
                  reducedNumber={reducedNumber}
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
                      marginTop: "-90px",
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
                    <AddLiquidityBottom320px
                      oracleiddata={oracleId}
                      addLiquidityPossibility={addLiquidityPossibility}
                      addLiquidityFunc={addLiquidtiyFunc}
                      balance={balance}
                      userFirstBalance={userFirstBalance}
                      firstValue={firstValue}
                      setFirstValue={setFirstValue}
                      userSecondBalance={userSecondBalance}
                      secondValue={secondValue}
                      setSecondValue={setSecondValue}
                      addLiquiditySuccessModalOpen={
                        addLiquiditySuccessModalOpen
                      }
                      setAddLiquiditySuccessModalOpen={
                        setAddLiquiditySuccessModalOpen
                      }
                      addLiquidityFailModalOpen={addLiquidityFailModalOpen}
                      setAddLiquidityFailModalOpen={
                        setAddLiquidityFailModalOpen
                      }
                    />
                  </motion.div>
                </SubWrap>
              )}
            </AnimatePresence>
          </Flex>
        </Addliqud>
      )}
    </>
  );
};

export default LiquidityContainer;

const Addliqud = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin-top: 30px;
`;

const ItemWrap = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  scale: 0.74;
`;

const SubWrap = styled(motion.div)`
  font-size: 15px;
  margin-bottom: 50px;
  display: flex;
  :last-child {
    border-radius: 0 0 20px 20px;
  }
`;

const LoadingModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  align-items: center;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  z-index: 999999999;
`;
