import logo from "./logo.svg";
import "./App.css";

// 라이브러리 import
import { useDispatch, useSelector } from "react-redux";
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
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, klaytn, mainnet, polygon } from "wagmi/chains";

// 컴포넌트 import
import HeaderContainer from "./components/header/Container";
import MainContainer from "./components/main/Container";
import { useEffect } from "react";
import { Swap320px } from "./ui-components";

const chains = [arbitrum, mainnet, polygon, klaytn];
export const projectId = "33e35c4e1e0d029fde76e4633b08ab6e";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
export const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  const isLoading = useSelector((state) => state.isLoading.isLoading.isLoading);
  const connect = useSelector((state) => state.connect.connect.connect);
  const accountAddress = useSelector((state) => state.account.account.account);
  const dispatch = useDispatch();

  const { web3, account, chainId, login } = useWeb3();
  const { web3K, accountK, chainIdK, loginK } = useWeb3K();

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
    <div className="App">
      <WagmiConfig client={wagmiClient}>
        <HeaderContainer></HeaderContainer>
      </WagmiConfig>
      <Routes>
        <Route path="/" element={<MainContainer />}></Route>
      </Routes>

      {/* 로딩 중에는 로딩 창이 뜨도록 할 것입니다. */}
      {isLoading ? (
        <LoadingModal>
          {/* <UserLoading /> 
          이 자리에는 로딩 도중의 모달 창이 들어갈 예정입니다.*/}
        </LoadingModal>
      ) : (
        <></>
      )}
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  );
}

export default App;

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
