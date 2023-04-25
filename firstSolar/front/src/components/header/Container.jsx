import { useEffect } from "react";
import HeaderComponent from "./Component";
import { useDispatch, useSelector } from "react-redux";
import { connectThunk } from "../../modules/connect.js";
import { accountThunk } from "../../modules/account.js";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../modules/login";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const connect = useSelector((state) => state.connect.connect.connect);
  const account = useSelector((state) => state.account.account.account);
  const navigate = useNavigate();

  window.ethereum?.on("accountsChanged", (accounts) => {
    // logoutMethod();
    // 로그인, 계정 변경, 로그아웃 모두 감지해버려서 일단 지워뒀다.
  });

  window.klaytn?.on("accountsChanged", (accounts) => {
    // logoutMethod();
  });

  useEffect(() => {
    (async () => {
      if (!document.cookie) return;
      if (document.cookie.split(":")[0] == "metamask") {
        const [_account] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        dispatch(accountThunk({ account: _account }));
        dispatch(loginThunk({ login: true }));
        dispatch(connectThunk({ connect: true }));
      } else if (document.cookie.split(":")[0] == "kaikas") {
        const kaikasWallet = (await window.klaytn.enable())[0];
        dispatch(accountThunk({ account: kaikasWallet }));
        dispatch(loginThunk({ login: true }));
        dispatch(connectThunk({ connect: true }));
      }
    })();
  }, []);
  return <HeaderComponent></HeaderComponent>;
};
export default HeaderContainer;
