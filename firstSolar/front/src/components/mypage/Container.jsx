import * as React from "react";
import { useAccount } from "wagmi";
import { isLoadingThunk } from "../../modules/isLoading";
import MypageComponent from "./Component";
import { mypageList } from "../../api/index";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MypageContainer = () => {
  const [myList, setMyList] = React.useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { account } = useAccount();
  const account2 = useSelector(state => state.account.account.account);
  const params = useLocation().search.replace("?", "");
  const isLoadingTrue = () => {
    dispatch(isLoadingThunk({ isLoading: true }));
  };

  const isLoadingFalse = () => {
    dispatch(isLoadingThunk({ isLoading: false }));
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

  return <MypageComponent myList={myList}></MypageComponent>;
};

export default MypageContainer;
