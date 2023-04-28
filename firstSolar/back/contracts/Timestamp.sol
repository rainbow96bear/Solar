// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract DateCalculation {
  uint constant SECONDS_PER_DAY = 86400;

  function getCurrentDay() public view returns (uint256) {
    return (block.timestamp / SECONDS_PER_DAY) % 30;
    
  }

  function getCurrentMonth() public view returns (uint256) {
    return (block.timestamp / (SECONDS_PER_DAY * 30)) % 12;
  }

  function getCurrentYear() public view returns (uint256) {
    return 1970 + block.timestamp / (SECONDS_PER_DAY * 365);
  }

  function daysSinceEpoch() public view returns (uint256) {
    return block.timestamp / SECONDS_PER_DAY;
  }
}
