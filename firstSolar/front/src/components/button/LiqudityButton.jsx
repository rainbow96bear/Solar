import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { MoonShapes } from "../button/MoonShapes";
import { Tween, SplitChars, Reveal } from "react-gsap";
import { Suspense } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { transition } from "../button/settings";
import useMeasure from "react-use-measure";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

export function LiqudityButton(props) {
  const { overrides, ...rest } = props;
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHoverSecond, setIsHoverSecond] = React.useState(false);
  const [isPressSecond, setIsPressSecond] = React.useState(false);
  const navigate = useNavigate();
  const isDFS = props?.props?.item?.oracleId?.split("-")[0] == "DFS";
  const [isOpen, setIsOpen] = React.useState(false);
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
              <MoonShapes
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
  );
}

export default LiqudityButton;
