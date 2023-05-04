var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const PriceList = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BNBPrice = (yield axios.get("https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest", {
            headers: {
                "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
                symbol: "BNB",
            },
        })).data;
        const ETHPrice = (yield axios.get("https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest", {
            headers: {
                "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
                symbol: "ETH",
            },
        })).data;
        const USDTPrice = (yield axios.get("https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest", {
            headers: {
                "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
                symbol: "USDT",
            },
        })).data;
        const bnbPriceToUSDT = (yield axios.get("https://pro-api.coinmarketcap.com/v2/tools/price-conversion", {
            headers: {
                "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
                amount: 10,
                symbol: "BNB",
                convert: "USDT",
            },
        })).data;
        const bnbPriceToETH = (yield axios.get("https://pro-api.coinmarketcap.com/v2/tools/price-conversion", {
            headers: {
                "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
                amount: 10,
                symbol: "BNB",
                convert: "ETH",
            },
        })).data;
        const ETHPriceToBNB = (yield axios.get("https://pro-api.coinmarketcap.com/v2/tools/price-conversion", {
            headers: {
                "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
                amount: 10,
                symbol: "ETH",
                convert: "BNB",
            },
        })).data;
        const EthPriceToUSDT = (yield axios.get("https://pro-api.coinmarketcap.com/v2/tools/price-conversion", {
            headers: {
                "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
                amount: 10,
                symbol: "ETH",
                convert: "USDT",
            },
        })).data;
        const usdtPriceToETH = (yield axios.get("https://pro-api.coinmarketcap.com/v2/tools/price-conversion", {
            headers: {
                "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
                amount: 10,
                symbol: "USDT",
                convert: "ETH",
            },
        })).data;
        const usdtPriceToBNB = (yield axios.get("https://pro-api.coinmarketcap.com/v2/tools/price-conversion", {
            headers: {
                "X-CMC_PRO_API_KEY": "95b65a08-8e34-4bcf-88f2-23f733797852",
            },
            params: {
                amount: 10,
                symbol: "USDT",
                convert: "BNB",
            },
        })).data;
        let USDT = Object.values(USDTPrice.data);
        let USDTdata = USDT[0];
        let USDTprice = Object.values(USDTdata[0]["quote"]);
        let NowUSDTprice = USDTprice[0]["price"];
        let USDTIdData = USDTdata[0]["id"];
        let USDTSymbolData = USDTdata[0]["symbol"];
        let USDTSlugData = USDTdata[0]["slug"];
        let ETH = Object.values(ETHPrice.data);
        let ETHdata = ETH[0];
        let ETHprice = Object.values(ETHdata[0]["quote"]);
        let NowETHprice = ETHprice[0]["price"];
        let ETHIdData = ETHdata[0]["id"];
        let ETHSymbolData = ETHdata[0]["symbol"];
        let ETHSlugData = ETHdata[0]["slug"];
        let BNB = Object.values(BNBPrice.data);
        let BNBdata = BNB[0];
        let BNBprice = Object.values(BNBdata[0]["quote"]);
        let NowBNBprice = BNBprice[0]["price"];
        let BNBIdData = BNBdata[0]["id"];
        let BNBSymbolData = BNBdata[0]["symbol"];
        let BNBSlugData = BNBdata[0]["slug"];
        const BNBSwapUSDT = Object.values(bnbPriceToUSDT)[1];
        const BNBtoUSDT = BNBSwapUSDT[0].quote.USDT.price;
        const BNBSwapETH = Object.values(bnbPriceToETH)[1];
        const BNBtoETH = BNBSwapETH[0].quote.ETH.price;
        const ETHSwapBNB = Object.values(ETHPriceToBNB)[1];
        const ETHtoBNB = ETHSwapBNB[0].quote.BNB.price;
        const ETHSwapUSDT = Object.values(EthPriceToUSDT)[1];
        const ETHtoUSDT = ETHSwapUSDT[0].quote.USDT.price;
        const USDTwapETH = Object.values(usdtPriceToETH)[1];
        const USDTtoETH = USDTwapETH[0].quote.ETH.price;
        const USDTwapBNB = Object.values(usdtPriceToBNB)[1];
        const USDTtoBNB = USDTwapBNB[0].quote.BNB.price;
        const DBConnet = [];
        DBConnet.push({
            IdData: USDTIdData,
            symbolData: USDTSymbolData,
            slugData: USDTSlugData,
            convertUSDT: 1,
            convertETH: USDTtoETH,
            convertBNB: USDTtoBNB,
            tokenPrice: NowUSDTprice,
        });
        DBConnet.push({
            IdData: ETHIdData,
            symbolData: ETHSymbolData,
            slugData: ETHSlugData,
            convertUSDT: ETHtoUSDT,
            convertETH: 1,
            convertBNB: ETHtoBNB,
            tokenPrice: NowETHprice,
        });
        DBConnet.push({
            IdData: BNBIdData,
            symbolData: BNBSymbolData,
            slugData: BNBSlugData,
            convertUSDT: BNBtoUSDT,
            convertETH: BNBtoETH,
            convertBNB: 1,
            tokenPrice: NowBNBprice,
        });
        DBConnet.push({
            IdData: 9371,
            symbolData: "DFS",
            slugData: "dfs",
            convertUSDT: 1,
            convertETH: USDTtoETH,
            convertBNB: USDTtoBNB,
            tokenPrice: NowUSDTprice,
        });
        return DBConnet;
    }
    catch (error) {
        console.log(error);
    }
});
export default PriceList;
