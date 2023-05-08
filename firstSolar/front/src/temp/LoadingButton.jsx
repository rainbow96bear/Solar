import { Loader, useTheme } from "@aws-amplify/ui-react";
import styled from "styled-components";
const LoadingButton = () => {
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

export default LoadingButton;

const Loading = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  .Loading_innerBox {
    width: 133px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: rgba(32, 32, 32, 0.85);
  }
`;
