var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import db from "../../models/index.js";
import price from "./priceList.js";
const timeSync = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const updateTime = yield db.Price.findAll();
    const nowTime = new Date();
    if (updateTime.length <= 0) {
      let priceDataList = yield price();
      for (let i = 0; i < priceDataList.length; i++) {
        yield db.Price.create({
          tokenSymbol: priceDataList[i].symbolData,
          tokenId: priceDataList[i].IdData,
          tokenSlug: priceDataList[i].slugData,
          ConvertToUSDT: priceDataList[i].convertUSDT,
          ConvertToETH: priceDataList[i].convertETH,
          ConvertToBNB: priceDataList[i].convertBNB,
          tokenPrice: priceDataList[i].tokenPrice,
        });
      }
      let priceDB = yield db.Price.findAll();
      return priceDB;
    } else {
      const promiseSync = updateTime.map((pool) =>
        __awaiter(void 0, void 0, void 0, function* () {
          const lastUpdateTime = new Date(pool.dataValues.updatedAt);
          const timeDiffInMs = nowTime.getTime() - lastUpdateTime.getTime();
          const timeDiffInHours = timeDiffInMs / (1000 * 60 * 60);
          if (timeDiffInHours > 24) {
            let priceDataList = yield price();
            let priceDB = yield db.Price.findAll();
            for (let i = 0; i < priceDataList.length; i++) {
              yield db.Price.update(
                {
                  ConvertToUSDT: priceDB[i].convertUSDT,
                  ConvertToETH: priceDB[i].convertETH,
                  ConvertToBNB: priceDB[i].convertBNB,
                  tokenPrice: priceDB[i].tokenPrice,
                },
                {
                  where: {
                    tokenSymbol: priceDataList[i].symbolData,
                    tokenId: priceDataList[i].IdData,
                    tokenSlug: priceDataList[i].slugData,
                  },
                }
              );
            }
            priceDB = yield db.Price.findAll();
            return priceDB;
          } else {
            let priceDB = yield db.Price.findAll();
            return priceDB;
          }
        })
      );
      const result = yield Promise.all(promiseSync);
      return result[0];
    }
  });
export default timeSync;
