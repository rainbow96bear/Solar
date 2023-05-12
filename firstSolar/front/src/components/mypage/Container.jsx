import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useAccount } from "wagmi";

import MypageComponent from "./Component";
import { mypageList } from "../../api/index";
import { setIsLoading } from "../../modules/isLoading";

const MypageContainer = () => {
  const [autoCompoundStatus, setAutoCompoundState] = useState(false);
  const [myList, setMyList] = useState([]);
  const [lpTokenValue, setLpTokenValue] = useState();
  const [lpToken, setLpToken] = useState();
  const [firstToken, setFirstToken] = useState();
  const [secondToken, setSecondToken] = useState();
  const [firstImgToken, setFirstImgToken] = useState();
  const [secondImgToken, setSecondImgToken] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { account } = useAccount();
  const params = useLocation().search.replace("?", "");
  const account2 = useSelector((state) => state.account);

  const getAutoCompoundStatusFunc = async () => {
    try {
      setMyList(await mypageList(params));
      setAutoCompoundState(!autoCompoundStatus);
    } catch (error) {
      console.error(error);
    }
  };

  const mypageLpListUp = async () => {
    try {
      setMyList(await mypageList(params));
    } catch (error) {
      console.error(error);
    }
  };

  const isDesktop = useMediaQuery({
    query: "(min-width:769px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  useEffect(() => {
    (async () => {
      dispatch(setIsLoading(true));
      await mypageLpListUp();
      dispatch(setIsLoading(false));
    })();
    if (!account && !account2) {
      navigate("/redirectHome");
    }
  }, []);

  return (
    <MypageComponent
      myList={myList}
      getAutoCompoundStatusFunc={getAutoCompoundStatusFunc}
      autoCompoundStatus={autoCompoundStatus}
      isDesktop={isDesktop}
      isMobile={isMobile}
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
    ></MypageComponent>
  );
};

export default MypageContainer;
