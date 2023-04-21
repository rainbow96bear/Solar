// const { ethers } = require("ethers");
// const { AggregatorV3Interface__factory } = require("@chainlink/contracts");

// // ETH/USD
// const ETH_USD_FEED = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
// // BNB/USD
// const BNB_USD_FEED = "0x14e613AC84a31f71b018979df5E392A01f7F21ea";

// async function main() {
//   const provider = new ethers.providers.InfuraProvider(
//     "homestead",
//     "2ca09ab04a7c44dcb6f886deeba97502"
//   );
//   const ethUsdFeed = AggregatorV3Interface__factory.connect(
//     ETH_USD_FEED,
//     provider
//   );
//   const bnbUsdFeed = AggregatorV3Interface__factory.connect(
//     BNB_USD_FEED,
//     provider
//   );

//   const [ethPriceData, bnbPriceData] = await Promise.all([
//     ethUsdFeed.latestRoundData(),
//     bnbUsdFeed.latestRoundData(),
//   ]);

//   const ethPrice = parseFloat(ethers.utils.formatUnits(ethPriceData.answer, 8));
//   const bnbPrice = parseFloat(ethers.utils.formatUnits(bnbPriceData.answer, 8));

//   console.log(`ETH/USD: ${ethPrice}`);
//   console.log(`BNB/USD: ${bnbPrice}`);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
