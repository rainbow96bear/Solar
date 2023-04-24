import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { ListItem } from "./listitem";

const ListMain = () => {
  const staticItems = [
    "Employee Birthdates",
    "Company Events",
    "Pending workflows",
    "Upcoming deadlines",
    "Target agreements",
    "Calendar entries",
  ];
  const [items, setItems] = useState(staticItems.slice(0, 6));
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const nextTop = prev[prev.length - 1];
        const newShown = prev.slice(0, prev.length - 1);
        return [nextTop, ...newShown];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SkewContainer>
      <Wrapper>
        <ShadowTop />
        <TransitionContainer>
          {items.map(
            (item, i) =>
              i !== items.length - 1 && (
                <ListItem key={Math.random()} index={i} content={item} />
              )
          )}
        </TransitionContainer>
        <ShadowBottom />
      </Wrapper>
    </SkewContainer>
  );
};

const SkewContainer = styled.div`
  position: relative;
  perspective: 500;
`;

const Wrapper = styled.div`
  flex-direction: column;
  height: 16rem;

  width: 30rem;
  margin: auto;
  z-index: 10;

  transform: rotate3d(2, -2, 0, 20deg);
  overflow: hidden;
`;

const TransitionContainer = styled.div`
  height: 100%;
`;
const Shadow = styled.div`
  height: 1rem;
  z-index: 100;
  width: 100%;
  background: #222;
  position: absolute;
`;

const ShadowTop = styled(Shadow)`
  background: linear-gradient(to bottom, #222 30%, transparent 70%);
  top: 0;
`;

const ShadowBottom = styled(Shadow)`
  background: linear-gradient(to top, #222 30%, transparent 70%);
  bottom: 0;
`;
export { ListMain };
