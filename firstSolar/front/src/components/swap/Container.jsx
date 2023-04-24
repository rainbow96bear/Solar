import SwapComponent from "./Component";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { lpBalance, oracleIdList } from "../../api/index";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";

const SwapContainer = () => {
  const params = useLocation().search.replace("?", "");
  const [oracleId, setOracleId] = React.useState([]);
  const [balance, setBalance] = React.useState(0);
  const { address } = useAccount();

  const address2 = useSelector(state => state.account.account.account);

  React.useEffect(() => {
    (async () => {
      if (!params.includes("DFS")) return;
      const oracleId = await oracleIdList(params);
      setOracleId(oracleId);

      const account = address2 ? address2 : address;

      const balance = await lpBalance(account, oracleId[0].oracleId);
      setBalance(balance);
    })();
  }, []);
  return <SwapComponent oracleId={oracleId} balance={balance}></SwapComponent>;
};

export default SwapContainer;
