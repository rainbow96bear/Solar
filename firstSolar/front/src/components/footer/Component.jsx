import styled from "styled-components";
import { Foot1024px, Foot768px, Foot320px } from "../../ui-components";

const FooterComponent = () => {
  return (
    <FooterCompo>
      <Foot1024px />
      <Foot768px />
    </FooterCompo>
  );
};
export default FooterComponent;

const FooterCompo = styled.div`
  background-color: #f8f8f8;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 100px;
  padding-top: 55px;
  padding-left: 15px;
`;
