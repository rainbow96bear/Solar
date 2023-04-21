import { Swap320px, Swap768px } from "../../ui-components";

const SwapComponent = () => {
  return (
    <>
      <Swap320px />
      <Swap768px />
    </>
  );
};

export default SwapComponent;

const Swap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
