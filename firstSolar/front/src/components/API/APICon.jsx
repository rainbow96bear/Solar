import APIComp from "./APIComp";
import axios from "axios";
import { useState, useEffect } from "react";

const APICon = () => {
  const [NowUSDTprice, setNowUSDTprice] = useState([]);
  const [NowETHprice, setNowETHprice] = useState([]);
  const [NowBNBprice, setNowBNBprice] = useState([]);
  const [BNBtoUSDT, setBNBtoUSDT] = useState([]);
  const [BNBtoETH, setBNBtoETH] = useState([]);
  const [ETHtoBNB, setETHtoBNB] = useState([]);
  const [ETHtoUSDT, setETHtoUSDT] = useState([]);
  const [USDTtoETH, setUSDTtoETH] = useState([]);
  const [USDTtoBNB, setUSDTtoBNB] = useState([]);

  const APIClick = async () => {
    try {
      const {
        NowUSDTprice,
        NowETHprice,
        NowBNBprice,
        BNBtoUSDT,
        BNBtoETH,
        ETHtoBNB,
        ETHtoUSDT,
        USDTtoETH,
        USDTtoBNB,
      } = (await axios.get("http://localhost:8080/api/sync")).data;

      setNowUSDTprice(NowUSDTprice);
      setNowETHprice(NowETHprice);
      setNowBNBprice(NowBNBprice);
      setBNBtoUSDT(BNBtoUSDT);
      setBNBtoETH(BNBtoETH);
      setETHtoBNB(ETHtoBNB);
      setETHtoUSDT(ETHtoUSDT);
      setUSDTtoETH(USDTtoETH);
      setUSDTtoBNB(USDTtoBNB);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(NowUSDTprice);
  console.log(BNBtoETH);

  return (
    <div>
      <APIComp
        APIClick={APIClick}
        NowUSDTprice={NowUSDTprice}
        NowETHprice={NowETHprice}
        NowBNBprice={NowBNBprice}
        BNBtoUSDT={BNBtoUSDT}
        BNBtoETH={BNBtoETH}
        ETHtoBNB={ETHtoBNB}
        ETHtoUSDT={ETHtoUSDT}
        USDTtoETH={USDTtoETH}
        USDTtoBNB={USDTtoBNB}
      />
    </div>
  );
};
export default APICon;
