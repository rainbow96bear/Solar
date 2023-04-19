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
    // logoutMethod();
    // 로그인, 계정 변경, 로그아웃 모두 감지해버려서 일단 지워뒀다.
  });

  window.klaytn?.on("accountsChanged", (accounts) => {
    // logoutMethod();
  });

  useEffect(() => {
    // header는 어디에나 있다. 새로고침해도 로그인한 상태를 유지시키도록 하기 위해 최초에 mount될 때 실행하도록 하였다.
    console.log("mount 되었다. 쿠키로 로그인 여부 판정 실시");

    (async () => {
      // 이 자리에 로딩을 띄울 계획이다.
      if (!document.cookie) return;
      // 쿠키가 없으면 그냥 취소. 이 이상은 메모리 낭비.
      console.log("쿠키 있다.");
      if (document.cookie.split(":")[0] == "metamask") {
        // 쿠키를 :으로 잘라 첫번째가 metamask라면
        const [_account] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        dispatch(accountThunk({ account: _account }));
        dispatch(connectThunk({ connect: true }));
        console.log("메타마스크였다.");
      } else if (document.cookie.split(":")[0] == "kaikas") {
        // 쿠키를 :으로 잘라 첫번째가 kaikas라면

        const kaikasWallet = (await window.klaytn.enable())[0];
        dispatch(accountThunk({ account: kaikasWallet }));
        dispatch(connectThunk({ connect: true }));
        console.log("카이카스였다.");
      }
      // 이렇게 지갑을 나눌 이유가 현재로서는 없으나 추후에 지갑 종류에 따라 다르게 나타날 수도 있으니 나눈다.
    })();
  }, []);
  return <HeaderComponent></HeaderComponent>;
};
export default HeaderContainer;
