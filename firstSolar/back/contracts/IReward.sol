// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IReward {
  function rewards() external;

  function autoCompound(
    address _lpAddress,
    uint256 _amount
  ) external returns (uint256);

  function distribution(address _contributor, uint256 _amount) external;

  function sendProfit() external returns (uint256);
}
