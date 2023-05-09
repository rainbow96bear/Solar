import { useCallback, useState } from "react";
import Web3 from "web3";

export const useWeb3T = () => {
  const [web3T, setWeb3T] = useState();
  const [accountT, setAccountT] = useState("");
  const [chainIdT, setChainIdT] = useState("");

  const loginT = useCallback(async () => {
    try {
      if (window.ethereum) {
        let _web3;
        window.ethereum.providers
          .map(async (item, idx) => {
            if (item.isTrustWallet == true) {
              _web3 = new Web3(item);
              setWeb3T(_web3);
              const [_account] = await item.enable();
              if (_account) {
                setAccountT(_account);
              }

              item.on("accountsChanged", async () => {
                if (item && item.isTrustWallet) {
                  const [_account] = await item.enable(0);
                  setAccountT(_account);
                }
              });

              setChainIdT(item.networkVersion);
            }
          })
          .find((item) => item.isTrustWallet == true);
      } else {
        throw new Error("Trust Wallet is not exist");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { web3T, accountT, chainIdT, loginT };
};
