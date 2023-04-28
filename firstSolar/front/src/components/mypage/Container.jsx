import * as React from "react";
// import { useLocation } from "react-router-dom";
// import { mypageList } from "../../api/index";

import MypageComponent from "./Component";

const MypageContainer = () => {
  // const params = useLocation().search.replace("?", "");

  // const mypageLpListUp = async () => {
  //   const myLists = await mypageList(params);
  //   console.log(myLists);
  // };
  // React.useEffect(() => {
  //   mypageLpListUp();
  // }, []);

  return <MypageComponent></MypageComponent>;
};

export default MypageContainer;
