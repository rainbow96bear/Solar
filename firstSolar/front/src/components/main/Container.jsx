import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { rankList } from "../../api/index";
import RankListCContainer from "../rankList/Container";
import {
  PooListCom320px,
  PooListCom768px,
  PoolListCom1024px,
} from "../../ui-components";

let interval;

const MainContainer = () => {
  const [items, setItems] = useState([]);
  const isMobile = useMediaQuery({
    query: "(min-width:0px) and (max-width:480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:481px) and (max-width:991px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width:992px)",
  });
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

  return (
    <Main>
      <RankListCContainer items={items}></RankListCContainer>
      {isMobile && <PooListCom320px />}
      {isTablet && <PooListCom768px />}
      {isDesktop && <PoolListCom1024px />}
    </Main>
  );
};

export default MainContainer;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
