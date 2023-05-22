// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IReward {
  function rewards() external;

  function distribution(address, uint256) external;

  function sendProfit() external returns (uint256);

  function autoCompound(address, uint256) external returns (uint256);
}
