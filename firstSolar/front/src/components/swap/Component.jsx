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

const SwapComponent = ({ oracleId, balance }) => {
  const props = oracleId;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const isDesktop = useMediaQuery({
    query: "(min-width:1280px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:1279px)",
  });
  console.log("oracleId : ", oracleId);
  console.log("balance : ", balance);
  return (
    <>
      {isDesktop ? (
        <Swap>
          <Flex
            direction={{
              medium: "column",
              large: "row",
            }}
          >
            <ItemWrap
              onClick={() => {
                if (props[0].name.includes("DFS")) {
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
                <SwapTop768px oracleiddata={props} balance={balance} />
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
                        marginTop: "-38px",
                        height: "unset",
                        borderRadius: "35px",
                        backgroundColor: "rgba(249,249,249,1)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      }}
                      whileHover={{
                        borderRadius: "55px",
                        scale: 0.9,
                        backgroundColor: "rgba(249,249,249,0.55)",
                        boxShadow: "10px 10px 20px rgba(0, 20, 0, 0.25)",
                      }}
                      oracleiddata={props}
                      balance={balance}
                    />
                  </motion.div>
                </SubWrap>
              )}
            </AnimatePresence>
          </Flex>
        </Swap>
      ) : (
        <></>
      )}
      {isMobile ? (
        <>
          <Swap>
            <Flex
              direction={{
                base: "column",
                medium: "row",
              }}
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
                    if (props[0].name.includes("DFS")) {
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
                  <SwapTop320px oracleiddata={props} balance={balance} />
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
                      <Swap320px
                        marginTop={{
                          base: "-150px",
                          medium: "0px",
                        }}
                        style={{
                          height: "unset",
                          borderRadius: "35px",
                          backgroundColor: "rgba(249,249,249,1)",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                        whileHover={{
                          borderRadius: "55px",
                          scale: 0.99,
                          backgroundColor: "rgba(249,249,249,0.55)",
                          boxShadow: "10px 10px 20px rgba(0, 20, 0, 0.25)",
                        }}
                        oracleiddata={props}
                        balance={balance}
                      />
                    </motion.div>
                  </SubWrap>
                )}
              </AnimatePresence>
            </Flex>
          </Swap>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SwapComponent;

const Swap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
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
  scale: 0.9;
  :last-child {
    border-radius: 0 0 20px 20px;
  }
`;
