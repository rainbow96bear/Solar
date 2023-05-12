import { useEffect, useState } from "react";
import RankListComponent from "./Component";
import { rankList } from "../../api/index";
import { useDispatch } from "react-redux";

let interval;
const RankListCContainer = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const oracleId = async () => {
    try {
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

  return <RankListComponent items={items}></RankListComponent>;
};

export default RankListCContainer;
