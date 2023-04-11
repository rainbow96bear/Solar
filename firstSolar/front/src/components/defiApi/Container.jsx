import axios from "axios";
import { useEffect, useState } from "react";

import DefiComponent from "./Component";

const DATA_STATUS = {
  WAIT: 0,
  LOADING: 1,
  SUCCESS: 2,
};

const DefiContainer = () => {
  const [defiList, setDefiList] = useState([{}]);
  const [status, setStatus] = useState(DATA_STATUS.WAIT);

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

  // const selectMainNet = async () => {
  //   try {
  //     setStatus(DATA_STATUS.LOADING);
  //     const result = (await axios.get("http://localhost:8080/api/defi")).data;
  //     console.log(result);
  //     setDefi0x(result);
  //     setStatus(DATA_STATUS.SUCCESS);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + "K";
    } else {
      return num.toString();
    }
  };

  return (
    <DefiComponent
      totalLpListUp={totalLpListUp}
      defiList={defiList}
      status={status}
      formatNumber={formatNumber}
      // selectMainNet={selectMainNet}
    />
  );
};
export default DefiContainer;
