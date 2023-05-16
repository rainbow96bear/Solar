/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useEffect } from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, Icon } from "@aws-amplify/ui-react";

export default function QuestionModal(props) {
  const {
    overrides,
    firstSelectToken,
    setQuestionMark,
    setSecondSelectToken,
    ...rest
  } = props;

  const tokenList = ["DFS", "ETH", "USDT", "BNB"];
  const tokenListDescription = [
    "Solar's token",
    "Ethereum token",
    "Stablecoin pegged to USD 1:1 ratio by Tether.",
    "Binance Chain Native Token",
  ];

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <ModalCover
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
      }}
    >
      <Flex
        gap="31px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        borderRadius="35px"
        padding="25px 25px 59px 25px"
        backgroundImage="linear-gradient(-7deg, #FDFCF5, #FDFCF5)"
        {...getOverrideProps(overrides, "SelTokken768px")}
        {...rest}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="35px 9px 35px 9px"
          className="cursorPointer"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setQuestionMark(0);
          }}
          {...getOverrideProps(overrides, "XIcon")}
        >
          <Icon
            width="13px"
            height="13px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
            paths={[
              {
                d: "M3.59236 0L0 3.59236L1.8344 5.42675L6.36943 10.0382L1.8344 14.5732L0 16.3312L3.59236 20L5.42675 18.1656L10.0382 13.5541L14.5732 18.1656L16.3312 20L20 16.3312L18.1656 14.5732L13.5541 10.0382L18.1656 5.42675L20 3.59236L16.3312 1.13144e-15L14.5732 1.8344L10.0382 6.36943L5.42675 1.8344L3.59236 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="35px 9px 35px 9px"
          {...getOverrideProps(overrides, "Frame 131")}
        >
          <Text
            fontFamily="ffProExtraLight"
            fontSize="38px"
            fontWeight="700"
            lineHeight="57px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Select a Token"
            {...getOverrideProps(overrides, "Select a Token")}
          ></Text>
        </Flex>
        {firstSelectToken == "DFS"
          ? tokenList
              .filter((token) => token !== "DFS")
              .map((item) => (
                <Flex
                  key={`tokenList${item}`}
                  gap="16px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  backgroundColor="rgba(255,226,0,0.35)"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setQuestionMark(0);
                    setSecondSelectToken(item);
                  }}
                  {...getOverrideProps(overrides, "MapList40632581")}
                >
                  <Flex
                    gap="25px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="center"
                    grow="1"
                    shrink="1"
                    basis="0"
                    alignSelf="stretch"
                    position="relative"
                    borderRadius="25px"
                    padding="11px 13px 11px 13px"
                    {...getOverrideProps(overrides, "Dexname140632582")}
                  >
                    <Flex
                      gap="8px"
                      direction="column"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      grow="1"
                      shrink="1"
                      basis="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 13540632584")}
                    >
                      <Text
                        fontFamily="ffProExtraLight"
                        fontSize="20px"
                        fontWeight="700"
                        lineHeight="24.204544067382812px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="16px"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children={item}
                        {...getOverrideProps(overrides, "USDT40632585")}
                      ></Text>
                      <Text
                        fontFamily="ffProExtraLight"
                        fontSize="15px"
                        fontWeight="700"
                        lineHeight="18.15340805053711px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="16px"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children={tokenListDescription[tokenList.indexOf(item)]}
                        {...getOverrideProps(
                          overrides,
                          "Binance Chain Native Token40632586"
                        )}
                      ></Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))
          : firstSelectToken != "DFS" && (
              <Flex
                gap="16px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                backgroundColor="rgba(255,226,0,0.35)"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setQuestionMark(0);
                  setSecondSelectToken("DFS");
                }}
                {...getOverrideProps(overrides, "MapList40632581")}
              >
                <Flex
                  gap="25px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  borderRadius="25px"
                  padding="11px 13px 11px 13px"
                  {...getOverrideProps(overrides, "Dexname140632582")}
                >
                  <Flex
                    gap="8px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 13540632584")}
                  >
                    <Text
                      fontFamily="ffProExtraLight"
                      fontSize="20px"
                      fontWeight="700"
                      lineHeight="24.204544067382812px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="16px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="DFS"
                      {...getOverrideProps(overrides, "USDT40632585")}
                    ></Text>
                    <Text
                      fontFamily="ffProExtraLight"
                      fontSize="15px"
                      fontWeight="700"
                      lineHeight="18.15340805053711px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="16px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="Solar's token"
                      {...getOverrideProps(
                        overrides,
                        "Binance Chain Native Token40632586"
                      )}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
            )}
      </Flex>
    </ModalCover>
  );
}

const ModalCover = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  align-items: center;
  z-index: 88;

  .ConnectModal {
    display: flex;
    justify-content: center;

    .cursorPointer {
      cursor: pointer;
    }
  }
  .Web3Button {
    button {
      background-color: orange !import;
    }
  }
`;
