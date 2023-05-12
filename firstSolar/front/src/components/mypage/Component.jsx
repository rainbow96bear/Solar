import { MyPageCompo1024px, MyPageCompo768px } from "../../ui-components";
import styled from "styled-components";
import "../../css/Font.css";
import { motion } from "framer-motion";

const MypageComponent = ({
  myList,
  getAutoCompoundStatusFunc,
  autoCompoundStatus,
  isDesktop,
  isMobile,
  mypageLpListUp,
  lpTokenValue,
  lpToken,
  firstToken,
  secondToken,
  firstImgToken,
  secondImgToken,
  setLpTokenValue,
  setLpToken,
  setFirstToken,
  setSecondToken,
  setFirstImgToken,
  setSecondImgToken,
  dispatch,
  navigate,
}) => {
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
            }}
          >
            <MyPageCompo1024px
              myList={myList}
              getAutoCompoundStatusFunc={getAutoCompoundStatusFunc}
              autoCompoundStatus={autoCompoundStatus}
              mypageLpListUp={mypageLpListUp}
              lpTokenValue={lpTokenValue}
              lpToken={lpToken}
              firstToken={firstToken}
              secondToken={secondToken}
              firstImgToken={firstImgToken}
              secondImgToken={secondImgToken}
              setLpTokenValue={setLpTokenValue}
              setLpToken={setLpToken}
              setFirstToken={setFirstToken}
              setSecondToken={setSecondToken}
              setFirstImgToken={setFirstImgToken}
              setSecondImgToken={setSecondImgToken}
              dispatch={dispatch}
              navigate={navigate}
            ></MyPageCompo1024px>
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
            }}
          >
            <MyPageCompo768px
              myList={myList}
              getAutoCompoundStatusFunc={getAutoCompoundStatusFunc}
              autoCompoundStatus={autoCompoundStatus}
              mypageLpListUp={mypageLpListUp}
              lpTokenValue={lpTokenValue}
              lpToken={lpToken}
              firstToken={firstToken}
              secondToken={secondToken}
              firstImgToken={firstImgToken}
              secondImgToken={secondImgToken}
              setLpTokenValue={setLpTokenValue}
              setLpToken={setLpToken}
              setFirstToken={setFirstToken}
              setSecondToken={setSecondToken}
              setFirstImgToken={setFirstImgToken}
              setSecondImgToken={setSecondImgToken}
              dispatch={dispatch}
              navigate={navigate}
            ></MyPageCompo768px>
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
