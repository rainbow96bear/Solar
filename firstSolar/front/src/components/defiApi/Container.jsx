import axios from "axios";
import { useEffect, useState } from "react";

import { mainNet } from "../../mainNet";
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

  const totalLpListUp = async () => {
    try {
      setStatus(DATA_STATUS.LOADING);
      const result = (await axios.get("http://localhost:8080/api/defi")).data;
      console.log(result);
      setDefiList(result);
      setStatus(DATA_STATUS.SUCCESS);
    } catch (error) {
      console.error(error);
    }
  };

  const selectMainNet = async (_mainNet) => {
    try {
      setStatus(DATA_STATUS.LOADING);
      let result;
      if (!_mainNet) totalLpListUp();

      result = (
        await axios.get(
          `http://localhost:8080/api/defi?mainNetName=${_mainNet}`
        )
      ).data;

      console.log(result);
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
  }, []);

  return (
    <DefiComponent
      totalLpListUp={totalLpListUp}
      defiList={defiList}
      status={status}
      formatNumber={formatNumber}
      mainNetList={mainNetList}
      selectMainNet={selectMainNet}
    />
  );
};
export default DefiContainer;
