// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ILiquidityPool {
  function getReserves()
    external
    returns (uint256 _reserve1, uint256 _reserve2);

  function mint(address _to, uint256 _amount) external;
}
