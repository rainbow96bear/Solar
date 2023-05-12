import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ListItem } from "./listitem";
import { Text } from "@aws-amplify/ui-react";
import "../../css/Font.css";
import "../../css/RankList.css";

const ListMain = ({ items }) => {
  return (
    <SkewContainer>
      <RankName>
        <RankNameList>
          <Text
            color="rgba(54,43,33,0.8)"
            fontFamily="ffProBook"
            fontSize="16px"
            fontWeight="500"
            textAlign="center"
            display="flex"
            width="unset"
            height="25px"
            gap="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Rank"
          ></Text>
          <Text
            color="rgba(54,43,33,0.8)"
            paddingRight="35px"
            fontFamily="ffProBook"
            fontSize="16px"
            fontWeight="500"
            textAlign="center"
            display="flex"
            width="unset"
            height="25px"
            gap="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pool"
          ></Text>
          <Text
            color="rgba(54,43,33,0.8)"
            fontFamily="ffProBook"
            fontSize="16px"
            fontWeight="500"
            textAlign="center"
            display="flex"
            width="unset"
            height="25px"
            gap="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="TVL"
          ></Text>
        </RankNameList>
      </RankName>
      <Wrapper>
        <ShadowTop />
        <TransitionContainer>
          <>
            {items?.map(
              (item, idx) =>
                idx !== items?.length - 1 && (
                  <ListItem
                    key={`ListItem-${idx}`}
                    index={idx}
                    content={item}
                  />
                )
            )}
          </>
        </TransitionContainer>
        <ShadowBottom />
      </Wrapper>
    </SkewContainer>
  );
};

const SkewContainer = styled.div`
  position: relative;
  perspective: 500;
  margin-top: 55px;
  margin-bottom: 35px;
  scale: 0.86;

  @media only screen and (max-width: 768px) {
    scale: 0.71;
    margin-right: 45px;
  }

  @media only screen and (max-width: 479px) {
    scale: 0.69;
    margin-right: 45px;
  }
  @media only screen and (max-width: 415px) {
    scale: 0.6;
    margin-right: 45px;
  }
  @media only screen and (max-width: 375px) {
    scale: 0.51;
    margin-right: 45px;
  }
`;

const Wrapper = styled.div`
  flex-direction: column;
  height: 16rem;
  width: 30rem;
  margin: auto;
  z-index: 10;
  box-shadow: 28px 25px 38px rgba(0, 0, 0, 0.25);
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
  background: #373c38;
  position: absolute;
`;

const ShadowTop = styled(Shadow)`
  background: linear-gradient(to bottom, #ffd900 10%, transparent 70%);
  top: 0;
`;

const ShadowBottom = styled(Shadow)`
  background: linear-gradient(to top, #ffd900 10%, transparent 70%);
  bottom: 0;
`;

const RankName = styled.div`
  flex-direction: row;
  width: 30rem;
  z-index: 10;
  transform: rotate3d(2, -2, 0, 20deg);
  overflow: hidden;
`;

const RankNameList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  text-align: center;
`;

export { ListMain };
