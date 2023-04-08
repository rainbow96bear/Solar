import APIComp from "./APIComp";
import axios from "axios";
import { useState, useEffect } from "react";

const APICon = () => {
  const [apiData, setApiData] = useState([]);

  const APIClick = async () => {
    try {
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
