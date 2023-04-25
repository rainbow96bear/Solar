import axios from "axios";
import { useEffect, useState } from "react";

import { mainNet, platform } from "../../mainNet";
import DefiComponent from "./Component";

const DATA_STATUS = {
  WAIT: 0,
  LOADING: 1,
  SUCCESS: 2,
};

const DefiContainer = () => {
  const [defiList, setDefiList] = useState([{}]);
  const [status, setStatus] = useState(DATA_STATUS.WAIT);
  const [mainNetList, setMainNetList] = useState([]);
  const [dexList, setDexList] = useState([]);

  const totalLpListUp = async () => {
    try {
      setStatus(DATA_STATUS.LOADING);
      const result = (await axios.get("http://localhost:8080/api/defi")).data;
      setDefiList(result);
      setStatus(DATA_STATUS.SUCCESS);
    } catch (error) {
      console.error(error);
    }
  };

  const filterNetworkAndDex = async (_network, _dex) => {
    try {
      setStatus(DATA_STATUS.LOADING);
      const result = (
        await axios.post(`http://localhost:8080/api/defi/filter`, {
          network: _network,
          dex: _dex,
        })
      ).data;
      setDefiList(result);
      setStatus(DATA_STATUS.SUCCESS);
    } catch (error) {
      console.error(error);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + "K";
    } else {
      return num.toString();
    }
  };

  useEffect(() => {
    setMainNetList(Object.keys(mainNet));
    setDexList(Object.values(platform));
  }, []);

  return (
    <DefiComponent
      totalLpListUp={totalLpListUp}
      defiList={defiList}
      status={status}
      formatNumber={formatNumber}
      mainNetList={mainNetList}
      dexList={dexList}
      filterNetworkAndDex={filterNetworkAndDex}
    />
  );
};
export default DefiContainer;
