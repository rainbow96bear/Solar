import { useCallback, useState } from "react";
import Web3 from "web3";

export const useWeb3C = () => {
  const [web3C, setWeb3C] = useState();
  const [accountC, setAccountC] = useState("");
  const [chainIdC, setChainIdC] = useState("");

  const loginC = useCallback(async () => {
    try {
      if (window.ethereum && window.web3.currentProvider.isCoinbaseWallet) {
        const _web3 = new Web3(window.web3.currentProvider);
        setWeb3C(_web3);
        const [_account] = await window.web3.currentProvider.request({
          method: "eth_requestAccounts",
        });
        if (_account) {
          setAccountC(_account);
        }

        window.ethereum.on("accountsChanged", async () => {
          if (window.ethereum) {
            const [_account] = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            setAccountC(_account);
          }
        });

        window.ethereum.publicConfigStore.on("update", () => {
          setChainIdC(window.ethereum.networkVersion);
        });

        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        });

        return true;
      } else {
        console.log("Coinbase Wallet is not installed");
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  }, []);

  return { web3C, accountC, chainIdC, loginC };
};
