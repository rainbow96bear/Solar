import logo from "./logo.svg";
import "./App.css";

// 라이브러리 import
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { accountThunk } from "./modules/account.js";

// 컴포넌트 import
import HeaderContainer from "./components/header/Container";
import MainContainer from "./components/main/Container";
import { useEffect } from "react";

function App() {
  const isLoading = useSelector((state) => state.isLoading.isLoading.isLoading);
  const connect = useSelector((state) => state.connect.connect.connect);
  const account = useSelector((state) => state.account.account.account);
  const dispatch = useDispatch();

  useEffect(() => {
    if (account) {
      dispatch(accountThunk({ account: account }));
    }
  }, [account]);

  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <Routes>
        <Route path="/" element={<MainContainer />}></Route>
      </Routes>

      {/* 로딩 중에는 로딩 창이 뜨도록 할 것입니다. */}
      {isLoading ? (
        <LoadingModal>
          {/* <UserLoading /> 
          이 자리에는 로딩 도중의 모달 창이 들어갈 예정입니다.*/}
        </LoadingModal>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

const LoadingModal = styled.div`
  width: 100vmaxx;
  height: 100vmax;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  justify-content: center;
  z-index: 999999999;
`;
