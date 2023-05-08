import React from "react";
import { useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import styled, { keyframes } from "styled-components";
import { Flex, Text, Image } from "@aws-amplify/ui-react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useAccount } from "wagmi";
import { ConnectCompoRank, SwapCompoRank } from "../../ui-components";
import { connectThunk } from "../../modules/connect";
import { useDispatch, useSelector } from "react-redux";
import logo1 from "../../ui-components/images/logo_new.png";
import logo2 from "../../ui-components/images/metamaskLogo.jpg";

import "../../css/Font.css";

const ListItem = ({ content, index }, props) => {
  const { overrides, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const { address } = useAccount();
  const address2 = useSelector(state => state.account.account.account);
  const addressResult = address || address2;
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.96 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  return (
    <Wrapper index={index}>
      <>
        <ItemWrap
          onClick={toggleOpen}
          layout
          transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          key={`Rank-${index}`}
        >
          <motion.div
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            style={{
              width: "100%",
              height: "3.35rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f2f2f2",
              backgroundImage:
                "linear-gradient(110deg, #fef263 20%, white 20%)",
              padding: "0px 19px 0px 33px",
              cursor: "pointer",
            }}
            whileHover={{
              backgroundColor: "rgba(247,239,227,0.75)",
            }}
          >
            <Text
              fontFamily="ffProLight"
              fontSize="16px"
              fontWeight="500"
              textAlign="center"
              display="flex"
              width="unset"
              height="25px"
              gap="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="1"
            ></Text>
            <Flex gap="8px">
              <Image
                src={logo1}
                width="21px"
                height="21px"
                display="flex"
                gap="unset"
                alignItems="center"
                justifyContent="center"
                shrink="0"
                position="relative"
                borderRadius="20px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39913189")}
              ></Image>
              <Image
                src={logo2}
                width="21px"
                height="21px"
                display="flex"
                gap="unset"
                alignItems="center"
                justifyContent="center"
                shrink="0"
                position="relative"
                borderRadius="20px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "unsplash:em1OiomfG3g39913189")}
              ></Image>
              <Text
                fontFamily="ffProLight"
                fontSize="16px"
                fontWeight="500"
                textAlign="center"
                display="flex"
                width="unset"
                height="25px"
                gap="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={content}
              ></Text>
            </Flex>

            <Text
              fontFamily="ffProLight"
              fontSize="16px"
              fontWeight="500"
              textAlign="center"
              display="flex"
              width="unset"
              height="25px"
              gap="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="111ETH"
            ></Text>
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
                {addressResult ? (
                  <SwapCompoRank props={props} />
                ) : (
                  <ConnectCompoRank
                    onClick={() => {
                      dispatch(connectThunk({ connect: true }));
                    }}
                  />
                )}
              </motion.div>
            </SubWrap>
          )}
        </AnimatePresence>
      </>
    </Wrapper>
  );
};
const rotate = keyframes`
  from {
    transform: translateY(-3.5rem);
  }

  to {
    transform: translateY(0rem);
  }
`;

const Wrapper = styled(motion.div)`
  transform-origin: top;
  transition: all 0.3s;
  animation: ${rotate} 1s ease-out;
  margin-top: ${props => (props.index === 0 ? "0rem" : "0.5rem")};
  border-radius: 4px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  overflow: hidden;
`;

const ItemWrap = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubWrap = styled(motion.div)`
  display: flex;
  scale: 0.74;
`;

export { ListItem };
