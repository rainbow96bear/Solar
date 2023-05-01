import * as React from "react";
import { MyPageCompo1024px } from "../../ui-components";
import styled from "styled-components";
import "../../css/Font.css";
import { motion } from "framer-motion";

const MypageComponent = () => {
  return (
    <>
      <MypPage>
        <motion.div
          style={{
            width: "83vw",
            height: "unset",
            backgroundColor: "rgba(255,255,255,0.8)",
            boxShadow: "38px 38px 29px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
          }}
          whileHover={{
            borderRadius: "55px",
            backgroundColor: "rgba(234, 0, 50, 0.45);",
          }}
        >
          <MyPageCompo1024px></MyPageCompo1024px>
        </motion.div>
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
