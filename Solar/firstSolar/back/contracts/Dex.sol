// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

// import "LiquidityPool.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "Ownable.sol";
import "IReward.sol";
import "ILiquidityPool.sol";

contract Dex is Ownable {
  using SafeMath for uint256;

  event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
  event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);

  // ERC20 _lpToken;
  //  ERC20타입

  struct UserInfo {
    uint256 amount;
    uint256 shares;
    bool checkDeposit;
    bool checkAutoCompounding;
  }

  mapping(uint256 => mapping(address => UserInfo)) public userInfo;
  mapping(uint256 => address[]) public userAddress;

  struct PoolInfo {
    ERC20 lpToken;
    string symbol;
    address rewardA;
  }
  PoolInfo[] public poolInfo;
  // Owner's address of DEX
  address public immutable _owner;
  // Array of liquidity pool addresses90997987098

  // Event
  event LiquidityPoolCreted(
    address indexed _addressToken1,
    address indexed _addressToken2,
    address indexed _addressLiquidityPool
  );

  constructor() {
    _owner = msg.sender;
  }

  function setAutoCompound(uint256 _pid) public {
    UserInfo storage user = userInfo[_pid][msg.sender];
    user.checkAutoCompounding = !user.checkAutoCompounding;
  }

  function allDistribution() public {
    for (uint256 i = 0; i < poolInfo.length; i++) {
      address[] storage userArr = userAddress[i];
      PoolInfo storage pool = poolInfo[i];
      // rewardShares(i,pool.lpToken);
      uint256 balance = IReward(pool.rewardA).sendProfit();
      if (balance != 0) {
        for (uint256 j = 0; j < userArr.length; j++) {
          UserInfo storage user = userInfo[i][userArr[j]];
          if (user.amount > 0 && user.shares > 0) {
            if (user.checkAutoCompounding) {
              uint256 amountOut = IReward(pool.rewardA).autoCompound(
                address(pool.lpToken),
                balance.mul(user.shares).div(10000)
              );
              uint256 totalAmount = pool.lpToken.totalSupply();
              (uint256 _reserve1, ) = ILiquidityPool(address(pool.lpToken))
                .getReserves();
              ILiquidityPool(address(pool.lpToken)).mint(
                address(this),
                (amountOut * totalAmount) / (2 * _reserve1)
              );
              user.amount = user.amount.add(
                (amountOut * totalAmount) / (2 * _reserve1)
              );
            } else {
              IReward(pool.rewardA).distribution(
                userArr[j],
                balance.mul(user.shares).div(10000)
              );
            }
          }
        }
        rewardShares(i, pool.lpToken);
      }
      rewardShares(i, pool.lpToken);
    }
  }

  function getArrLength(uint256 _pid) public view returns (uint256) {
    address[] storage userArr = userAddress[_pid];
    return userArr.length;
  }

  function rewardShares(uint256 _pid, ERC20 _lpToken) public {
    address[] storage userArr = userAddress[_pid];
    for (uint256 j = 0; j < userArr.length; j++) {
      UserInfo storage user = userInfo[_pid][userArr[j]];

      user.shares = user.amount.mul(10000).div(_lpToken.totalSupply());
    }
  }

  function add(ERC20 _lpToken, address _rewardA) public onlyOwner {
    poolInfo.push(
      PoolInfo({
        lpToken: _lpToken,
        symbol: _lpToken.symbol(),
        rewardA: _rewardA
      })
    );
  }

  function deposit(uint256 _pid, uint256 _amount) public {
    PoolInfo storage pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][msg.sender];
    address[] storage userArr = userAddress[_pid];

    pool.lpToken.transferFrom(address(msg.sender), address(this), _amount);
    // msg.sender가 이계약 주소 lp ca한테 amount만큼 보낸다

    if (user.checkDeposit == false) {
      userArr.push(msg.sender);
      user.checkDeposit = true;
      user.checkAutoCompounding = true;
    }

    user.amount = user.amount.add(_amount);

    rewardShares(_pid, pool.lpToken);

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
    // 승인돼있으니 msg.sender에게 amount만큼
    rewardShares(_pid, pool.lpToken);
    emit Withdraw(msg.sender, _pid, _amount);
  }

  function getPoolInfo() public view returns (PoolInfo[] memory) {
    return poolInfo;
  }

  function getPid(address poolCA) public view returns (uint256) {
    for (uint256 i = 0; i < poolInfo.length; i++) {
      if (address(poolInfo[i].lpToken) == poolCA) {
        return i;
      }
    }
  }

  function getPoolLength() public view returns (uint256) {
    return poolInfo.length;
  }
}
