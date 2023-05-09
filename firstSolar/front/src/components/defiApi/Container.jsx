import { useEffect, useState } from "react";
import DefiComponent from "./Component";

import { useWeb3 } from "../../modules/useWeb3";

const DefiContainer = () => {
  const [signResult, setSignResult] = useState("");
  const [signVerify, setSignVerify] = useState(true);
  const { login } = useWeb3();
  const personalSign = async () => {
    const exampleMessage = "Hello, World"; // 보여줄 메세지
    try {
      const from = "0xCB8775C5943Dc32ed8C1A8182Ce9A53E5b87383a"; // 지갑 주소
      const sign = await window.ethereum.request({
        method: "personal_sign",
        params: [exampleMessage, from],
      });
      setSignResult(sign);
      setSignVerify(false);
      console.log(sign);
      if (sign) console.log("sign On"); // sign을 했을 때 auto-compounding 실행? 요청?
    } catch (err) {
      console.error(err);
      console.log("No sign");
    }
  };
  // const personalSignVerify = async () => {
  //   const msg = "Hello, World";
  //   const hash = web3?.utils.sha3(
  //     "\x19Ethereum Signed Message:\n" + msg.length + msg
  //   );
  //   const signature = signResult.slice(2);
  //   const r = "0x" + signature.slice(0, 64);
  //   const s = "0x" + signature.slice(64, 128);
  //   const v = parseInt(signature.slice(128, 130), 16);

  //   try {
  //     const address = await web3?.eth.accounts.recover(hash, v, r, s);
  //     if (
  //       address?.toLowerCase() ===
  //       "0xCB8775C5943Dc32ed8C1A8182Ce9A53E5b87383a".toLowerCase()
  //     ) {
  //       // 검증이 성공하면, 호출하고자 하는 함수를 호출합니다.
  //       // 예를 들어, alert 함수를 호출합니다.
  //       alert("서명이 검증되었습니다.");
  //     } else {
  //       console.error("서명 검증이 실패했습니다.");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   if (document.cookie) {
  //     if (document.cookie.split(":")[0] == "metamask") {
  //       login();
  //     }
  //   }
  // }, []);

  return <DefiComponent personalSign={personalSign} />;
};
export default DefiContainer;
