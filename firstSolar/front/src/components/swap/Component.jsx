import styled from "styled-components";
import {
  Swap320px,
  Swap768px,
  SwapTop320px,
  SwapTop768px,
} from "../../ui-components";

const SwapComponent = ({ oracleId, balance }) => {
  const props = oracleId;
  return (
    <Swap>
      <SwapTop320px />
      <Swap320px />

      <SwapTop768px oracleiddata={props} balance={balance} />
      <Swap768px oracleiddata={props} balance={balance} />
    </Swap>
  );
};

export default SwapComponent;

const Swap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media only screen and (max-width: 480px) {
    display: block;
  }
  @media only screen and (min-width: 481px) {
    display: flex;
  }
`;
