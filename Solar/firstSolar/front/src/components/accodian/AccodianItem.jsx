import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import { Flex, Image, Text } from "@aws-amplify/ui-react";

const AccodianItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <ItemWrap
        onClick={toggleOpen}
        layout
        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
        key={`accoTTT-${idx}`}
      >
        <motion.h1>{item.title}111111</motion.h1>
        <Img>
          <img src={item.img} alt={item.title} />
        </Img>
      </ItemWrap>
      <AnimatePresence>
        {isOpen && (
          <SubWrap>
            <motion.h5
              layout
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <Text> {item.id}</Text>
              {item.subtitle}1111
            </motion.h5>
          </SubWrap>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccodianItem;

const ItemWrap = styled(motion.li)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-top: -1px;
  background: white;
  overflow: hidden;

  h1 {
    padding: 22px 30px 21px 30px;
    font-size: 15px;
    z-index: 1;
    opacity: 0.9;
  }
`;

const Img = styled(motion.div)`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 30px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: bottom;
  }
`;

const SubWrap = styled(motion.div)`
  font-size: 15px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;

  h5 {
    padding: 20px 30px;
    font-weight: 500;
    line-height: 150%;
    text-align: left;
  }

  :last-child {
    border-radius: 0 0 20px 20px;
  }
`;
