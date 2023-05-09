// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "IDFS.sol";
import "IReward.sol";

contract LiquidityPool is ERC20 {
  IDFS immutable DFS;
  //immutable 한번설정되면 변경불가능
  using SafeMath for uint256;
  // 오버플로우 언더플로우 방지 라이브러리사용

  // ERC20 token state variables
  ERC20 public immutable token1;
  // ERC20타입의 token1
  ERC20 public immutable token2;
  // State variables for token reserves
  uint256 public reserve1;
  uint256 public reserve2;
  // State variables for liquidity shares
  uint256 public totalLiquidity;

  address public DexA;

  // mapping(address=>uint256) public DexABalances;
  mapping(address => uint256) public userLiquidity;
  address public rewardA;

  modifier onlyMinter() {
    require(msg.sender == DexA, "Caller is not the minter");
    _;
  }

  // Events
  event MintLpToken(address indexed _liquidityProvider, uint256 _sharesMinted);
  // sharesMinted는 lp토큰의 수

  event BurnLpToken(address indexed _liquidityProvider, uint256 _sharesBurned);

  uint private unlocked = 1;
  modifier lock() {
    require(unlocked == 1, "LOCKED");
    unlocked = 0;
    _;
    unlocked = 1;
  }
  uint private rLock = 1;
  modifier rewardLock() {
    require(rLock == 1, "LOCKED");
    rLock = 0;
    _;
  }

  constructor(
    string memory _name,
    string memory _symbol,
    address _token1,
    address _token2,
    address DFSTokenA,
    address _DexA
  ) ERC20(_name, _symbol) {
    token1 = ERC20(_token1);
    token2 = ERC20(_token2);
    DFS = IDFS(DFSTokenA);
    DexA = _DexA;
  }

  function add(address _rewardA) public rewardLock {
    rewardA = _rewardA;
  }

  // Function to get reserves
  function getReserves()
    public
    view
    returns (uint256 _reserve1, uint256 _reserve2)
  {
    _reserve1 = reserve1;
    _reserve2 = reserve2;
  }

  // 외부에서 호출되어 유동성풀의 현재상태를 조회 유동성풀의 예비자산을 업데이트함
  // 유동성풀의 상태 모니터링
  // reserve는잔액

  // Internal function to mint liquidity shares
  // lp토큰추가 _to는 lp토큰 받을 사용자의 주소
  function minter(address _to, uint256 _amount) public onlyMinter {
    _mint(_to, _amount);
    userLiquidity[_to] = userLiquidity[_to].add(_amount);
    totalLiquidity = totalSupply();
  }

  function mint(address _to, uint256 _amount) private {
    _mint(_to, _amount);
    userLiquidity[_to] = userLiquidity[_to].add(_amount);
    totalLiquidity = totalSupply();
  }

  // Internal function to burn liquidity shares
  // from은 lp토큰 소유한 사용자 주소

  function burn(address _from, uint256 _amount) private {
    _burn(_from, _amount);
    userLiquidity[_from] = userLiquidity[_from].sub(_amount);
    totalLiquidity = totalSupply();
  }

  // Internal function to update liquidity pool reserves
  function _update(uint256 _reserve1, uint256 _reserve2) private {
    reserve1 = _reserve1;
    reserve2 = _reserve2;
  }

  // 내부적으로 호출되어 유동성풀의 상태를 업데이트

  // Function for user to swap tokens
  // NOTE: Could possibly make this into 2 functions for gas saving
  function swapTokens(
    address _tokenIn,
    uint256 _amountIn
  ) external returns (uint256 _amountOut) {
    //_tokenIn의 erc20토큰주소 _amountIn은 ERC20의 토큰의 양

    require(
      _tokenIn == address(token1) || _tokenIn == address(token2),
      "Invalid Token Address"
    );
    // tokenIn주소가 address(token1과 token2와 같은지 확인)

    // Retrieve the "token in" token
    // _tokenIn과 token1이 같은 자산인지 여부를 판단하는 데 사용됩니다.

    (uint256 _reserve1, uint256 _reserve2) = getReserves();
    //  getReserves() 함수를 호출하고, 해당 함수의 반환 값을 _reserve1과 _reserve2 변수에 할당하는 코드입니다.
    // _reserve1과 _reserve2에 각각 유동성 풀에 예치된 첫 번째 자산과 두 번째 자산의 잔액을 할당합니다.

    (
      ERC20 tokenIn,
      ERC20 tokenOut,
      uint256 reserveIn,
      uint256 reserveOut
    ) = _tokenIn == address(token1)
        ? (token1, token2, _reserve1, _reserve2)
        : (token2, token1, _reserve2, _reserve1);
    //  할당 과정에서, isToken1이 true이면 tokenIn에 token1을, tokenOut에 token2를, reserveIn에 _reserve1을, reserveOut에 _reserve2를 할당합니다. isToken1이 false인 경우는 반대로 할당됩니다.
    // 변수들은 이후 코드에서 유동성 교환을 위해 사용됩니다. tokenIn과 tokenOut은 교환에 참여하는 두 자산을 나타내고, reserveIn과 reserveOut은 교환 직전의 유동성 풀 상태를 나타냅니다.
    // Transfer tokenIn to the liquity pool
    require(_amountIn > 0, "Insufficient Amount");
    //_amountIn 교환하려는 자산의양

    tokenIn.transferFrom(msg.sender, address(this), _amountIn);
    //tokenIn은 IERC20 인터페이스를 구현한 토큰 계약을 가리키는 변수이며,
    //유동성 교환을 위해 교환에 참여하는 자산의 양을 계약으로 예치하는데 사용
    //msg.sender 계정에서 _amountIn만큼의 tokenIn 토큰을 전송하도록 지시합니다.

    // Calculate tokenIn with fee of 0.3%
    uint256 _amountInWithFee = (_amountIn * 997) / 1000;
    // rwdToken1Amount = rwdToken1Amount+(_amountIn * 3) / 1000;
    // _amountInWithFee는 유동성 교환에 참여하는 실제 자산의 양이며, 이후 코드에서 유동성 풀의 상태를 업데이트하고, 교환할 자산의 양을 계산하는 데 사용된다

    /*
        Calculate tokenOut amount using x * y = k
        > (x + dx) * (y + dy) = k`
        > y - dy = (xy) / (x + dx)
        > dy = y - ((xy) / (x + dx))
        > dy = y * (1 - (x / (x + dx)))
        > dy = y * (((x + dx) / (x + dx)) - (x / (x + dx)))
        > dy = y * (dx / (x + dx))
        ~~~ dy = (y * dx) / (x + dx) ~~~
        */
    //유동성 교환 시 교환할 자산의 양을 계산

    _amountOut =
      (reserveOut * _amountInWithFee) /
      (reserveIn + _amountInWithFee);

    require(_amountOut < reserveOut, "Insufficient Liquidity");
    //유동성 교환에 참여하는 자산의 양과 유동성 풀의 잔액을 고려하여, 교환 예상 tokenOut의 양을 계산
    // Transfer tokenOut to the user
    tokenOut.transfer(msg.sender, _amountOut);
    DFSPairAirDrop(
      address(tokenIn),
      _amountIn.mul(3).div(1000),
      address(tokenOut),
      0
    );
    //유동성 교환 결과로 받게 되는 tokenOut 토큰을 msg.sender 계정으로 전송하는 데 사용됩니다.

    // Update the reserves
    _update(token1.balanceOf(address(this)), token2.balanceOf(address(this))); // token1과 token2는 각각 IERC20 인터페이스를 구현한 토큰 계약을 가리키는 변수입니다.
    // balanceOf() 함수는 해당 계약의 잔액 정보를 반환합니다. 따라서, 이 코드에서는 계약의 토큰 잔액 정보를 가져와서 유동성 풀의 상태를 업데이트
  }

  function rewardSelfSwap(
    address _tokenIn,
    uint256 _amountIn
  ) private returns (uint256 _amountOut) {
    require(_tokenIn != address(DFS));

    require(_amountIn > 0, "Insufficient Amount");
    (uint256 _reserve1, uint256 _reserve2) = getReserves();
    (uint256 reserveOut, uint256 reserveIn) = _tokenIn == address(token1)
      ? (_reserve2, _reserve1)
      : (_reserve1, _reserve2);

    _amountOut = (reserveOut * _amountIn) / (reserveIn + _amountIn);
    ERC20(address(DFS)).transfer(address(rewardA), _amountOut);
    require(_amountOut < reserveOut, "Insufficient Liquidity");
    _update(token1.balanceOf(address(this)), token2.balanceOf(address(this)));
  }

  // Function for user to add liquidity
  function addLiquidity(
    uint256 _amountToken1,
    uint256 _amountToken2
  ) external lock returns (uint256 _liquidityShares) {
    // User sends both tokens to liquidity pool
    require(
      token1.transferFrom(msg.sender, address(this), _amountToken1),
      "Token Transfer Failed"
    );
    require(
      token2.transferFrom(msg.sender, address(this), _amountToken2),
      "Token Transfer Failed"
    );
    // _amountToken1이나 _amountToken2 만큼의 "token1" "token2" 토큰을 이 스마트 계약으로 전송할 수 있습니다

    /*
        Check if the ratio of tokens supplied is proportional
        to reserve ratio to satisfy x * y = k for price to not
        change if both reserves are greater than 0
        */
    (uint256 _reserve1, uint256 _reserve2) = getReserves();
    //getReserves" 함수를 호출하여 "_reserve1" 변수와 "_reserve2" 변수에 해당 함수에서 반환된 두 개의 uint256 타입의 값을 할당하는 코드

    if (_reserve1 > 0 || _reserve2 > 0) {
      uint256 amountToken1;
      uint256 amountToken2;
      uint256 t1 = _amountToken1.mul(_reserve2);
      uint256 t2 = _amountToken2.mul(_reserve1);
      if (min(t1, t2) == t1) {
        amountToken2 = t1 / _reserve1;
        token2.transfer(msg.sender, _amountToken2 - amountToken2);
        _amountToken2 = amountToken2;
      } else {
        amountToken1 = t2 / _reserve2;
        token1.transfer(msg.sender, _amountToken1 - amountToken1);
        _amountToken1 = amountToken1;
      }
      DFSPairAirDrop(
        address(token1),
        _amountToken1.mul(3).div(1000),
        address(token2),
        _amountToken2.mul(3).div(1000)
      );
    }
    /*
        Calculate number of liquidity shares to mint using
        the geometric mean as a measure of liquidity. Increase
        in liquidity is proportional to increase in shares
        minted.
        > S = (dx / x) * TL
        > S = (dy / y) * TL
        NOTE: Amount of liquidity shares minted formula is similar
        to Uniswap V2 formula. For minting liquidity shares, we take
        the minimum of the two values calculated to incentivize depositing
        balanced liquidity.
        */
    //_totalLiquidity" 변수는 이 스마트 계약에서 현재 유동성 풀에 총 투입된 자산의 양을 나타냅니다.

    //liquidityShares" 변수를 계산하는 코드

    if (totalLiquidity == 0) {
      _liquidityShares = sqrt(_amountToken1 * _amountToken2);
      //이는 두 토큰 간의 상대적인 가치를 기준으로 초기 유동성을 할당하는 것입니다.
    } else {
      _liquidityShares = min(
        ((_amountToken1 * totalLiquidity) / _reserve1),
        ((_amountToken2 * totalLiquidity) / _reserve2)
      );
      //위 코드에서는 "min" 함수를 사용하여 두 계산 결과 중 작은 값을 "liquidityShares" 변수에 할당합니다.
      // 이렇게 함으로써, 제거할 유동성의 양이 두 토큰 간의 균형을 유지하면서 제거되도록 보장
    }

    require(_liquidityShares > 0, "No Liquidity Shares Minted");
    // Mint shares to user
    mint(msg.sender, _liquidityShares);
    //mint" 함수를 이용하여 새로운 유동성을 추가하는 과정에서, 해당 유동성에 대한 ERC-20 토큰을 사용자의 계좌로 발행

    // Update the reserves
    _update(token1.balanceOf(address(this)), token2.balanceOf(address(this)));
    // 유동성 풀의 현재 상태를 최신 정보로 업데이트

    emit MintLpToken(msg.sender, _liquidityShares);
  }

  /*
    Function for user to remove liquidity
    > dx = (S / TL) * x
    > dy = (S / TL) * y
    */
  function removeLiquidity(
    uint256 _liquidityShares
  ) external returns (uint256 _amountToken1, uint256 _amountToken2) {
    require(
      userLiquidity[msg.sender] >= _liquidityShares,
      "Insufficient liquidity shares"
    );
    // Get balance of both tokens
    uint256 token1Balance = token1.balanceOf(address(this));
    uint256 token2Balance = token2.balanceOf(address(this));
    // "token1"과 "token2" 토큰의 잔액을 계산하여, "token1Balance" 변수와 "token2Balance" 변수에 저장하는 코드

    _amountToken1 = (_liquidityShares * token1Balance) / totalLiquidity;
    _amountToken2 = (_liquidityShares * token2Balance) / totalLiquidity;
    // / 유저가 제거하고자 하는 유동성의 양("_liquidityShares")을 바탕으로, "token1" 토큰에 대한 제거할 양("_amountToken1")을 계산하는 코드
    // , 현재 "token1" 토큰의 잔액("token1Balance")과 현재 유동성 풀에 투입된 "token1" 토큰의 총 잔액("_totalLiquidity")을 바탕으로 "_liquidityShares" 수량에 대한 "token1" 토큰의 제거 양("_amountToken1")을 계산

    require(
      _amountToken1 > 0 && _amountToken2 > 0,
      "Insufficient transfer amounts"
    );

    // Burn user liquidity shares
    burn(msg.sender, _liquidityShares);

    // Update reserves
    _update(token1Balance - _amountToken1, token2Balance - _amountToken2);
    //"token1"과 "token2"의 새로운 잔액을 계산한 후, "_update" 함수를 호출하여 유동성 풀의 현재 상태를 최신 정보로 업데이트

    // Transfer tokens to user
    token1.transfer(msg.sender, _amountToken1);
    token2.transfer(msg.sender, _amountToken2);

    emit BurnLpToken(msg.sender, _liquidityShares);
  }

  // Internal function to square root a value from Uniswap V2
  // uint256 제곱급 계산 반환함수

  // Internal function to square root a value from Uniswap V2
  function sqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // Internal function to find minimum value from Uniswap V2
  // 두개의 값중 작은거 반환

  function min(uint256 x, uint256 y) internal pure returns (uint256 z) {
    z = x < y ? x : y;
  }

  function DFSPairAirDrop(
    address _token1,
    uint256 _amountToken1,
    address _token2,
    uint256 _amountToken2
  ) public {
    if (_amountToken2 == 0) {
      if (_token1 != address(DFS)) {
        rewardSelfSwap(address(_token1), _amountToken1);
      } else {
        ERC20(address(DFS)).transfer(rewardA, _amountToken1);
      }
    } else {
      if (_token1 != address(DFS)) {
        rewardSelfSwap(address(_token1), _amountToken1);
        ERC20(address(DFS)).transfer(rewardA, _amountToken2);
      } else {
        rewardSelfSwap(address(_token2), _amountToken2);
        ERC20(address(DFS)).transfer(rewardA, _amountToken1);
      }
    }
    uint256 rewardOfToken1 = _amountToken1.div(3).mul(4);
    uint256 rewardOfToken2 = _amountToken2.div(3).mul(4);
    (uint256 _reserve1, uint256 _reserve2) = getReserves();
    uint256 totalDFS = rewardOfToken1.add(
      (rewardOfToken2.mul(_reserve1)).div(_reserve2)
    );
    IReward(rewardA).rewards();
    DFS.reward(msg.sender, totalDFS);
  }

  function usdtSwap(
    address _tokenIn,
    uint256 _amountIn
  ) external returns (uint256 _amountOut) {
    require(
      _tokenIn == address(token1) || _tokenIn == address(token2),
      "Invalid Token Address"
    );

    (uint256 _reserve1, uint256 _reserve2) = getReserves();
    (
      ERC20 tokenIn,
      ERC20 tokenOut,
      uint256 reserveIn,
      uint256 reserveOut
    ) = _tokenIn == address(token1)
        ? (token1, token2, _reserve1, _reserve2)
        : (token2, token1, _reserve2, _reserve1);
    require(_amountIn > 0, "Insufficient Amount");
    tokenIn.transferFrom(msg.sender, address(this), _amountIn);
    uint256 _amountInWithFee = _amountIn;

    _amountOut =
      (reserveOut * _amountInWithFee) /
      (reserveIn + _amountInWithFee);

    require(_amountOut < reserveOut, "Insufficient Liquidity");
    tokenOut.transfer(msg.sender, _amountOut);

    _update(token1.balanceOf(address(this)), token2.balanceOf(address(this))); // token1과 token2는 각각 IERC20 인터페이스를 구현한 토큰 계약을 가리키는 변수입니다.
  }

  function dfsSwap(
    address _lpAddress,
    address _tokenIn,
    uint256 _amountIn
  ) external returns (uint256 _amountOut) {
    require(
      _tokenIn == address(token1) || _tokenIn == address(token2),
      "Invalid Token Address"
    );

    (uint256 _reserve1, uint256 _reserve2) = getReserves();
    (
      ERC20 tokenIn,
      ERC20 tokenOut,
      uint256 reserveIn,
      uint256 reserveOut
    ) = _tokenIn == address(token1)
        ? (token1, token2, _reserve1, _reserve2)
        : (token2, token1, _reserve2, _reserve1);
    require(_amountIn > 0, "Insufficient Amount");
    tokenIn.transferFrom(msg.sender, address(this), _amountIn);
    uint256 _amountInWithFee = _amountIn;

    _amountOut =
      (reserveOut * _amountInWithFee) /
      (reserveIn + _amountInWithFee);

    require(_amountOut < reserveOut, "Insufficient Liquidity");
    tokenOut.transfer(_lpAddress, _amountOut);

    _update(token1.balanceOf(address(this)), token2.balanceOf(address(this))); // token1과 token2는 각각 IERC20 인터페이스를 구현한 토큰 계약을 가리키는 변수입니다.
  }
}
