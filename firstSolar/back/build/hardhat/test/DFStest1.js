var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { ethers } = require("hardhat");
const { expect } = require("chai");
describe("DFStest1", function () {
    let DFStest1Contract;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            const address = "0x7764581d00309F7bc1e5f13feefea927B8Ead2BB";
            DFStest1Contract = yield ethers.getContractAt("DFStest1", address);
        });
    });
    it("should do something", function () {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(DFStest1Contract);
        });
    });
    it("should return the correct symbol", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const symbol = yield DFStest1Contract.symbol();
            console.log(symbol);
            expect(symbol).to.equal("BNB");
        });
    });
    it("balanceOf", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const balanceOf = yield DFStest1Contract.balanceOf("0x81E7909f56a71ccEAaC2Cbd6d05E84C639Cca868");
            console.log(balanceOf);
        });
    });
    it("transfer", function () {
        return __awaiter(this, void 0, void 0, function* () {
        });
    });
});
