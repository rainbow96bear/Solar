import APIComp from "./APIComp";
import axios from "axios";
import { useState, useEffect } from "react";

const APICon = () => {
  // swap 정보
  const [volum, setVolum] = useState("");
  const [secondKeyWord, setSecondkeyWord] = useState("");
  const [firstSelectTokenPrice, setselectTokenPrice] = useState(0);
  const [convertPrice, setConvertPrice] = useState({
    bnb: "",
    eth: "",
    usdt: "",
  });
  const [secondSelectTokenPrice, setSecondSelectTokenPrice] = useState("");
  // swap Select
  const [selectSwapToken, setSelectSwapToken] = useState({});
  const [selectedSecondSwapToken, setSelectedSecondSwapToken] = useState({});

  const handleChange = (e) => {
    setSelectSwapToken(e.target.value);
  };
  const handleSecondChange = (e) => {
    setSecondkeyWord(e.target.value.toLowerCase());
    setSelectedSecondSwapToken(e.target.value.toLowerCase());
  };

  // swap price
  const [swapConvertPrice, setSwapConvertPrice] = useState(0);
  const [returnSwapConvertPrice, setReturnSwapConvertPrice] = useState(0);

  const SwapToken = async () => {
    try {
      const selectTokenPrice = (
        await axios.post("http://localhost:8080/api/sync/swap", {
          data: selectSwapToken,
        })
      ).data;

      setselectTokenPrice(selectTokenPrice.tokenPrice);
      setConvertPrice({
        bnb: selectTokenPrice.ConvertToBNB,
        eth: selectTokenPrice.ConvertToETH,
        usdt: selectTokenPrice.ConvertToUSDT,
      });

      setSecondSelectTokenPrice(convertPrice[secondKeyWord]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const firstSync = axios.get("http://localhost:8080/api/sync");
    if (firstSync) {
      return;
    } else {
      firstSync();
    }
  }, []);

  useEffect(() => {
    setSwapConvertPrice(+volum * +firstSelectTokenPrice);
  }, [selectSwapToken, volum, secondKeyWord, firstSelectTokenPrice]);

  useEffect(() => {
    setReturnSwapConvertPrice(+volum * +secondSelectTokenPrice);
  }, [volum, secondSelectTokenPrice, secondKeyWord, selectedSecondSwapToken]);

  useEffect(() => {
    const firstSync = axios.get("http://localhost:8080/api/sync");
    if (firstSync) {
      return;
    } else {
      firstSync();
    }
  }, []);

  useEffect(() => {
    setSwapConvertPrice(+volum * +firstSelectTokenPrice);
  }, [selectSwapToken, volum, secondKeyWord, firstSelectTokenPrice]);

  useEffect(() => {
    setReturnSwapConvertPrice(+volum * +secondSelectTokenPrice);
  }, [volum, secondSelectTokenPrice, secondKeyWord, selectedSecondSwapToken]);

  return (
    <div>
      <APIComp
        SwapToken={SwapToken}
        volum={volum}
        setVolum={setVolum}
        secondKeyWord={secondKeyWord}
        setSecondkeyWord={setSecondkeyWord}
        setSecondSelectTokenPrice={setSecondSelectTokenPrice}
        convertPrice={convertPrice}
        firstSelectTokenPrice={firstSelectTokenPrice}
        selectSwapToken={selectSwapToken}
        selectedSecondSwapToken={selectedSecondSwapToken}
        handleChange={handleChange}
        handleSecondChange={handleSecondChange}
        swapConvertPrice={swapConvertPrice}
        returnSwapConvertPrice={returnSwapConvertPrice}
      />
    </div>
  );
};
export default APICon;
