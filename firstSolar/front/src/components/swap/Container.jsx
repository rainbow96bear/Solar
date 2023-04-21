import SwapComponent from "./Component";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { oracleIdList } from "../../api/index";
const SwapContainer = () => {
  const params = useLocation().search.replace("?", "");
  console.log(params);
  React.useEffect(() => {
    (async () => {
      const oracleId = await oracleIdList(params);
      console.log("oracleIdList", oracleId);
    })();
  }, []);
  return <SwapComponent></SwapComponent>;
};

export default SwapContainer;
