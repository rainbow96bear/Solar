import { useCallback, useState } from "react";
import Web3 from "web3";

export const useWeb3C = () => {
  const [web3C, setWeb3T] = useState();
  const [accountC, setAccountC] = useState("");
  const [chainIdC, setChainIdC] = useState("");

  const loginC = useCallback(async () => {
    try {
      if (window.ethereum) {
        let _web3;
        window.ethereum.providers
          .map(async (item, idx) => {
            if (item.isCoinbaseWallet == true) {
              _web3 = new Web3(item);

              setWeb3T(_web3);
              const [_account] = await item.request({
                method: "eth_requestAccounts",
              });
              if (_account) {
                setAccountC(_account);
              }

              item.on("accountsChanged", async () => {
                if (item && item.isCoinbaseWallet) {
                  const [_account] = await item.request({
                    method: "eth_requestAccounts",
                  });
                  setAccountC(_account);
                }
              });

              setChainIdC(item.networkVersion);
            }
          })
          .find((item) => item.isCoinbaseWallet == true);
      } else {
        throw new Error("Coinbase Wallet is not exist");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { web3C, accountC, chainIdC, loginC };
};
