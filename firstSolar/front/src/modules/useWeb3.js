import { useCallback, useState } from "react";
import Web3 from "web3";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");

  const login = useCallback(async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        let _web3;
        if (window.ethereum.isMetaMask) {
          _web3 = new Web3(window.ethereum);
          setWeb3(_web3);
          const [_account] = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          if (_account) {
            setAccount(_account);
          }
          window.ethereum.on("accountsChanged", async () => {
            if (window.ethereum && window.ethereum.isMetaMask) {
              const [_account] = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              setAccount(_account);
            }
          });
          setChainId(window.ethereum.networkVersion);
        }
      } else {
        throw new Error("MetaMask is not exist");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { web3, account, chainId, login };
};
