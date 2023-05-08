import styled from "styled-components";
import {
  PooListCom320px,
  PooListCom768px,
  PoolListCom1024px,
} from "../../ui-components";
import RankListCContainer from "../rankList/Container";
import FooterContainer from "../footer/Container";
const MainComponent = () => {
  return (
    <>
      <Main>
        <RankListCContainer></RankListCContainer>
        <PooListCom320px></PooListCom320px>
        <PooListCom768px></PooListCom768px>
        <PoolListCom1024px></PoolListCom1024px>
        <FooterContainer></FooterContainer>
      </Main>
    </>
  );
};

export default MainComponent;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
