import { motion, LayoutGroup } from "framer-motion";
import styled from "styled-components";
import AccodianItem from "./AccodianItem";

const items = [
  {
    id: "1",
    title: "",
    subtitle: "",
    img: "",
  },
  {
    id: "2",
    title: "",
    subtitle: "",
    img: "",
  },
];

const Accordion = () => {
  return (
    <LayoutGroup>
      <Container>
        <motion.ul
          layout
          transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {items?.map((item, idx) => (
            <AccodianItem key={`acco-${idx}`} />
          ))}
        </motion.ul>
      </Container>
    </LayoutGroup>
  );
};

export default Accordion;

const Container = styled(motion.div)`
  margin: 200px auto 0 auto;

  width: 50%;
  text-align: center;
  ul {
    width: 300px;
    background: #fff;
    margin: 0 auto;
  }
`;
