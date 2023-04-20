import styled from "styled-components";
import { Footer } from "../../ui-components";

const FooterComponent = () => {
  return (
    <FooterCompo>
      <Footer></Footer>
      <div className="Footer_innerBox"></div>
      <p className="footer-text">This is the footer.</p>
    </FooterCompo>
  );
};
export default FooterComponent;

const FooterCompo = styled.div`
  background-color: #f8f8f8;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  .Footer_innerBox {
  }
`;
