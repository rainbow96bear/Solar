import APIComp from "./APIComp";
import axios from "axios";
import { useState, useEffect } from "react";

const APICon = () => {
  const [apiData, setApiData] = useState([]);

  const APIClick = async () => {
    try {
      let tempMoralisData = (await axios.get("http://localhost:8080/api/sync"))
        .data;

      console.log("tempMoralisData", tempMoralisData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <APIComp APIClick={APIClick} />
    </div>
  );
};
export default APICon;
