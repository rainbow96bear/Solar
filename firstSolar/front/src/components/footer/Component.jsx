import styled from "styled-components";
import { Foot1024px, Foot768px, Foot320px } from "../../ui-components";
import { Flex } from "@aws-amplify/ui-react";

const FooterComponent = () => {
  return (
    <Flex
      display={{ small: "none", medium: "flex" }}
      style={{
        backgroundColor: "#f8f8f8",
        textAlign: "center",
        display: "flex",
        width: "200vw",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        paddingBottom: "100px",
        paddingTop: "55px",
        paddingLeft: "15px",
      }}
    >
      <Foot1024px />
      <Foot768px />
    </Flex>
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
