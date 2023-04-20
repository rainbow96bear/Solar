import logo from "./logo.svg";
import "./App.css";

// 라이브러리 import
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { accountThunk } from "./modules/account.js";
import { useWeb3 } from "./modules/useWeb3";
import { useWeb3K } from "./modules/useWeb3Kaikas";

// walletConenct import
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { useWeb3React } from "@web3modal/ethereum";
import { useWeb3Modal } from "@web3modal/react";

// 컴포넌트 import
import HeaderContainer from "./components/header/Container";
import MainContainer from "./components/main/Container";
import FooterContainer from "./components/footer/Container";
import { Swap320px } from "./ui-components";
import { connectThunk } from "./modules/connect";

const chains = [arbitrum, mainnet, polygon];
const projectId = "33e35c4e1e0d029fde76e4633b08ab6e";

const explorerExcludedWalletIds = "ALL";
const { provider } = configureChains(chains, [
  w3mProvider({
    projectId,
  }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  const isLoading = useSelector(state => state.isLoading.isLoading.isLoading);
  const connect = useSelector(state => state.connect.connect.connect);
  const accountAddress = useSelector(state => state.account.account.account);
  const dispatch = useDispatch();

  const { web3, account, chainId, login } = useWeb3();
  const { web3K, accountK, chainIdK, loginK } = useWeb3K();

  const accountWagmi = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log("Connected", { address, connector, isReconnected });
    },
    onDisconnect() {
      dispatch(connectThunk({ connect: false }));
    },
  });

  useEffect(() => {
    if (document.cookie) {
      if (document.cookie.split(":")[0] == "metamask") {
        login();
        dispatch(accountThunk({ account: account }));
      } else if (document.cookie.split(":")[0] == "kaikas") {
        loginK();
        dispatch(accountThunk({ account: accountK }));
      }
    }
  }, [account]);

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <div className="App">
          <HeaderContainer></HeaderContainer>
          <MainContent>
            <Routes>
              <Route path="/" element={<MainContainer />}></Route>
              <Route path="/swap" element={<></>}></Route>
            </Routes>
          </MainContent>
          <FooterContainer></FooterContainer>

          {/* 로딩 중에는 로딩 창이 뜨도록 할 것입니다. */}
          {isLoading ? (
            <LoadingModal>
              {/* <UserLoading /> 
          이 자리에는 로딩 도중의 모달 창이 들어갈 예정입니다.*/}
            </LoadingModal>
          ) : (
            <></>
          )}
        </div>
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        explorerExcludedWalletIds={explorerExcludedWalletIds}
      ></Web3Modal>
    </>
  );
}

export default App;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const LoadingModal = styled.div`
  width: 100vmax;
  height: 100vmax;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  z-index: 999999999;
`;
