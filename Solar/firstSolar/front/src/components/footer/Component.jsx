import { Foot1024px, Foot768px } from "../../ui-components";
import { Flex } from "@aws-amplify/ui-react";
import { useMediaQuery } from "react-responsive";

const FooterComponent = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:1545px) and (max-width:3080px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:481px) and (max-width:1544px)",
  });

  return (
    <Flex
      display={{ small: "none", medium: "flex" }}
      style={{
        textAlign: "center",
        display: "flex",
        width: "91vw",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        paddingBottom: "100px",
        paddingTop: "55px",
        paddingLeft: "55px",
      }}
    >
      {isDesktop && <Foot1024px />}
      {isTablet && <Foot768px />}
    </Flex>
  );
};
export default FooterComponent;
