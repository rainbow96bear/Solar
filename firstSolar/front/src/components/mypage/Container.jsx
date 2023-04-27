import * as React from "react";
import { useLocation } from "react-router-dom";

import MypageComponent from "./Component";
import { mypageList } from "../../api/index";

const MypageContainer = () => {
  const params = useLocation().search.replace("?", "");

  const mypageLpListUp = async () => {
    const myLists = await mypageList(params);
    console.log(myLists);
  };
  React.useEffect(() => {
    mypageLpListUp();
  }, []);

  return <MypageComponent mypageLpListUp={mypageLpListUp}></MypageComponent>;
};

export default MypageContainer;
