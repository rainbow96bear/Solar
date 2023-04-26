// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "ISwap.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Reward {
  IERC20 public immutable DFS;
  IERC20 public immutable rewardToken;
  ISwap immutable SWAP;

  constructor(address _DFSA, address _rewardToken, address DFSUsdtA) {
    DFS = IERC20(_DFSA);
    rewardToken = IERC20(_rewardToken);
    SWAP = ISwap(DFSUsdtA);
  }

  function rewards() public {
    DFS.approve(address(SWAP), DFS.balanceOf(address(this)));
    SWAP.usdtSwap(address(DFS), DFS.balanceOf(address(this)));
  }
}
