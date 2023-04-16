// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "LiquidityPool.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Dex {
  using SafeMath for uint256;

  event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
  event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
  ERC20 _lpToken;
  DFSToken immutable DFS;
  struct UserInfo {
    uint256 amount;
  }

  mapping(uint256 => mapping(address => UserInfo)) public userInfo;
  struct PoolInfo {
    ERC20 lpToken;
    uint total;
    // ERC20 token1;
    // ERC20 token2;
    // uint256 amounttoken1;
    // uint256 amounttoken2;
  }
  PoolInfo[] public poolInfo;
  // Owner's address of DEX
  address public immutable owner;
  // Array of liquidity pool addresses

  // Mapping to get address of liquidity pool with token addresses
  mapping(address => mapping(address => address)) public getLiquidityPool;

  // Event
  event LiquidityPoolCreted(
    address indexed _addressToken1,
    address indexed _addressToken2,
    address indexed _addressLiquidityPool
  );

  constructor(address _DFS) {
    owner = msg.sender;
    DFS = DFSToken(_DFS);
  }

  function createLiquidityPool(address _tokenA, address _tokenB) external {
    (address _token1, address _token2) = _tokenA < _tokenB
      ? (_tokenA, _tokenB)
      : (_tokenB, _tokenA);

    require(_token1 != _token2, "Same Token Addresses");
    require(_token1 != address(0), "Invalid Token Address");
    require(_token2 != address(0), "Invalid Token Address");
    require(
      getLiquidityPool[_token1][_token2] == address(0),
      "Pool Already Exists"
    );

    _lpToken = ERC20(
      new LiquidityPool("DFS-LP", "DFS-LP", _token1, _token2,DFS)
    );
    getLiquidityPool[_token1][_token2] = address(_lpToken);

    poolInfo.push(PoolInfo({ lpToken: _lpToken, total: 0 }));
    emit LiquidityPoolCreted(_token1, _token2, address(_lpToken));
  }

  function deposit(uint256 _pid, uint256 _amount) public {
    PoolInfo storage pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][msg.sender];

    pool.lpToken.transferFrom(address(msg.sender), address(this), _amount);
    user.amount = user.amount.add(_amount);
    // pool.total=pool.total+_amount;

    emit Deposit(msg.sender, _pid, _amount);
  }

  function getLPBalance(uint _pid) public view returns (uint) {
    UserInfo storage user = userInfo[_pid][msg.sender];
    return user.amount;
  }

  function withdraw(uint256 _pid, uint256 _amount) public {
    PoolInfo storage pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][msg.sender];
    require(user.amount >= _amount, "withdraw: not good");

    user.amount = user.amount.sub(_amount);

    pool.lpToken.transfer(address(msg.sender), _amount);
    //  pool.total=pool.total-_amount;
    emit Withdraw(msg.sender, _pid, _amount);
  }

  function getPid(address poolCA) public view returns (uint256) {
    for (uint i = 0; i < poolInfo.length; i++) {
      if (address(poolInfo[i].lpToken) == poolCA) {
        return i;
      }
    }
  }
  // function giveReward(uint _pid,address _to){
  //   PoolInfo storage pool = poolInfo[_pid];
  //   UserInfo storage user = userInfo[_pid][msg.sender];
  //   pool.lpToken.rewardClaim(_to,user.amount/ pool.total);
  // }
}
