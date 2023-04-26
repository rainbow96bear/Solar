import axios from "axios";
import {
  deployedDFS,
  deployedETH,
  deployedDFSETH,
  deployedBNB,
  deployedDFSBNB,
  deployedUSDT,
  deployedDFSUSDT,
} from "../deployList/index";
const filterPoolNToken = async (req) => {
  try {
    let poolName = req.body.poolName;
    let target = "";
    const token = "";

    if (req.body.tokenName.toLowerCase() == "dfs") {
      if (req.body.poolName.includes("-")) {
        target = req.body.poolName.toLowerCase().split("-")[1];
      } else {
        target = req.body.poolName.toLowerCase();
      }

      if ("dfsethpool".includes(target)) {
        const swapTokenAddress = deployedETH.options.address;
        return { pool: deployedDFSETH, swapTokenAddress };
        //
      } else if ("dfsbnbpool".includes(target)) {
        const swapTokenAddress = deployedBNB.options.address;
        return { pool: deployedDFSBNB, swapTokenAddress };
        //
      } else if ("dfsusdtpool".includes(target)) {
        const swapTokenAddress = deployedUSDT.options.address;
        return { pool: deployedDFSUSDT, swapTokenAddress };
        //
      } else {
        throw new Error("Invalid Error");
      }
    } else {
      if (req.body.tokenName.toLowerCase() == "eth") {
        if ("dfsethpool".includes(target)) {
          const swapTokenAddress = deployedDFS.options.address;
          return { pool: deployedDFSETH, swapTokenAddress };
          //
        } else if ("dfsbnbpool".includes(target)) {
          const swapTokenAddress = deployedBNB.options.address;
          return { pool: deployedDFSBNB, swapTokenAddress };
          //
        } else if ("dfsusdtpool".includes(target)) {
          const swapTokenAddress = deployedUSDT.options.address;
          return { pool: deployedDFSUSDT, swapTokenAddress };
          //
        } else {
          throw new Error("Invalid Error");
        }
      } else if (req.body.tokenName.toLowerCase() == "usdt") {
        if ("dfsethpool".includes(target)) {
          const swapTokenAddress = deployedDFS.options.address;
          return { pool: deployedDFSETH, swapTokenAddress };
          //
        } else if ("dfsbnbpool".includes(target)) {
          const swapTokenAddress = deployedBNB.options.address;
          return { pool: deployedDFSBNB, swapTokenAddress };
          //
        } else if ("dfsusdtpool".includes(target)) {
          const swapTokenAddress = deployedETH.options.address;
          return { pool: deployedDFSETH, swapTokenAddress };
          //
        } else {
          throw new Error("Invalid Error");
        }
      } else if (req.body.tokenName.toLowerCase() == "bnb") {
        if ("dfsethpool".includes(target)) {
          const swapTokenAddress = deployedDFS.options.address;
          return { pool: deployedDFSETH, swapTokenAddress };
          //
        } else if ("dfsbnbpool".includes(target)) {
          const swapTokenAddress = deployedETH.options.address;
          return { pool: deployedDFSETH, swapTokenAddress };
          //
        } else if ("dfsusdtpool".includes(target)) {
          const swapTokenAddress = deployedUSDT.options.address;
          return { pool: deployedDFSUSDT, swapTokenAddress };
          //
        } else {
          throw new Error("Invalid Error");
        }
      } else {
        res.status(400).send("Invalid token");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
export default filterPoolNToken;
