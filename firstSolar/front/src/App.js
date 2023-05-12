import "./App.css";

// 라이브러리 import
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

// walletConenct import
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

// 컴포넌트 import
import HeaderContainer from "./components/header/Container";
import MainContainer from "./components/main/Container";

import SwapContainer from "./components/swap/Container";
import LiquidityContainer from "./components/liquidity/Container";
import MypageContainer from "./components/mypage/Container";
import NavigatorContainer from "./components/navigateHome/Container";
import EmptySearchModal from "./ui-components/EmptySearchModal";

import { OutRedirectModal } from "./ui-components";
import SearchNavigatorContainer from "./components/navigateSearch/Container";
import FooterContainer from "./components/footer/Container";

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
  const emptySearch = useSelector((state) => state.emptySearch);

  const outRedirectModalOpen = useSelector(
    (state) => state.outRedirectModalOpen.isOpen
  );

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <div className="App">
          <HeaderContainer></HeaderContainer>
          <MainContent>
            <Routes>
              <Route path="/" element={<MainContainer />}></Route>
              <Route path="/swap" element={<SwapContainer />}></Route>
              <Route
                path="/addliquidity"
                element={<LiquidityContainer />}
              ></Route>
              <Route path="/mypage" element={<MypageContainer />}></Route>
              <Route path="/search" element={<MainContainer />} />
              <Route
                path="/searchRedirect"
                element={<SearchNavigatorContainer></SearchNavigatorContainer>}
              />
              <Route
                path="/redirectHome"
                element={<NavigatorContainer></NavigatorContainer>}
              ></Route>
            </Routes>
          </MainContent>
          <FooterContainer />
          {emptySearch && (
            <LoadingModal>
              <EmptySearchModal className="marginT" />
            </LoadingModal>
          )}
          {outRedirectModalOpen && (
            <LoadingModal>
              <OutRedirectModal />
            </LoadingModal>
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
  z-index: 9999;
  padding-left: 10px;
  padding-right: 10px;
`;
