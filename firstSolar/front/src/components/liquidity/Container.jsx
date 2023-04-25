import * as React from "react";
import LiquidComponent from "./Component";
import { useLocation } from "react-router-dom";
import { oracleIdList } from "../../api/index";
const LiquidityContainer = () => {
  const params = useLocation().search.replace("?", "");

  React.useEffect(() => {
    (async () => {
      const oracleId = await oracleIdList(params);
      console.log("oracleIdList", oracleId);
    })();
  }, []);
  return <LiquidComponent></LiquidComponent>;
};

export default LiquidityContainer;
