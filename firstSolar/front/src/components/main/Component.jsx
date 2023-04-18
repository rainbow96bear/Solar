import styled from "styled-components";
import {
  PooListCom320px,
  PooListCom768px,
  PoolListCom1440px,
  PoolListCom1024px,
  AddLiquidityTop320px,
  AddLiquidityBottom320px,
  AddLiquidityTop768px,
  AddLiquidityBottom768px,
  Swap320px,
  Swap768px,
  SetNetwork768px,
  SetNetwork1024px,
} from "../../ui-components";

const MainComponent = () => {
  return (
    <>
      <Main>
        <PooListCom320px></PooListCom320px>
        <PooListCom768px></PooListCom768px>
        <PoolListCom1024px></PoolListCom1024px>
        <PoolListCom1440px></PoolListCom1440px>
        {/* <Swap320px />
        <Swap768px /> */}
      </Main>
      <Main1>
        {/* <AddLiquidityTop320px />
        <AddLiquidityBottom320px />
        <AddLiquidityTop768px />
        <AddLiquidityBottom768px /> */}

        {/* <AddLiquidityTop768px />
        <AddLiquidityBottom768px /> */}

        {/* <SetNetwork768px />
        <SetNetwork1024px /> */}
      </Main1>
    </>
  );
};

export default MainComponent;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Main1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
