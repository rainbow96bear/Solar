/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OutRedirectModal from "./OutRedirectModal";
import "../css/Connect.css";
import "../css/Font.css";
import useMeasure from "react-use-measure";
import { gsap } from "gsap";
import { Tween, SplitChars, Reveal } from "react-gsap";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { CupcakeTwoShapes } from "../components/button/CupcakeTwoShapes";
import { GingerbreadShapes } from "../components/button/GingerbreadShapes";
import { transition } from "../components/button/settings";

export default function SwapCompo1440px(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate();
  const isDFS = props?.props?.item?.oracleId?.split("-")[0] == "DFS";
  const [isOpen, setIsOpen] = React.useState(false);
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [isHoverSecond, setIsHoverSecond] = useState(false);
  const [isPressSecond, setIsPressSecond] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.94 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  return (
    <Flex
      display="flex"
      gap="74px"
      direction="row"
      width="90vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="18px"
      padding="30px 50px 30px 50px"
      {...getOverrideProps(overrides, "SwapCompo1440px")}
      {...rest}
    >
      <MotionConfig transition={transition}>
        <motion.button
          onClick={e => {
            e.preventDefault;
            navigate(`/swap?${props.props.item.oracleId}`);
          }}
          style={{
            marginTop: "28px",
            border: "1px",
            borderRadius: "60px",
            backgroundColor: "rgba(234,0,50,0.55)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          ref={ref}
          initial={false}
          animate={isHover ? "hover" : "rest"}
          whileTap="press"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.2 },
            press: { scale: 1.11 },
          }}
          onHoverStart={() => {
            resetMousePosition();
            setIsHover(true);
          }}
          onHoverEnd={() => {
            resetMousePosition();
            setIsHover(false);
          }}
          onTapStart={() => setIsPress(true)}
          onTap={() => setIsPress(false)}
          onTapCancel={() => setIsPress(false)}
          onPointerMove={e => {
            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: "-1px",
              left: "-1px",
              right: "-1px",
              bottom: "-1px",
              borderRadius: "60px",
              backgroundColor: "rgba(0, 169, 191, 1)",
            }}
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <Flex
              style={{
                position: "absolute",
                top: "-100px",
                bottom: "-100px",
                left: "-100px",
                right: "-100px",
                width: "calc(100% + 200px)",
                pointerEvents: "none",
              }}
            >
              <Suspense fallback={null}>
                <GingerbreadShapes
                  isHover={isHover}
                  isPress={isPress}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              </Suspense>
            </Flex>
          </motion.div>

          <motion.div
            variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
            style={{
              width: "31vw",
              height: "unset",
              borderRadius: "35px",
              cursor: "pointer",
              transform: "translateZ(0)",
              zIndex: "1",
            }}
          >
            <Flex
              fontFamily="ffProBook"
              gap="10px"
              direction="row"
              width="unset"
              height="50px"
              justifyContent="center"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              borderRadius="45px"
              padding="19px 150px 19px 150px"
              {...getOverrideProps(overrides, "Connect40052814")}
            >
              <Reveal repeat>
                <Tween
                  from={{ x: "0px", y: "0px" }}
                  stagger={0.1}
                  duration={1.27}
                >
                  <SplitChars
                    wrapper={
                      <Text
                        className="swap"
                        onMouseEnter={onEnter}
                        onMouseLeave={onLeave}
                        style={{
                          fontSize: "21px",
                          display: "inline-block",
                          alignSelf: "center",
                          fontFamily: "unset",
                          fontWeight: "unset",
                        }}
                        color="rgba(239,239,239,1)"
                        lineHeight="29.045454025268555px"
                        textAlign="center"
                        display="block"
                        direction="row"
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
                      />
                    }
                  >
                    Swap
                  </SplitChars>
                </Tween>
              </Reveal>
            </Flex>
          </motion.div>
        </motion.button>
      </MotionConfig>

      <MotionConfig transition={transition}>
        <motion.button
          onClick={e => {
            e.preventDefault;
            const url = isDFS
              ? `/addliquidity?${props.props.item.oracleId}`
              : props.props.item.addLiquidityUrl;
            isDFS
              ? navigate(url)
              : url
              ? setIsOpen(true)
              : window.location.reload();
          }}
          style={{
            marginTop: "28px",
            border: "1px",
            borderRadius: "60px",
            backgroundColor: "rgba(255, 226, 0, 0.35)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          ref={ref}
          initial={false}
          animate={isHoverSecond ? "hover" : "rest"}
          whileTap="press"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.2 },
            press: { scale: 1.11 },
          }}
          onHoverStart={() => {
            resetMousePosition();
            setIsHoverSecond(true);
          }}
          onHoverEnd={() => {
            resetMousePosition();
            setIsHoverSecond(false);
          }}
          onTapStart={() => setIsPressSecond(true)}
          onTap={() => setIsPressSecond(false)}
          onTapCancel={() => setIsPressSecond(false)}
          onPointerMove={e => {
            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: "-1px",
              left: "-1px",
              right: "-1px",
              bottom: "-1px",
              borderRadius: "60px",
              backgroundColor: "#F7EFE3",
            }}
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <Flex
              style={{
                position: "absolute",
                top: "-100px",
                bottom: "-100px",
                left: "-100px",
                right: "-100px",
                width: "calc(100% + 200px)",
                pointerEvents: "none",
              }}
            >
              <Suspense fallback={null}>
                <CupcakeTwoShapes
                  isHover={isHoverSecond}
                  isPress={isPressSecond}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              </Suspense>
            </Flex>
          </motion.div>

          <motion.div
            variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
            style={{
              width: "31vw",
              height: "unset",
              borderRadius: "35px",
              cursor: "pointer",
              transform: "translateZ(0)",
              zIndex: "1",
            }}
          >
            <Flex
              fontFamily="ffProBook"
              gap="10px"
              direction="row"
              width="unset"
              height="50px"
              justifyContent="center"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              borderRadius="45px"
              padding="19px 150px 19px 150px"
              {...getOverrideProps(overrides, "Connect40052814")}
            >
              <Reveal repeat>
                <Tween
                  from={{ x: "0px", y: "0px" }}
                  stagger={0.1}
                  duration={1.27}
                >
                  <SplitChars
                    wrapper={
                      <Text
                        className="liqdity"
                        onMouseEnter={onEnter}
                        onMouseLeave={onLeave}
                        style={{
                          fontSize: "21px",
                          display: "inline-block",
                          alignSelf: "center",
                          fontFamily: "unset",
                          fontWeight: "unset",
                        }}
                        color="rgba(055,060,056,1)"
                        lineHeight="29.045454025268555px"
                        textAlign="center"
                        display="block"
                        direction="row"
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
                      />
                    }
                  >
                    Liquidity
                  </SplitChars>
                </Tween>
              </Reveal>
            </Flex>
          </motion.div>
        </motion.button>
      </MotionConfig>

      {isOpen && (
        <RedirectModal>
          <OutRedirectModal
            item={props}
            setIsOpen={setIsOpen}
          ></OutRedirectModal>
        </RedirectModal>
      )}
    </Flex>
  );
}

const RedirectModal = styled.div`
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
  align-items: center;
  z-index: 88;
`;
