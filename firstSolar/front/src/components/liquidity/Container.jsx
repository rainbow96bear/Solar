import * as React from "react";
import LiquidComponent from "./Component";
import { useLocation } from "react-router-dom";
import { lpBalance, oracleIdList } from "../../api/index";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";

const LiquidityContainer = () => {
  const params = useLocation().search.replace("?", "");

  const [oracleId, setOracleId] = React.useState([]);
  const [balance, setBalance] = React.useState(0);
  const { address } = useAccount();

  const address2 = useSelector(state => state.account.account.account);

  React.useEffect(() => {
    (async () => {
      try {
        const oracleId = await oracleIdList(params);
        console.log("oracleId", oracleId);
        setOracleId(oracleId);
        if (!params.includes("DFS")) {
          const account = address2 ? address2 : address;

          const balance = await lpBalance(account, oracleId[0].oracleId);
          setBalance(balance);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <LiquidComponent oracleId={oracleId} balance={balance}></LiquidComponent>
  );
};

export default LiquidityContainer;
