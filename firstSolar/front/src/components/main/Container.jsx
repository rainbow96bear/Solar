import RankListCContainer from "../rankList/Container";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import {
  PooListCom320px,
  PooListCom768px,
  PoolListCom1024px,
} from "../../ui-components";
const MainContainer = () => {
  const isMobile = useMediaQuery({
    query: "(min-width:0px) and (max-width:480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:481px) and (max-width:991px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width:992px)",
  });

  return (
    <Main>
      <RankListCContainer></RankListCContainer>
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
