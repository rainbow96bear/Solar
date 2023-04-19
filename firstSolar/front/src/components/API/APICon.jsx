import APIComp from "./APIComp";
import axios from "axios";
import { useState, useEffect } from "react";

const APICon = () => {
  // swap 정보
  const [keyWord, setKeyWord] = useState("");
  const [secondKeyWord, setSecondkeyWord] = useState("");
  const [firstSelectTokenPrice, setselectTokenPrice] = useState(0);
  const [firstSelectTokenToConvert, setselectTokenToConvert] = useState(0);
  const [convertPrice, setConvertPrice] = useState({
    bnb: "",
    eth: "",
    usdt: "",
  });
  const [secondSelectTokenPrice, setSecondSelectTokenPrice] = useState("");
  // swap Select
  const [selectedOptions, setSelectedOptions] = useState({});
  const handleChange = (e) => {
    setSelectedOptions(e.target.value);
  };
  const SwapToken = async () => {
    try {
      const selectTokenPrice = (
        await axios.post("http://localhost:8080/api/sync/swap", {
          data: keyWord,
        })
      ).data;
      setselectTokenPrice(selectTokenPrice.tokenPrice);
      setConvertPrice({
        bnb: selectTokenPrice.ConvertToBNB,
        eth: selectTokenPrice.ConvertToETH,
        usdt: selectTokenPrice.ConvertToUSDT,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const convertToken = () => {
    setSecondSelectTokenPrice(convertPrice[secondKeyWord]);
  };

  console.log("firstSelectTokenPrice", secondSelectTokenPrice);
  return (
    <div>
      <APIComp
        SwapToken={SwapToken}
        keyWord={keyWord}
        setKeyWord={setKeyWord}
        secondKeyWord={secondKeyWord}
        setSecondkeyWord={setSecondkeyWord}
        setSecondSelectTokenPrice={setSecondSelectTokenPrice}
        convertPrice={convertPrice}
        firstSelectTokenPrice={firstSelectTokenPrice}
        secondSelectTokenPrice={secondSelectTokenPrice}
        convertToken={convertToken}
        selectedOptions={selectedOptions}
        handleChange={handleChange}
      />
    </div>
  );
};
export default APICon;
