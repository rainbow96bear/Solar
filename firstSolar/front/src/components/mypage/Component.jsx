import * as React from "react";
import { MyPageCompo1024px, MyPageCompo768px } from "../../ui-components";
import styled from "styled-components";
import "../../css/Font.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const MypageComponent = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:769px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return (
    <>
      <MypPage>
        {isDesktop ? (
          <motion.div
            style={{
              width: "83vw",
              height: "unset",
              backgroundColor: "rgba(255,255,255,0.8)",
              boxShadow: "38px 38px 29px rgba(0, 0, 0, 0.25)",
              borderRadius: "25px",
              backgroundImage:
                "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
            }}
            whileHover={{
              borderRadius: "55px",
              backgroundColor: "rgba(247,239,227,0.75)",
            }}
          >
            <MyPageCompo1024px></MyPageCompo1024px>
          </motion.div>
        ) : (
          <></>
        )}

        {isMobile ? (
          <motion.div
            style={{
              width: "83vw",
              height: "unset",
              backgroundColor: "rgba(255,255,255,0.8)",
              boxShadow: "38px 38px 29px rgba(0, 0, 0, 0.25)",
              borderRadius: "25px",
              backgroundImage:
                "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
            }}
            whileHover={{
              borderRadius: "55px",
              backgroundColor: "rgba(247,239,227,0.75)",
            }}
          >
            <MyPageCompo768px></MyPageCompo768px>
          </motion.div>
        ) : (
          <></>
        )}
      </MypPage>
    </>
  );
};

export default MypageComponent;

const MypPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  align-self: center;
`;

const LoadingModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
