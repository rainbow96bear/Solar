// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "LiquidityPool.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "Ownable.sol";

contract Dex is Ownable {
  using SafeMath for uint256;
  address immutable DFSTokenA;

  event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
  event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
  ERC20 _lpToken;
  //  ERC20타입

  struct UserInfo {
    uint256 amount;
    
  }

  mapping(uint256 => mapping(address => UserInfo)) public userInfo;

  struct PoolInfo {
    ERC20 lpToken;
    string symbol;
    uint256 total;
  }
  PoolInfo[] public poolInfo;
  // Owner's address of DEX
  address public immutable _owner;
  // Array of liquidity pool addresses

  // Mapping to get address of liquidity pool with token addresses
  mapping(address => mapping(address => address)) public getLiquidityPool;

  // Event
  event LiquidityPoolCreted(
    address indexed _addressToken1,
    address indexed _addressToken2,
    address indexed _addressLiquidityPool
  );

  constructor(address _DFSTokenA) {
    _owner = msg.sender;
    DFSTokenA = _DFSTokenA;
  }

  function createLiquidityPool(
    address _tokenA,
    address _tokenB
  ) external onlyOwner {
    (address _token1, address _token2) = _tokenA < _tokenB
      ? (_tokenA, _tokenB)
      : (_tokenB, _tokenA);
    //       위 코드는 _tokenA와 _tokenB라는 두 개의 인자를 받습니다.
    // 이 코드는 두 토큰 주소 중 알파벳순으로 빠른 주소를 _token1 변수에 할당하고,
    // 나머지를 _token2 변수에 할당합니다. 이를 위해 if 조건문과 삼항 연산자를 사용하여 구현합니다.
    // _tokenA < _tokenB는 _tokenA가 _tokenB보다 먼저 나오는 주소인지를 비교하는 것입니다.
    // 이 조건이 참일 경우, _token1에는 _tokenA를 할당하고, _token2에는 _tokenB를 할당합니다.
    // 만약 조건이 거짓일 경우, _token1에는 _tokenB를 할당하고, _token2에는 _tokenA를 할당합니다.
    // 이 코드를 사용하면 항상 _token1에는 알파벳순으로 빠른 주소가, _token2에는 그렇지 않은 주소가 할당됩니다.
    //  이는 스왑 함수에서 먼저 _token1을 보내고, 나중에 _token2를 보내는 것으로 구현할 때, 코드의 일관성을 유지하는 데 도움이 됩니다.

    require(_token1 != _token2, "Same Token Addresses");
    require(_token1 != address(0), "Invalid Token Address");
    require(_token2 != address(0), "Invalid Token Address");
    require(
      getLiquidityPool[_token1][_token2] == address(0),
      "Pool Already Exists"
    );
    // string memory symbol1 = ERC20(_token1).symbol();
    // string memory symbol2 = ERC20(_token2).symbol();
    // string memory name = string(abi.encodePacked(symbol1, "-", symbol2));
    _lpToken = ERC20(
      new LiquidityPool("DFSLP", "DFSLP", _token1, _token2, DFSTokenA)
    );
    //ERC20을 상속받은 LiquidityPool 컨트랙트의 인스턴스를 생성
    //DFS-LP가 name,symbol
    getLiquidityPool[_token1][_token2] = address(_lpToken);
    //위 코드는 _token1과 _token2 주소를 이용해 매핑된 getLiquidityPool 맵에 유동성 풀 컨트랙트 주소를 저장

    poolInfo.push(PoolInfo({ lpToken: _lpToken, symbol: "DFSLP", total: 0 }));
    ///IERC20 lpToken; 의 구조체 타입 lpToken이 키
    // IERC20 타입으로 lpToken
    //   struct PoolInfo {
    //   IERC20 lpToken;
    // }

    emit LiquidityPoolCreted(_token1, _token2, address(_lpToken));
  }

  function deposit(uint256 _pid, uint256 _amount) public {
    PoolInfo storage pool = poolInfo[_pid];
    UserInfo storage user = userInfo[_pid][msg.sender];

    pool.lpToken.transferFrom(address(msg.sender), address(this), _amount);
    // msg.sender가 이계약 주소 lp ca한테 amount만큼 보낸다
    pool.total = pool.total.add(_amount);
    user.amount = user.amount.add(_amount);

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
    pool.total = pool.total.sub(_amount);
    emit Withdraw(msg.sender, _pid, _amount);
  }

  function getpoolInfo() public view returns (PoolInfo[] memory) {
    return poolInfo;
  }

  function getPid(address poolCA) public view returns (uint) {
    for (uint i = 0; i < poolInfo.length; i++) {
      if (address(poolInfo[i].lpToken) == poolCA) {
        return i;
      }
    }
  }
}
