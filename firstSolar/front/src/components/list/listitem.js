import React from "react";
import styled, { keyframes } from "styled-components";
const ListItem = ({ content, index }) => {
  return (
    <Wrapper index={index}>
      <>{content}</>
    </Wrapper>
  );
};
const rotate = keyframes`
  from {
    transform: translateY(-3.5rem);
  }

  to {
    transform: translateY(0rem);
  }
`;

const Wrapper = styled.div`
  transform-origin: top;
  transition: all 0.3s;
  animation: ${rotate} 1s ease-out;
  height: 3.35rem;
  width: 100%;
  margin-top: ${props => (props.index === 0 ? "0rem" : "0.5rem")};

  background: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(110deg, #13abe1 20%, white 20%);
  padding: 0 20px;
  border-radius: 4px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);

  font-size: 20px;
  display: flex;
  align-items: center;
  font-weight: 600;
  overflow: hidden;
`;
export { ListItem };
