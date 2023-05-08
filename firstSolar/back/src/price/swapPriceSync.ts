import { resolve } from "path";
import db from "../../models/index";
import price from "./priceList";
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const timeSync = async () => {
  const updateTime = await db.Price.findAll();
  const nowTime = new Date();

  if (updateTime.length <= 0) {
    let priceDataList = await price();
    for (let i = 0; i < priceDataList.length; i++) {
      await db.Price.create({
        tokenSymbol: priceDataList[i].symbolData,
        tokenId: priceDataList[i].IdData,
        tokenSlug: priceDataList[i].slugData,
        ConvertToUSDT: priceDataList[i].convertUSDT,
        ConvertToETH: priceDataList[i].convertETH,
        ConvertToBNB: priceDataList[i].convertBNB,
        tokenPrice: priceDataList[i].tokenPrice,
      });
      await delay(5000);
    }

    let priceDB = await db.Price.findAll();
    return priceDB;
  } else {
    const promiseSync = updateTime.map(async (pool) => {
      const lastUpdateTime = new Date(pool.dataValues.updatedAt);
      // DB에서 불러온 각 Pool 인스턴스의 업데이트 시간을 가져와 'lastUpdateTime' 변수에 할당
      const timeDiffInMs = nowTime.getTime() - lastUpdateTime.getTime();
      // 현재 시간과 'lastUpdateTime'의 차이(밀리초)를 계산하여 'timeDiffInMs' 변수에 할당
      const timeDiffInHours = timeDiffInMs / (1000 * 60 * 60);

      if (timeDiffInHours > 24) {
        let priceDataList = await price();
        let priceDB = await db.Price.findAll();
        for (let i = 0; i < priceDataList.length; i++) {
          await db.Price.update(
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
          await delay(5000);
        }
        priceDB = await db.Price.findAll();

        return priceDB;
      } else {
        let priceDB = await db.Price.findAll();

        return priceDB;
      }
    });

    const result = await Promise.all(promiseSync);
    return result[0];
  }
};

export default timeSync;
