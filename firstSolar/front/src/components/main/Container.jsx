import { useState, useEffect } from "react";

import { rankList } from "../../api/index";
import MainComponent from "./Component";

let interval;

const MainContainer = () => {
  const [items, setItems] = useState([]);
  const oracleId = async () => {
    try {
      clearInterval(interval);
      const oracleId = await rankList();
      setItems(oracleId);
      intervalFunc();
    } catch (error) {
      console.error(error);
    }
  };

  const intervalFunc = () => {
    interval = setInterval(() => {
      setItems((prev) => {
        const nextTop = prev[prev.length - 1];
        const newShown = prev.slice(0, prev.length - 1);
        return [nextTop, ...newShown];
      });
    }, 10000);
  };

  useEffect(() => {
    oracleId();
  }, []);
  return <MainComponent items={items}></MainComponent>;
};

export default MainContainer;
