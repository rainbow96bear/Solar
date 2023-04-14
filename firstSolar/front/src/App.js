import axios from "axios";
// import { useWeb3 } from "./utility/useWeb3";
import Web3 from "web3";
function App() {
  // const { account, web3 } = useWeb3();
  const web3 = new Web3(window.ethereum);

  const getAccount = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(account);
  };

  const approveFunc = async () => {
    const result = (
      await axios.post("http://localhost:8080/api/Dex/approve", {
        amount: 1,
      })
    ).data;
    let transactionResult = await web3.eth.sendTransaction({
      from: "0xb18fbad70a07d4cab5510e2f87fae20ee22cf2b4",
      to: "0x1d4BAC8C43afef5096F8c59241FbEFa0d61EF22d",
      // to자리 ca
      data: result,
    });
    console.log(transactionResult);
  };

  const testingFunc = async () => {
    const result = (
      await axios.post("http://localhost:8080/api/Dex", {
        token1: 1,
        token2: 2,
      })
    ).data;
    console.log(result);
    let transactionResult = await web3.eth.sendTransaction({
      from: "0xb18fbad70a07d4cab5510e2f87fae20ee22cf2b4",
      to: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
      data: result,
    });
    console.log(transactionResult);
  };
  return (
    <div>
      테스트 중
      <button
        onClick={() => {
          testingFunc();
          // getAccount();
        }}
      >
        실행 버튼
      </button>
      <button
        onClick={() => {
          approveFunc();
          // getAccount();
        }}
      >
        approve 버튼
      </button>
    </div>
  );
}

export default App;
