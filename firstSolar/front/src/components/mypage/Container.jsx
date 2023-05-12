import * as React from "react";
import { useAccount } from "wagmi";
import MypageComponent from "./Component";
import { mypageList } from "../../api/index";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../modules/isLoading";
import { useState } from "react";
import { getAutoCompound } from "../../api/index";

const MypageContainer = () => {
  const [autoCompoundStatus, setAutoCompoundState] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const getAutoCompoundStatusFunc = async () => {
    try {
      const myLists = await mypageList(params);
      setMyList(myLists);
      setAutoCompoundState(!autoCompoundStatus);
    } catch (error) {
      console.error(error);
    }
  };
  const [myList, setMyList] = React.useState([]);
  const dispatch = useDispatch();
  const params = useLocation().search.replace("?", "");
  const isLoadingTrue = () => {
    dispatch(setIsLoading(true));
  };

  const isLoadingFalse = () => {
    dispatch(setIsLoading(false));
  };

  const mypageLpListUp = async () => {
    try {
      const myLists = await mypageList(params);
      setMyList(myLists);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    (async () => {
      isLoadingTrue();
      await mypageLpListUp();
      isLoadingFalse();
    })();
  }, []);

  return (
    <MypageComponent
      myList={myList}
      getAutoCompoundStatusFunc={getAutoCompoundStatusFunc}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      autoCompoundStatus={autoCompoundStatus}></MypageComponent>
  );
};

export default MypageContainer;
