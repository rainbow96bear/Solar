// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "ISWAP.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract reward {
  ERC20 public immutable token1;
  ERC20 public immutable token2;
  ERC20 public immutable token3;
  ERC20 public immutable token4;
  ISWAP immutable SWAP;
  uint testnum=0;

  mapping(address => uint256) public token1balances;
  mapping(address => uint256) public token2balances;
  mapping(address => uint256) public token3balances;
  mapping(address => uint256) public token4balances;

  constructor(
    address _token1,
    address _token2,
    address _token3,
    address _token4,
    address DFSUsdtA
  ) {
    token1 = ERC20(_token1);
    token2 = ERC20(_token2);
    token3 = ERC20(_token3);
    token4 = ERC20(_token4);
    SWAP = ISWAP(DFSUsdtA);
  }

receive() external payable{
testnum=testnum+1;
}

// function payback(address) public payable{

// }

function getTestNum() public view returns(uint256){
  return testnum;
}


  function rewardBalanceof() public {
    token1balances[address(this)] = token1.balanceOf(address(this));

    token2balances[address(this)] = token2.balanceOf(address(this));
    token3balances[address(this)] = token3.balanceOf(address(this));
    token4balances[address(this)] = token4.balanceOf(address(this));
  }

  function rewards() public {
    IERC20(token1).approve(address(SWAP),token1.balanceOf(address(this)));
    SWAP.usdtSwap(address(token1), token1.balanceOf(address(this)));
  }

  function ethrewards() public{
    IERC20(token2).approve(address(SWAP),token2.balanceOf(address(this)));
    SWAP.usdtSwap(address(token2), token2.balanceOf(address(this)));
  }

  // function rewardstwo() public{
  //   IERC20(token2).approve(address(SWAP),token2.balanceOf(address(this)));
  //   SWAP.usdtSwap(address(token1), token1.balanceOf(address(this)));
  // }


}
