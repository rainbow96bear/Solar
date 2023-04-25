import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080",
  header: {
    "content-type": "application/json",
  },
});

export const getMainPoolList = async (pageIndex) => {
  const result = (
    await request.get("api/defi", { params: { pageIndex: pageIndex } })
  ).data;
  const poolListData = result.poolListData;
  const pageSize = 10; // 한 페이지에 10개의 항목을 보여줄 것이다.
  const resultLength = result.poolListDataLength; // 풀의 전체갯수
  const resultTotalPages = Math.ceil(resultLength / pageSize); // 총 몇 페이지나 있는지 구한다.
  return { poolListData, resultTotalPages };
};

export const oracleIdList = async (_params) => {
  const result = (await request.post("api/defi/detail", { id: _params })).data;
  console.log("result : ", result);

  return result;
};

export const logout = async (_walletKind, _account) => {
  await request.post("api/user/logout", {
    walletKind: _walletKind,
    address: _account,
  });
};

export const dexList = async (_item, pageIndex) => {
  const result = (
    await request.post("api/defi/filter", { dex: _item, pageIndex: pageIndex })
  ).data;

  return result;
};

export const netList = async (_item, pageIndex) => {
  const result = (
    await request.post("api/defi/filter", { network: _item, pageIndex })
  ).data;

  return result;
};

export const lpBalance = async (account, symbol) => {
  const result = (
    await request.post("api/user/lpBalance", {
      account,
      symbol,
    })
  ).data;
  return result.balance;
};

export const firstSync = async () => {
  const result = (await request.get("api/sync")).data;
  console.log("result : ", result);

  return result;
};
