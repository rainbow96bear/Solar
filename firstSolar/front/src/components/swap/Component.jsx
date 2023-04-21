import styled from "styled-components";
import {
  Swap320px,
  Swap768px,
  AddLiquidityTop768px,
  AddLiquidityTop320px,
  SelTokken768px,
  SelTokken320px,
} from "../../ui-components";

const SwapComponent = ({ oracleId, balance }) => {
  const props = oracleId;
  return (
    <Swap>
      <AddLiquidityTop320px />
      <Swap320px />

      <AddLiquidityTop768px />
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
