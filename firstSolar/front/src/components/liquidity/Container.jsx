import * as React from "react";
import LiquidComponent from "./Component";
import { useLocation } from "react-router-dom";
import { oracleIdList } from "../../api/index";
const LiquidityContainer = () => {
  const params = useLocation().search.replace("?", "");

  React.useEffect(() => {
    (async () => {
      try {
        const oracleId = await oracleIdList(params);
        console.log("oracleIdList", oracleId);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return <LiquidComponent></LiquidComponent>;
};

export default LiquidityContainer;
