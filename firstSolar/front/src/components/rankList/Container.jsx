import { useEffect, useState } from "react";
import RankListComponent from "./Component";
import { rankList } from "../../api/index";

let interval;
const RankListCContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const oracleId = async () => {
    try {
      setIsLoading(true);
      const oracleId = await rankList();
      setItems(oracleId);
      setIsLoading(false);
      intervalFunc();
    } catch (error) {
      console.error(error);
      setIsLoading(false);
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

  return (
    <RankListComponent items={items} isLoading={isLoading}></RankListComponent>
  );
};

export default RankListCContainer;
