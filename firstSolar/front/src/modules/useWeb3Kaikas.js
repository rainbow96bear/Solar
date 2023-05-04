import { useCallback, useState } from "react";
import Web3 from "web3";

export const useWeb3K = () => {
  const [web3K, setWeb3K] = useState();
  const [accountK, setAccountK] = useState("");
  const [chainIdK, setChainIdK] = useState("");

  const loginK = useCallback(async () => {
    try {
      if (window.klaytn) {
        const _web3 = new Web3(window.klaytn);
        setWeb3K(_web3);
        const [_account] = (await window.klaytn.enable())[0];
        if (_account) {
          setAccountK(_account);
        }

        window.klaytn.on("accountsChanged", async () => {
          if (window.klaytn) {
            const [_account] = (await window.klaytn.enable())[0];
            setAccountK(_account);
          }
        });

        setChainIdK(window.klaytn.networkVersion);
      } else {
        console.log("Kaikas is not exist");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { web3K, accountK, chainIdK, loginK };
};
