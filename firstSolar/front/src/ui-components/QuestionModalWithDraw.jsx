/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, Icon, TextAreaField } from "@aws-amplify/ui-react";
import logo from "./images/logo_new.png";
import "../css/Font.css";
import { useDispatch, useSelector } from "react-redux";
import { useWeb3 } from "../modules/useWeb3";
import { useWeb3K } from "../modules/useWeb3Kaikas";
import { getLPBalance } from "../api";
import { useAccount } from "wagmi";
import { isLoadingThunk } from "../modules/isLoading";
import { withDraw } from "../api";

export default function QuestionModalWithDraw(props) {
  const { overrides, setquestionmark, ...rest } = props;

  const { web3, login } = useWeb3();
  const { loginK } = useWeb3K();
  const [lpBalance, setLpBalance] = React.useState();
  const dispatch = useDispatch();
  const { account } = useAccount();
  const account2 = useSelector((state) => state.account.account.account);
  const [withDrawAmountValue, setWithDrawAmountValue] = React.useState(0);

  const [withDrawSuccessModalOpen, setWithDrawSuccessModalOpen] =
    React.useState(false);
  const [withDrawFailModalOpen, setWithDrawFailModalOpen] =
    React.useState(false);

  React.useEffect(() => {
    if (document.cookie) {
      if (document.cookie.split(":")[0] == "metamask") {
        login();
      } else if (document.cookie.split(":")[0] == "kaikas") {
        loginK();
      }
    }
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        const result = await getLPBalance(
          props?.pid, // 이거 아닌듯?
          account ? account : account2
        );

        setLpBalance(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const withDrawFunc = async () => {
    try {
      dispatch(isLoadingThunk({ isLoading: true }));

      const result2 = await withDraw(
        account2 ? account2 : account,
        withDrawAmountValue,
        props?.lptoken
      );

      let transactionResult2 = await web3.eth.sendTransaction(result2);
      setWithDrawAmountValue(0);

      await props.mypagelplistup();
      const result = await getLPBalance(
        props?.pid,
        account ? account : account2
      );
      setLpBalance(result);
      dispatch(isLoadingThunk({ isLoading: false }));
      setWithDrawSuccessModalOpen(true);
    } catch (error) {
      console.error(error);
      dispatch(isLoadingThunk({ isLoading: false }));
      setWithDrawFailModalOpen(true);
    }
  };

  React.useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <ModalCover
      onClick={(e) => {
        e.preventDefault;
        if (e.target !== e.currentTarget) return;
      }}
    >
      <Flex
        gap="38px"
        direction="column"
        width="53vw"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        borderRadius="50px"
        padding="0px 0px 45px 0px"
        backgroundColor="rgba(255,255,255,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        {...getOverrideProps(overrides, "Deposit1024px")}
        {...rest}
      >
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
          padding="35px 66px 35px 66px"
          style={{
            borderBottom: "1px dashed rgba(234,0,50,0.45)",
            borderWidth: "2px",
          }}
          {...getOverrideProps(overrides, "Frame 105")}
        >
          <Text
            fontFamily="ffProBold"
            fontSize="28px"
            fontWeight="700"
            lineHeight="29.045454025268555px"
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
            children="With Draw"
            {...getOverrideProps(overrides, "Deposit40822779")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="5px 5px 5px 5px"
            className="cursorPointer"
            style={{ cursor: "pointer" }}
            {...getOverrideProps(overrides, "XIcon")}
          >
            <Icon
              width="20px"
              height="20px"
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
              onClick={() => {
                setquestionmark(0);
              }}
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
        </Flex>
        <Flex
          gap="43px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 74px 0px 74px"
          {...getOverrideProps(overrides, "Frame 106")}
        >
          <Flex
            gap="11px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 96")}
          >
            <Text
              fontFamily="ffProLight"
              fontSize="15px"
              fontWeight="600"
              lineHeight="18.15340805053711px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="TOKEN PAIR"
              {...getOverrideProps(overrides, "CHOOSE TOKEN PAIR")}
            ></Text>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 90")}
            >
              <Flex
                gap="5px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="25px"
                padding="10px 12px 10px 12px"
                backgroundColor="rgba(234,0,50,0.45)"
                {...getOverrideProps(overrides, "Dexname140822784")}
              >
                <Image
                  width="28px"
                  height="28px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="35px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={props.mypagelist.mainNetLogo || logo}
                  {...getOverrideProps(overrides, "ghrgclzzd 740822785")}
                ></Image>
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="17px"
                  fontWeight="600"
                  color="rgba(244,244,244,1)"
                  lineHeight="20.573863983154297px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="16px"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={props.mypagelist.firstToken || "불러오는 중"}
                  {...getOverrideProps(overrides, "DEX Name40822786")}
                ></Text>
                <Image
                  width="15px"
                  height="15px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="35px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "ghrgclzzd 840822787")}
                ></Image>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "Frame 91")}
              >
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="33px"
                  fontWeight="600"
                  lineHeight="39.9375px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="+"
                  {...getOverrideProps(overrides, "+")}
                ></Text>
              </Flex>
              <Flex
                gap="5px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="25px"
                padding="10px 12px 10px 12px"
                backgroundColor="rgba(0,136,153,0.59)"
                {...getOverrideProps(overrides, "Dexname2")}
              >
                <Image
                  width="28px"
                  height="28px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="35px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={props.mypagelist.platformLogo || logo}
                  {...getOverrideProps(overrides, "ghrgclzzd 740822791")}
                ></Image>
                <Text
                  fontFamily="ffProExtraLight"
                  fontSize="17px"
                  fontWeight="600"
                  color="rgba(239,239,239,1)"
                  lineHeight="20.573863983154297px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="16px"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={props.mypagelist.secondToken || "불러오는 중"}
                  {...getOverrideProps(overrides, "DEX Name40822792")}
                ></Text>
                <Image
                  width="15px"
                  height="15px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  borderRadius="35px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "ghrgclzzd 840822793")}
                ></Image>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="12px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 102")}
          >
            <Text
              fontFamily="ffProLight"
              fontSize="15px"
              fontWeight="600"
              lineHeight="18.15340805053711px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="With Draw AMOUNT"
              {...getOverrideProps(overrides, "DEPOSIT AMOUNT")}
            ></Text>
            <Flex
              gap="9px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 101")}
            >
              <Flex
                gap="9px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 98")}
              >
                <Flex
                  gap="5px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  borderRadius="25px"
                  padding="11px 0px 11px 0px"
                  {...getOverrideProps(overrides, "Dexname140822806")}
                >
                  <Image
                    width="28px"
                    height="28px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="35px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    src={props.mypagelist.mainNetLogo || logo}
                    {...getOverrideProps(overrides, "ghrgclzzd 740822807")}
                  ></Image>
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="17px"
                    fontWeight="600"
                    lineHeight="20.573863983154297px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="16px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={props?.lptoken || "불러오는 중"}
                    {...getOverrideProps(overrides, "DEX Name40822808")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-end"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Frame 9740822812")}
                >
                  <Text
                    fontFamily="ffProExtraLight"
                    fontSize="13px"
                    fontWeight="600"
                    lineHeight="15.732954025268555px"
                    textAlign="right"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="256px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={`Balance :${
                      parseInt((lpBalance / 10 ** 18) * 10000) / 10000 || 0
                    }`}
                    {...getOverrideProps(overrides, "Balance : 040822813")}
                  ></Text>
                </Flex>
              </Flex>
              <TextAreaField
                width="unset"
                height="unset"
                placeholder="0.0"
                shrink="0"
                alignSelf="stretch"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={withDrawAmountValue}
                onInput={(e) => setWithDrawAmountValue(e.target.value)}
                {...getOverrideProps(overrides, "TextAreaField40822814")}
              ></TextAreaField>
            </Flex>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="66px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="15px"
            padding="13px 73px 13px 73px"
            backgroundColor="rgba(234,0,50,0.45)"
            style={{ cursor: "pointer" }}
            onClick={() => {
              withDrawFunc();
            }}
            {...getOverrideProps(overrides, "Frame 103")}
          >
            <Text
              fontFamily="ffProMedium"
              fontSize="27px"
              fontWeight="700"
              color="rgba(244,244,244,1)"
              lineHeight="32.6761360168457px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="364.13px"
              height="30.98px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="With Draw"
              {...getOverrideProps(overrides, "Deposit40822827")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      {withDrawSuccessModalOpen && (
        <LoadingModal>
          {/* <SwapSuccessModal
              setSwapSuccessModalOpen={setSwapSuccessModalOpen}
              firstSelectToken={firstSelectToken}
              secondSelectToken={secondSelectToken}
            /> */}
        </LoadingModal>
      )}
      {withDrawFailModalOpen && (
        <LoadingModal>
          {/* <SwapFailModal
              setSwapFailModalOpen={setSwapFailModalOpen}
              firstSelectToken={firstSelectToken}
              secondSelectToken={secondSelectToken}
            /> */}
          {/* 모달  */}
        </LoadingModal>
      )}
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
  // bottom: 0%;
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

const LoadingModal = styled.div`
  width: 100vmax;
  height: 100vmax;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  align-items: center;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  z-index: 999999999;
`;
