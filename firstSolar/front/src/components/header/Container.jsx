import { useEffect } from "react";
import HeaderComponent from "./Component";
import { useDispatch, useSelector } from "react-redux";
import { setConnect } from "../../modules/connect.js";
import { setAccount } from "../../modules/account.js";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../modules/login";

const HeaderContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (!document.cookie) return;
        const [_account] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        dispatch(setAccount(_account));
        dispatch(setLogin(true));
        dispatch(setConnect(true));
        // if (document.cookie.split(":")[0] == "metamask") {
        //   window.ethereum.providers.map(async (item, idx) => {
        //     if (item.isMetaMask == true) {
        //       const [_account] = await item.request({
        //         method: "eth_requestAccounts",
        //       });
        //       dispatch(setAccount(_account));
        //       dispatch(setLogin(true));
        //       dispatch(setConnect( true ));
        //     }
        //   });
        // } else if (document.cookie.split(":")[0] == "trust") {
        //   window.ethereum.providers.map(async (item, idx) => {
        //     if (item.isTrustWallet == true) {
        //       const [_account] = await item.request({
        //         method: "eth_requestAccounts",
        //       });
        //       dispatch(setAccount(_account));
        //       dispatch(setLogin(true));
        //       dispatch(setConnect(true ));
        //     }
        //   });
        // } else if (document.cookie.split(":")[0] == "coinbase") {
        //   window.ethereum.providers.map(async (item, idx) => {
        //     if (item.isCoinbaseWallet == true) {
        //       const [_account] = await item.request({
        //         method: "eth_requestAccounts",
        //       });
        //       dispatch(setAccount(_account));
        //       dispatch(setLogin(true));
        //       dispatch(setConnect(true ));
        //     }
        //   });
        // }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return <HeaderComponent></HeaderComponent>;
};
export default HeaderContainer;
