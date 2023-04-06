import APIComp from "./APIComp";
import axios from "axios";
import { useState, useEffect } from "react";

const APICon = () => {
  const [apiData, setApiData] = useState([]);

  const APIClick = async () => {
    try {
      //   let apiData = await axios.post(
      //     "https://api.blockvision.org/v1/2NtPPXeAyFFgc5ztbQ6UXprTjoX",
      //     {
      //       id: 1,
      //       jsonrpc: "2.0",
      //       method: "erc20_transfers",
      //       params: {
      //         fromBlockNumber: 0,
      //         toBlockNumber: 0,
      //         fromAddress: "0x562680a4dC50ed2f14d75BF31f494cfE0b8D10a1",
      //         toAddress: "",
      //         contractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      //         pageSize: 3,
      //         pageIndex: 1,
      //       },
      //     }
      //   );
      //   console.log("apiData", apiData);

      let transfersData = await axios.post(
        "http://localhost:8080/api/sync/apiUse"
      );
      console.log("transfersData", transfersData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <APIComp APIClick={APIClick} />
    </div>
  );
};
export default APICon;
