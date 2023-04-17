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
  const [inputValue, setInput] = useState("");
  const [isAPI, setIsAPI] = useState("");

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
  console.log(defiList);

  const filterNetworkAndDex = async (_network, _dex) => {
    try {
      setStatus(DATA_STATUS.LOADING);
      const result = (
        await axios.post(`http://localhost:8080/api/defi/filter`, {
          network: _network,
          dex: _dex,
        })
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

  const checkAPI = async (_inputValue) => {
    try {
      const result = (
        await axios.post(`http://localhost:8080/api/defi/check`, {
          inputAPI: _inputValue,
        })
      ).data;
      setIsAPI(result.msg);
    } catch (err) {
      console.log(err);
    }
  };

  const lpDetail = async (_id) => {
    try {
      setStatus(DATA_STATUS.LOADING);
      const result = (
        await axios.post("http://localhost:8080/api/defi/detail", { id: _id })
      ).data;
      console.log(result);
      setDefiList(result);
      setStatus(DATA_STATUS.SUCCESS);
    } catch (error) {
      console.error(error);
    }
  };

  const testing = async (_token1, _token2) => {
    try {
      const result = (
        await axios.post("http://localhost:8080/api/defi/price", {
          token1: _token1,
          token2: _token2,
        })
      ).data;
      console.log(Object.values(result));
    } catch (err) {
      console.log(err);
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
      checkAPI={checkAPI}
      isAPI={isAPI}
      setIsAPI={setIsAPI}
      inputValue={inputValue}
      setInput={setInput}
      testing={testing}
    />
  );
};
export default DefiContainer;
