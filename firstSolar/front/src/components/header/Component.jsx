import styled from "styled-components";
import {
  BeforeHeadCom1024px,
  BeforeHeadCom320px,
  BeforeHeadCom768px,
} from "../../ui-components";
import { useMediaQuery } from "react-responsive";
const HeaderComponent = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:992px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:481px) and (max-width:991px)",
  });

  const isMobile = useMediaQuery({
    query: "(min-width:0px) and (max-width:480px)",
  });

  return (
    <Header>
      {isDesktop && <BeforeHeadCom1024px />}
      {isTablet && <BeforeHeadCom768px />}
      {isMobile && <BeforeHeadCom320px />}
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gainsboro;
  padding: 13px 0px 13px 0px;
`;

const Menu = styled.div`
  display: flex;
  padding-top: 5px;
  font-weight: bold;
`;

const Chain = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`;
