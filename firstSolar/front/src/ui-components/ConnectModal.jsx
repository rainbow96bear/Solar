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
import metamaskLogo from "./images/metamaskLogo.jpg";
import kaikasLogo from "./images/kaikasLogo.jpg";
import walletConnectLogo from "./images/walletConnectLogo.png";
import { useWeb3 } from "../modules/useWeb3.js";
import { Web3Button, Web3Modal, useWeb3Modal } from "@web3modal/react";
import { projectId, ethereumClient } from "../App.js";
import axios from "axios";
import WalletConnectClient from "@walletconnect/client";

export default function ConnectModal(props) {
  const { overrides, ...rest } = props;
  const { open } = useWeb3Modal();
  const [qrCodeModalOpen, setQrCodeModalOpen] = React.useState(false);
  const [qrcodeSrc, setQrcodeSrc] = React.useState();
  const connect = useSelector((state) => state.connect.connect.connect);
  const accountAddress = useSelector((state) => state.account.account.account);
  const dispatch = useDispatch();
  const { account, login } = useWeb3();

  const metamaskLogin = async () => {
    try {
      login();
      const [_account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const data = await axios.post("http://localhost:8080/api/user/login", {
        account: _account,
        walletKind: "metamask",
      });
      dispatch(accountThunk({ account: _account }));
    } catch (error) {
      console.error(error);
    }
  };

  const kaikasLogin = async () => {
    try {
      if (!window.klaytn) {
        return;
      }
      if (window.klaytn.isKaikas) {
        const kaikasWallet = (await window.klaytn.enable())[0];

        const data = await axios.post("http://localhost:8080/api/user/login", {
          account: kaikasWallet,
          walletKind: "kaikas",
        });
        dispatch(accountThunk({ account: kaikasWallet }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openQrCodeModal = async () => {
    const client = new WalletConnectClient({
      bridge: "https://bridge.walletconnect.org", // WalletConnect bridge URL
      qrcodeModal: true, // QR 코드 모달 사용 여부
    });

    await client.connect();

    // QR 코드 모달을 열기 위한 로직 (예시)
    setQrCodeModalOpen(true);

    // QR 코드 모달이 열린 후, QR 코드를 출력
    const uri = client.uri;
    // QR 코드를 출력하는 로직 (예시)
    console.log(uri);

    client.qrcodeModal.open();

    client.qrcodeModal.on("scan", async (error, payload) => {
      if (error) {
        // 스캔 실패 시 처리
        console.error(error);
      } else {
        // 스캔 성공 시 처리
        console.log(payload);
        // payload를 사용하여 세션을 연결하거나 다른 로직 수행

        // 세션 생성
        try {
          await client.createSession(payload); // payload를 사용하여 세션 생성
          console.log("WalletConnect 세션 생성 완료");
          // 세션 생성 이후에 원하는 로직을 수행
        } catch (error) {
          console.error("WalletConnect 세션 생성 실패", error);
        }
      }
    });
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
        margin="0px 10px 0px 10px"
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
              openQrCodeModal();
            }}
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
            ></Image>

            {/* <Web3Button className="Web3Button"></Web3Button> */}
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
              children="Wallet Connect"
              {...getOverrideProps(overrides, "WalletConnect")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      {qrCodeModalOpen && (
        // QR 코드 모달을 구현하는 로직 (예시)
        <div>
          <div>WalletConnect QR Code</div>
          {/* QR 코드 출력 */}
          {/* QR 코드를 스마트폰으로 스캔하는 로직 (예시) */}
        </div>
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
const QRCodeModal = styled.div`
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
  z-index: 89;
`;
