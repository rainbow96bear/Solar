import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080",
  header: {
    "content-type": "application/json",
  },
});

export const getMainPoolList = async (pageIndex) => {
  try {
    const result = (
      await request.get("api/defi", { params: { pageIndex: pageIndex } })
    ).data;
    const poolListData = result.poolListData;
    const pageSize = 10; // 한 페이지에 10개의 항목을 보여줄 것이다.
    const resultLength = result.poolListDataLength; // 풀의 전체갯수
    const resultTotalPages = Math.ceil(resultLength / pageSize); // 총 몇 페이지나 있는지 구한다.
    return { poolListData, resultTotalPages };
  } catch (error) {
    console.log(error);
  }
};

export const oracleIdList = async (_params) => {
  try {
    const result = (await request.post("api/defi/detail", { id: _params }))
      .data;
    console.log("result : ", result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (_walletKind, _account) => {
  try {
    await request.post("api/user/logout", {
      walletKind: _walletKind,
      address: _account,
    });
  } catch (error) {
    console.log(error);
  }
};

export const dexList = async (_item, pageIndex) => {
  try {
    const result = (
      await request.post("api/defi/filter", {
        dex: _item,
        pageIndex: pageIndex,
      })
    ).data;

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const netList = async (_item, pageIndex) => {
  try {
    const result = (
      await request.post("api/defi/filter", { network: _item, pageIndex })
    ).data;

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const lpBalance = async (account, symbol) => {
  try {
    const result = (
      await request.post("api/user/lpBalance", {
        account,
        symbol,
      })
    ).data;
    return result.balance;
  } catch (error) {
    console.log(error);
  }
};

export const firstSync = async () => {
  try {
    const result = (await request.get("api/sync")).data;
    console.log("result : ", result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const mypageList = async (account) => {
  try {
    console.log(account);
    const result = (
      await request.post("api/sync/mypage", {
        account,
      })
    ).data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
