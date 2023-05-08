// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "ISwap.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Reward {
  using SafeMath for uint256;
  IERC20 public immutable DFS;
  IERC20 public immutable rewardToken;
  address public immutable valutA;
  ISwap immutable SWAP;

  constructor(
    address _DFSA,
    address _rewardToken,
    address DFSUsdtA,
    address _valutA
  ) {
    DFS = IERC20(_DFSA);
    rewardToken = IERC20(_rewardToken);
    SWAP = ISwap(DFSUsdtA);
    valutA = _valutA;
  }

  function rewards() public {
    DFS.approve(address(SWAP), DFS.balanceOf(address(this)));
    SWAP.usdtSwap(address(DFS), DFS.balanceOf(address(this)));
  }

  function autoCompound(
    address _lpAddress,
    uint256 _amount
  ) public returns (uint256) {
    rewardToken.approve(address(SWAP), _amount);
    uint256 amountOut = SWAP.dfsSwap(_lpAddress, address(rewardToken), _amount);
    return amountOut;
  }

  function distribution(address _contributor, uint256 _amount) public {
    rewardToken.transfer(_contributor, _amount);
  }

  function sendProfit() public returns (uint256) {
    uint256 balance = rewardToken.balanceOf(address(this));
    if(balance!=0){
    uint256 distributeAmount = balance.mul(2).div(10);
    rewardToken.transfer(valutA, balance.mul(8).div(10));
    return distributeAmount;
    }else{
      return 0;
    }
  }
}
