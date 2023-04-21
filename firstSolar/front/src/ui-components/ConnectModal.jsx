/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { connectThunk } from "../modules/connect.js";
import { accountThunk } from "../modules/account.js";
import { loginThunk } from "../modules/login.js";
import metamaskLogo from "./images/metamaskLogo.jpg";
import kaikasLogo from "./images/kaikasLogo.jpg";
import walletConnectLogo from "./images/walletConnectLogo.png";
import { useWeb3 } from "../modules/useWeb3.js";
import axios from "axios";
import { Web3Button } from "@web3modal/react";
import { useWeb3K } from "../modules/useWeb3Kaikas.js";

export default function ConnectModal(props) {
  const { overrides, ...rest } = props;
  const connect = useSelector((state) => state.connect.connect.connect);
  const accountAddress = useSelector((state) => state.account.account.account);
  const dispatch = useDispatch();
  const { account, login } = useWeb3();
  const { accountK, loginK } = useWeb3K();
  const [signClient, setSignClient] = React.useState();

  const metamaskLogin = async () => {
    try {
      if (!window.ethereum) {
        return;
      }
      await login();
      const [_account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(_account);
      const data = await axios.post("http://localhost:8080/api/user/login", {
        account: _account,
        walletKind: "metamask",
      });
      dispatch(accountThunk({ account: _account }));
      dispatch(loginThunk({ login: true }));
    } catch (error) {
      console.error(error);
    }
  };

  const kaikasLogin = async () => {
    try {
      if (!window.klaytn) {
        return;
      }
      await loginK();
      const [_account] = await window.klaytn.enable();
      console.log(_account);
      const data = await axios.post("http://localhost:8080/api/user/login", {
        account: _account,
        walletKind: "kaikas",
      });
      dispatch(accountThunk({ account: _account }));
      dispatch(loginThunk({ login: true }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalCover
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        dispatch(connectThunk({ connect: false }));
      }}
    >
      <Flex
        gap="10px"
        direction="column"
        width="500px"
        height="350px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        margin="0px 23px 0px 10px"
        borderRadius="10px"
        padding="20px 20px 30px 20px"
        backgroundColor="rgba(255,255,255,1)"
        className="ConnectModal"
        {...getOverrideProps(overrides, "ConnectModal")}
        {...rest}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "ConnectModalTitle")}
        >
          <Text
            fontFamily="Do Hyeon"
            fontSize="32px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="40px"
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
            children="Connect Wallet"
            {...getOverrideProps(overrides, "Connect Wallet")}
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
            padding="0px 0px 0px 0px"
            className="cursorPointer"
            onClick={() => {
              dispatch(connectThunk({ connect: false }));
            }}
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
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "ConnectModalButton")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="300px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(220,220,220,1)"
            borderRadius="10px"
            padding="9px 21px 9px 9px"
            className="cursorPointer"
            onClick={() => {
              metamaskLogin();
            }}
            {...getOverrideProps(overrides, "ConnectModalMetamask")}
          >
            <Image
              width="40px"
              height="40px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={metamaskLogo}
              {...getOverrideProps(overrides, "metamaskLogo 1")}
            ></Image>
            <Text
              fontFamily="Do Hyeon"
              fontSize="24px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="40px"
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
              children="Metamask"
              {...getOverrideProps(overrides, "Metamask")}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="300px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(220,220,220,1)"
            borderRadius="10px"
            padding="9px 33px 9px 9px"
            className="cursorPointer"
            onClick={() => {
              kaikasLogin();
            }}
            {...getOverrideProps(overrides, "ConnectModalKaikas")}
          >
            <Image
              width="40px"
              height="40px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={kaikasLogo}
              {...getOverrideProps(overrides, "kaikasLogo 1")}
            ></Image>
            <Text
              fontFamily="Do Hyeon"
              fontSize="24px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="40px"
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
              children="Kaikas"
              {...getOverrideProps(overrides, "Kaikas")}
            ></Text>
          </Flex>
          {/* <Flex
            gap="10px"
            direction="row"
            width="300px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(220,220,220,1)"
            borderRadius="10px"
            padding="9px 33px 9px 9px"
            className="cursorPointer"
            onClick={() => {
              handleConnect();
            }}
            disbaled={!signClient}
            {...getOverrideProps(overrides, "ConnectModalKaikas37532689")}
          >
            <Image
              src={walletConnectLogo}
              width="40px"
              height="40px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "kaikasLogo 137532690")}
            ></Image> */}

          <Web3Button
            className="Web3Button"
            label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Connect Wallet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          ></Web3Button>
          {/* <Text
              fontFamily="Do Hyeon"
              fontSize="24px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="40px"
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
              children="Wallet Connect"
              {...getOverrideProps(overrides, "WalletConnect")}
            ></Text>
          </Flex> */}
        </Flex>
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
// const QRCodeModal = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.4);
//   display: flex;
//   position: fixed;
//   left: 0%;
//   top: 0%;
//   right: 0%;
//   // bottom: 0%;
//   justify-content: center;
//   align-items: center;
//   z-index: 89;
// `;
