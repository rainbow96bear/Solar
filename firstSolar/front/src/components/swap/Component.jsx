import styled from "styled-components";
import {
  SwapCompo1440px,
  SwapCompo320px,
  SwapCompo768px,
} from "../../ui-components";

const SwapComponent = () => {
  return (
    <Swap>
      <SwapCompo320px></SwapCompo320px>
      <SwapCompo768px></SwapCompo768px>
      <SwapCompo1440px></SwapCompo1440px>
    </Swap>
  );
};

export default SwapComponent;

const Swap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
