import axios from "axios";
import { useEffect, useState } from "react";
import Web3 from "web3";

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
      console.log(result);
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

  const createLiquidityPoolFunc = async () => {
    try {
      let web3;
      if (window.ethereum) web3 = new Web3(window.ethereum);

      const result = (
        await axios.post("http://localhost:8080/api/defi/createLiquidityPool", {
          account: "0xCB8775C5943Dc32ed8C1A8182Ce9A53E5b87383a",
        })
      ).data;
      let transactionResult = await web3.eth.sendTransaction({
        ...result,
      });
      console.log(result);
      console.log(transactionResult);
    } catch (err) {
      console.log(err);
    }
  };

  const getPool = async () => {
    const info = await axios.post(
      "http://localhost:8080/api/defi/insertLpToDB"
    );
    console.log(info);
  };

  const lpStaking = async () => {
    try {
      const result = (
        await axios.post(`http://localhost:8080/api/defi/approve`)
      ).data;
      console.log(result);
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
      createLiquidityPoolFunc={createLiquidityPoolFunc}
      getPool={getPool}
    />
  );
};
export default DefiContainer;
