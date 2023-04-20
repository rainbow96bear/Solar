import styled from "styled-components";
import {
  PooListCom320px,
  PooListCom768px,
  PoolListCom1440px,
  PoolListCom1024px,
} from "../../ui-components";

const MainComponent = () => {
  return (
    <>
      <Main>
        <PooListCom320px></PooListCom320px>
        <PooListCom768px></PooListCom768px>
        <PoolListCom1024px></PoolListCom1024px>
        {/* <PoolListCom1440px></PoolListCom1440px> */}
      </Main>
    </>
  );
};

export default MainComponent;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
