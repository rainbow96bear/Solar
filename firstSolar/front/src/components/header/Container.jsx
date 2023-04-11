import { useEffect } from "react";
import HeaderComponent from "./Component";
import { useDispatch, useSelector } from "react-redux";
import { connectThunk } from "../../modules/connect.js";
import { accountThunk } from "../../modules/account.js";
import { useNavigate } from "react-router-dom";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const connect = useSelector((state) => state.connect.connect.connect);
  const account = useSelector((state) => state.account.account.account);
  const navigate = useNavigate();

  const logoutMethod = () => {
    document.cookie =
      document.cookie.split(":")[0] +
      account +
      "=; expires=Thu, 01 Jan 1999 00:00:10 GMT";
    dispatch(connectThunk({ connect: false }));
    navigate("/");
  };
  const logout = () => {
    logoutMethod();
  };

  window.ethereum?.on("accountsChanged", (accounts) => {
    logoutMethod();
  });

  window.klaytn?.on("accountsChanged", (accounts) => {
    logoutMethod();
  });

  useEffect(() => {
    console.log("mount 되었다. 쿠키로 로그인 여부 판정 실시");

    (async () => {
      if (!document.cookie) return;
      if (document.cookie.split(":")[0] == "metamask") {
        const [_account] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        dispatch(connectThunk({ connect: true }));
        dispatch(accountThunk({ account: _account }));
      } else if (document.cookie.split(":")[0] == "kaikas") {
        const kaikasWallet = (await window.klaytn.enable())[0];
        dispatch(connectThunk({ connect: true }));
        dispatch(accountThunk({ account: kaikasWallet }));
      }
    })();
  }, []);
  return <HeaderComponent logout={logout}></HeaderComponent>;
};
export default HeaderContainer;
