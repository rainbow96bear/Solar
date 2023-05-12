import * as React from "react";
import { MyPageCompo1024px, MyPageCompo768px } from "../../ui-components";
import styled from "styled-components";
import "../../css/Font.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MypageComponent = ({
  myList,
  getAutoCompoundStatusFunc,
  isOpen,
  toggleOpen,
  autoCompoundStatus,
}) => {
  const { account } = useAccount();
  const account2 = useSelector((state) => state.account);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!account && !account2) {
      navigate("/redirectHome");
    }
  }, []);
  const isDesktop = useMediaQuery({
    query: "(min-width:769px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return (
    <>
      <MypPage>
        {isDesktop && (
          <motion.div
            style={{
              width: "83vw",
              height: "unset",
              backgroundColor: "rgba(246,247,248,0.8)",
              boxShadow: "38px 38px 29px rgba(0, 0, 0, 0.25)",
              borderRadius: "25px",
              backgroundImage:
                "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
            }}
            whileHover={{
              borderRadius: "55px",
              backgroundColor: "rgba(247,239,227,0.75)",
            }}>
            <MyPageCompo1024px
              myList={myList}
              getAutoCompoundStatusFunc={getAutoCompoundStatusFunc}
              isOpen={isOpen}
              toggleOpen={toggleOpen}
              autoCompoundStatus={autoCompoundStatus}></MyPageCompo1024px>
          </motion.div>
        )}

        {isMobile && (
          <motion.div
            style={{
              marginLeft: "27px",
              width: "83vw",
              height: "unset",
              backgroundColor: "rgba(246,247,248,0.8)",
              boxShadow: "38px 38px 29px rgba(0, 0, 0, 0.25)",
              borderRadius: "25px",
              backgroundImage:
                "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
            }}
            whileHover={{
              borderRadius: "55px",
              backgroundColor: "rgba(247,239,227,0.75)",
            }}>
            <MyPageCompo768px
              myList={myList}
              getAutoCompoundStatusFunc={getAutoCompoundStatusFunc}
              isOpen={isOpen}
              toggleOpen={toggleOpen}
              autoCompoundStatus={autoCompoundStatus}></MyPageCompo768px>
          </motion.div>
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
