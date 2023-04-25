import styled from "styled-components";
import {
  Swap320px,
  Swap768px,
  SwapTop320px,
  SwapTop768px,
} from "../../ui-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SwapComponent = ({ oracleId, balance }) => {
  const props = oracleId;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Swap>
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
            height: "unset",
            borderRadius: "33px",
          }}
          whileHover={{ borderRadius: "75px" }}
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
                style={{ marginTop: "75px" }}
                oracleiddata={"props"}
                balance={balance}
              />
            </motion.div>
          </SubWrap>
        )}
      </AnimatePresence>
    </Swap>

    // <Swap>
    //   <SwapTop320px />
    //   <Swap320px />

    //   <SwapTop768px oracleiddata={props} balance={balance} />
    //   <Swap768px oracleiddata={props} balance={balance} />
    // </Swap>
  );
};

export default SwapComponent;

const Swap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;

  @media only screen and (max-width: 480px) {
    display: block;
  }
  @media only screen and (min-width: 481px) {
    display: flex;
  }
`;

const ItemWrap = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
