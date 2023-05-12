import { ListMain } from "./listmain";
import { Flex, Text } from "@aws-amplify/ui-react";
import { motion } from "framer-motion";
import { Sosim } from "../../ui-components";
import "../../css/Font.css";

const RankListComponent = ({ items, isLoading }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      marginBottom="50px"
      marginLeft={{ base: "0px", small: "0px", medium: "28px" }}
    >
      <motion.div
        style={{
          width: "89vw",
          height: "unset",
          justifyContent: "center",
          alignSelf: "center",
          justifySelf: "center",
          marginTop: "25px",
          paddingBottom: "33px",
          borderRadius: "33px",
          backgroundColor: "rgba(249, 250, 250, 0.75)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          backgroundImage:
            "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
          zIndex: "10",
          overflow: "hidden",
        }}
        whileHover={{
          borderRadius: "75px",
          backgroundColor: "rgba(247,239,227,0.75)",
        }}
      >
        <Flex
          gap="5px"
          direction={{ base: "column", large: "row" }}
          justifyContent={{ base: "center", large: "space-around" }}
          alignItems={{ base: "center", large: "center" }}
          padding={{
            base: "20px 30px 20px 30px",
            small: "9px 50px 9px 50px",
            large: "9px 50px 9px 50px",
          }}
        >
          <Sosim />
          <ListMain items={items} isLoading={isLoading} />
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default RankListComponent;
