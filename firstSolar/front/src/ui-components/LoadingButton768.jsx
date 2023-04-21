import { Loader, useTheme } from "@aws-amplify/ui-react";
import styled from "styled-components";
const LoadingButton768 = () => {
  const { tokens } = useTheme();

  return (
    <Loading>
      <div className="Loading_innerBox">
        <Loader
          width="30px"
          height="30px"
          emptyColor={tokens.colors.red}
          filledColor={tokens.colors.red[40]}
        />
      </div>
    </Loading>
  );
};

export default LoadingButton768;

const Loading = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  .Loading_innerBox {
    width: 80px;
    max-width: 220px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: rgba(255, 165, 0, 1);
  }
`;
