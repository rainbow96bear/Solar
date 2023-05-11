import styled from "styled-components";
import {
  BeforeHeadCom1024px,
  BeforeHeadCom320px,
  BeforeHeadCom768px,
} from "../../ui-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  return (
    <Header>
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
