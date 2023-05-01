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
  padding: 56px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  .Footer_innerBox {
  }
`;
