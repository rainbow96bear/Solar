import styled from "styled-components";
import {
  BeforeHeadCom1440px,
  BeforeHeadCom1024px,
  BeforeHeadCom320px,
  BeforeHeadCom768px,
} from "../../ui-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  // 변수
  const connect = useSelector((state) => state.connect.connect.connect);
  const account = useSelector((state) => state.account.account.account);

  return (
    <Header>
      {/* <BeforeHeadCom1440px></BeforeHeadCom1440px> */}
      <BeforeHeadCom1024px></BeforeHeadCom1024px>
      <BeforeHeadCom768px></BeforeHeadCom768px>
      <BeforeHeadCom320px></BeforeHeadCom320px>
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gainsboro;
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
