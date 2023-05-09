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
        if (window.ethereum.providers) {
          window.ethereum.providers
            .map(async (item, idx) => {
              if (item.isMetaMask == true) {
                _web3 = new Web3(item);
                setWeb3(_web3);
                const [_account] = await item.request({
                  method: "eth_requestAccounts",
                });
                if (_account) {
                  setAccount(_account);
                }

                item.on("accountsChanged", async () => {
                  if (item && item.isMetaMask) {
                    const [_account] = await item.request({
                      method: "eth_requestAccounts",
                    });
                    setAccount(_account);
                  }
                });

                setChainId(item.networkVersion);
              }
            })
            .find((item) => item.isMetaMask == true);
        } else alert(" Update your browser");
      } else {
        throw new Error("MetaMask is not exist");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { web3, account, chainId, login };
};
