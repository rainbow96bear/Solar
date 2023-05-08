import { useCallback, useState } from "react";
import Web3 from "web3";

export const useWeb3T = () => {
  const [web3T, setWeb3T] = useState();
  const [accountT, setAccountT] = useState("");
  const [chainIdT, setChainIdT] = useState("");

  const loginT = useCallback(async () => {
    try {
      if (window.trustwallet && window.trustwallet.solana.isTrust) {
        const _web3 = new Web3(window.trustwallet);
        setWeb3T(_web3);
        const [_account] = await window.trustwallet.request({
          method: "eth_requestAccounts",
        });
        if (_account) {
          setAccountT(_account);
        }

        window.trustwallet.on("accountsChanged", async () => {
          if (window.trustwallet) {
            const [_account] = await window.trustwallet.request({
              method: "eth_requestAccounts",
            });
            setAccountT(_account);
          }
        });

        setChainIdT(window.trustwallet.networkVersion);
      } else {
        console.log("Trust Wallet is not exist");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { web3T, accountT, chainIdT, loginT };
};
