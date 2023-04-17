import APIComp from "./APIComp";
import axios from "axios";
import { useState, useEffect } from "react";

const APICon = () => {
  const [priceData, setPriceData] = useState([]);

  const APIClick = async () => {
    try {
      let tempMoralisData = (await axios.get("http://localhost:8080/api/sync"))
        .data;

      setPriceData(tempMoralisData);
    } catch (error) {
      console.log(error);
    }
  };
  const APIClick2 = async () => {
    try {
      let lpsData = (await axios.get("https://api.beefy.finance/lps")).data;
      let tokensData = (await axios.get("https://api.beefy.finance/tokens"))
        .data;

      console.log("lpsData", lpsData);

      console.log("tokensData", tokensData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <APIComp
        APIClick={APIClick}
        APIClick2={APIClick2}
        priceData={priceData}
      />
    </div>
  );
};
export default APICon;
