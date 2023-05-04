require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
module.exports = {
    solidity: "0.8.19",
    networks: {
        hardhat: {},
        mumbai: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: [process.env.PRIVATE_KEY],
            chainId: 80001,
        },
    },
};
