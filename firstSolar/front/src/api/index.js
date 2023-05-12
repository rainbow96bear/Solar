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
    const pageSize = 10;
    const resultLength = result.poolListDataLength;
    const resultTotalPages = Math.ceil(resultLength / pageSize);
    return { poolListData, resultTotalPages };
  } catch (error) {
    console.error(error);
  }
};

export const oracleIdList = async (_params) => {
  try {
    const result = (await request.post("api/defi/detail", { id: _params }))
      .data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getLogin = async (_account, _walletKind) => {
  try {
    const data = await axios.post("http://localhost:8080/api/user/login", {
      account: _account,
      walletKind: _walletKind,
    });
  } catch (error) {
    console.error(error);
  }
};

export const logout = async (_walletKind, _account) => {
  try {
    await request.post("api/user/logout", {
      walletKind: _walletKind,
      address: _account,
    });
  } catch (error) {
    console.error(error);
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
    console.error(error);
  }
};

export const netList = async (_item, pageIndex) => {
  try {
    const result = (
      await request.post("api/defi/filter", { network: _item, pageIndex })
    ).data;

    return result;
  } catch (error) {
    console.error(error);
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
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const firstSync = async () => {
  try {
    const result = (await request.get("api/sync")).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const mypageList = async (account) => {
  try {
    const result = (
      await request.post("api/sync/mypage", {
        account,
      })
    ).data;
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const getConvertPrice = async (tokenKind) => {
  try {
    const result = (await request.get("api/sync/datesync")).data;
    if (tokenKind == "DFS") {
      const dfs = result.find((item) => item.tokenSlug === "dfs");
      return {
        bnb: dfs.ConvertToBNB,
        eth: dfs.ConvertToETH,
        usdt: dfs.ConvertToUSDT,
        tokenPrice: dfs.tokenPrice,
      };
    } else if (tokenKind == "ETH") {
      const eth = result.find((item) => item.tokenSlug === "ethereum");
      return {
        bnb: eth.ConvertToBNB,
        eth: eth.ConvertToETH,
        usdt: eth.ConvertToUSDT,
        tokenPrice: eth.tokenPrice,
      };
    } else if (tokenKind == "USDT") {
      const usdt = result.find((item) => item.tokenSlug === "tether");
      return {
        bnb: usdt.ConvertToBNB,
        eth: usdt.ConvertToETH,
        usdt: usdt.ConvertToUSDT,
        tokenPrice: usdt.tokenPrice,
      };
    } else if (tokenKind == "BNB") {
      const bnb = result.find((item) => item.tokenSlug === "bnb");
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

export const swapApprove = async (account, tokenName, amount, poolAddress) => {
  try {
    const result = await request.post("api/swap/swapApprove", {
      account,
      tokenName,
      amount,
      poolAddress,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const swapTransaction = async (
  account,
  poolName,
  amount,
  tokenName,
  convertToken
) => {
  try {
    const result = await request.post("api/swap/swapTransaction", {
      account,
      poolName,
      amount,
      tokenName,
      convertToken,
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

export const approveDFS = async (account, approveDFSAmount, lpSymbol) => {
  try {
    const result = (
      await request.post("api/defi/approveDFS", {
        account,
        approveDFSAmount,
        lpSymbol,
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

export const updatePool = async (tokenAddress) => {
  try {
    const result = (
      await request.post("api/defi/updatePool", {
        tokenAddress,
      })
    ).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const approveLp = async (account, approveDepositAmount, lpSymbol) => {
  try {
    const result = (
      await request.post("api/defi/approveLp", {
        account,
        approveDepositAmount,
        lpSymbol,
      })
    ).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deposit = async (account, depositAmount, lpSymbol) => {
  try {
    const result = (
      await request.post("api/defi/deposit", {
        account,
        depositAmount,
        lpSymbol,
      })
    ).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const withDraw = async (account, withdrawAmount, lpSymbol) => {
  try {
    const result = (
      await request.post("api/defi/withdraw", {
        account,
        withdrawAmount,
        lpSymbol,
      })
    ).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getLPBalance = async (pid, account) => {
  try {
    const result = (
      await request.post("api/defi/getLPBalance", {
        pid,
        account,
      })
    ).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const removeLiquidity = async (account, removeAmount, lpSymbol) => {
  try {
    const result = (
      await request.post("api/defi/removeLiquidity", {
        account,
        removeAmount,
        lpSymbol,
      })
    ).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getSearch = async (search, pageIndex) => {
  try {
    const result = (
      await request.post("api/defi/search", {
        search,
        pageIndex,
      })
    ).data;

    const poolListData = await result.poolListData;
    const pageSize = 10;
    const resultLength = await result.poolListDataLength;
    const resultTotalPages = Math.ceil(resultLength / pageSize);

    return { poolListData, resultTotalPages };
  } catch (error) {
    console.error(error);
  }
};

export const setAutoCompound = async (account, lpSymbol) => {
  try {
    const result = (
      await request.post("api/defi/setAutoCompound", {
        account,
        lpSymbol,
      })
    ).data;

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getAutoCompound = async (account, lpSymbol) => {
  try {
    const result = (
      await request.post("api/defi/getAutoCompound", {
        account,
        lpSymbol,
      })
    ).data;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const rankList = async () => {
  try {
    const result = (await request.get("api/defi/rank")).data;

    return result;
  } catch (error) {
    console.error(error);
  }
};
