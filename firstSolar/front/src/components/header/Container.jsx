import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAccount } from "wagmi";

import HeaderComponent from "./Component";
import { setConnect } from "../../modules/connect.js";
import { setAccount } from "../../modules/account.js";
import { setLogin } from "../../modules/login";

const HeaderContainer = () => {
  const [inputValue, setInputValue] = useState();
  const [view, setView] = useState(false);
  const [searchView, setSearchView] = useState(false);

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const ref = useRef();
  const navigate = useNavigate();
  const { address } = useAccount();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
    setInputValue((prevInputValue) => sanitizedValue);
  };

  const handleSearch = () => {
    const searchQuery = encodeURIComponent(inputValue);
    navigate("/searchRedirect", { state: { searchData: searchQuery } });

    setInputValue("");
  };

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
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    setView(false);
  }, [pathname]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (view && ref.current && !ref.current.contains(e.target)) {
        setView(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [view]);

  return (
    <HeaderComponent
      handleInputChange={handleInputChange}
      handleSearch={handleSearch}
      inputValue={inputValue}
      navigate={navigate}
      dispatch={dispatch}
      address={address}
      searchView={searchView}
      setSearchView={setSearchView}
    ></HeaderComponent>
  );
};
export default HeaderContainer;
