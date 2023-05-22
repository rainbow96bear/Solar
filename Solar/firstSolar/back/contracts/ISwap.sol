// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ISwap {
  function usdtSwap(address _tokenIn, uint256 _amountIn) external;

  function dfsSwap(
    address _lpAddress,
    address _tokenIn,
    uint256 _amountIn
  ) external returns (uint256 _amountOut);
}
