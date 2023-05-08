// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "Ownable.sol";

contract NetProfitVault is Ownable {
  address immutable USDTTokenA;

  constructor(address _USDTTokenA) {
    USDTTokenA = _USDTTokenA;
  }

  function withdraw(uint256 _amount) public onlyOwner {
    IERC20(USDTTokenA).transfer(msg.sender, _amount);
  }

  function getBalance() public returns (uint256) {
    return IERC20(USDTTokenA).balanceOf(address(this));
  }
}