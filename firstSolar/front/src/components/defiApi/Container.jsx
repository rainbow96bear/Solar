import axios from "axios";
import { useEffect, useState } from "react";

import DefiComponent from "./Component";

const DATA_STATUS = {
  WAIT: 0,
  LOADING: 1,
  SUCCESS: 2,
};

const DefiContainer = () => {
  const [defi0x, setDefi0x] = useState([{}]);
  const [status, setStatus] = useState(DATA_STATUS.WAIT);

  const totalLpListUp = async () => {
    try {
      setStatus(DATA_STATUS.LOADING);
      const result = (await axios.get("http://localhost:8080/api/defi")).data;
      console.log(result);
      setDefi0x(result);
      setStatus(DATA_STATUS.SUCCESS);
    } catch (error) {
      console.error(error);
    }
  };

  const testFunc = async () => {
    try {
      setStatus(DATA_STATUS.LOADING);
      const result = (await axios.get("http://localhost:8080/api/defi/testing"))
        .data;
      console.log(result.data);
      setDefi0x(result.data.liquidityPools);
      setStatus(DATA_STATUS.SUCCESS);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   testFunc();
  // }, []);

  return (
    <DefiComponent
      totalLpListUp={totalLpListUp}
      defi0x={defi0x}
      status={status}
      testFunc={testFunc}
    />
  );
};
export default DefiContainer;
