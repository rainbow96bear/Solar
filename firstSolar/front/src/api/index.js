import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080",
  header: {
    "content-type": "application/json",
  },
});

export const getMainPoolList = async pageIndex => {
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

export const oracleIdList = async _params => {
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
    // console.log("result : ", result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const mypageList = async account => {
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

export const getConvertPrice = async tokenKind => {
  try {
    const result = (await request.get("api/sync/datesync")).data;
    if (tokenKind == "DFS") {
      const dfs = result.find(item => item.tokenSlug === "dfs");
      return {
        bnb: dfs.ConvertToBNB,
        eth: dfs.ConvertToETH,
        usdt: dfs.ConvertToUSDT,
        tokenPrice: dfs.tokenPrice,
      };
    } else if (tokenKind == "ETH") {
      const eth = result.find(item => item.tokenSlug === "ethereum");
      return {
        bnb: eth.ConvertToBNB,
        eth: eth.ConvertToETH,
        usdt: eth.ConvertToUSDT,
        tokenPrice: eth.tokenPrice,
      };
    } else if (tokenKind == "USDT") {
      const usdt = result.find(item => item.tokenSlug === "tether");
      return {
        bnb: usdt.ConvertToBNB,
        eth: usdt.ConvertToETH,
        usdt: usdt.ConvertToUSDT,
        tokenPrice: usdt.tokenPrice,
      };
    } else if (tokenKind == "BNB") {
      const bnb = result.find(item => item.tokenSlug === "bnb");
      return {
        bnb: bnb.ConvertToBNB,
        eth: bnb.ConvertToETH,
        usdt: bnb.ConvertToUSDT,
        tokenPrice: bnb.tokenPrice,
      };
    }
  } catch (error) {
    console.error(error);
  }
};

export const swapApprove = async (account, tokenName, amount, tokenAddress) => {
  try {
    const result = await request.post("api/swap/swapApprove", {
      account,
      tokenName,
      amount,
      tokenAddress,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const swapTransaction = async (account, poolName, amount) => {
  try {
    console.log("poolName :", poolName);
    const result = await request.post("api/swap/swapTransaction", {
      account,
      poolName,
      amount,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const swapBalance = async (userAddress, firstSelectToken) => {
  try {
    const result = (
      await request.post("api/swap/swapBalance", {
        account: userAddress,
      })
    ).data[0];
    switch (firstSelectToken) {
      case "DFS":
        return result.dfs;
      case "ETH":
        return result.eth;
      case "BNB":
        return result.bnb;
      case "USDT":
        return result.usdt;
    }
  } catch (error) {
    console.error(error);
  }
};

export const approveDFS = async (account, approveDFSAmount) => {
  try {
    const result = (
      await request.post("api/defi/approveDFS", {
        account,
        approveDFSAmount,
      })
    ).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const approveOtherToken = async (
  account,
  approveOtherAmount,
  lpSymbol
) => {
  try {
    const result = (
      await request.post("api/defi/approveOtherToken", {
        account,
        approveOtherAmount,
        lpSymbol,
      })
    ).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const addLiquidity = async (account, token1, token2, lpSymbol) => {
  try {
    const result = (
      await request.post("api/defi/addLiquidity", {
        account,
        token1,
        token2,
        lpSymbol,
      })
    ).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};
