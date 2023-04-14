// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LiquidityPool is ERC20 {
  using SafeMath for uint256;
  // 오버플로우 언더플로우 방지 라이브러리사용
  // ERC20 token state variables
  ERC20 public immutable token1;
  ERC20 public immutable token2;
  // State variables for token reserves
  uint256 public reserve1;
  uint256 public reserve2;
  // State variables for liquidity shares
  uint256 public totalLiquidity;
  mapping(address => uint256) public userLiquidity;

  // Events
  event MintLpToken(address indexed _liquidityProvider, uint256 _sharesMinted);

  event BurnLpToken(address indexed _liquidityProvider, uint256 _sharesBurned);

  constructor(
    string memory _name,
    string memory _symbol,
    address _token1,
    address _token2
  ) ERC20(_name, _symbol) {
    // ERC20(_name,_symbol) 적어준이유?
    token1 = ERC20(_token1);
    token2 = ERC20(_token2);
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
  // Internal function to mint liquidity shares
  function mint(address _to, uint256 _amount) private {
    _mint(_to, _amount);
    //이함수 주석해서 필요없나?
    userLiquidity[_to] = balanceOf(_to);
    totalLiquidity = totalSupply();
  }

  // function _mint(address _to, uint256 _amount) private {
  //   userLiquidity[_to] = balanceOf(_to);
  //   totalLiquidity += _amount;
  // }

  // Internal function to burn liquidity shares
  function burn(address _from, uint256 _amount) private {
    _burn(_from, _amount);
    userLiquidity[_from] = balanceOf(_from);
    totalLiquidity = totalSupply();
  }

  // function _burn(address _from, uint256 _amount) private {
  //   userLiquidity[_from] -= _amount;
  //   totalLiquidity -= _amount;
  // }

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
    bool isToken1 = _tokenIn == address(token1);
    // _tokenIn과 token1이 같은 자산인지 여부를 판단하는 데 사용됩니다.

    (uint256 _reserve1, uint256 _reserve2) = getReserves();
    //  getReserves() 함수를 호출하고, 해당 함수의 반환 값을 _reserve1과 _reserve2 변수에 할당하는 코드입니다.
    // _reserve1과 _reserve2에 각각 유동성 풀에 예치된 첫 번째 자산과 두 번째 자산의 잔액을 할당합니다.

    (
      ERC20 tokenIn,
      ERC20 tokenOut,
      uint256 reserveIn,
      uint256 reserveOut
    ) = isToken1
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

    // Update the reserves
    _update(token1.balanceOf(address(this)), token2.balanceOf(address(this)));
  }

  // Function for user to add liquidity
  function addLiquidity(
    uint256 _amountToken1,
    uint256 _amountToken2
  ) external returns (uint256 _liquidityShares) {
    // User sends both tokens to liquidity pool
    require(
      token1.transferFrom(msg.sender, address(this), _amountToken1),
      "Token Transfer Failed"
    );
    require(
      token2.transferFrom(msg.sender, address(this), _amountToken2),
      "Token Transfer Failed"
    );
    /*
        Check if the ratio of tokens supplied is proportional
        to reserve ratio to satisfy x * y = k for price to not
        change if both reserves are greater than 0
        */
    (uint256 _reserve1, uint256 _reserve2) = getReserves();
    //getReserves" 함수를 호출하여 "_reserve1" 변수와 "_reserve2" 변수에 해당 함수에서 반환된 두 개의 uint256 타입의 값을 할당하는 코드

    if (_reserve1 > 0 || _reserve2 > 0) {
      if (
        min(_amountToken1.mul(_reserve2), _amountToken2.mul(_reserve1)) ==
        _amountToken1.mul(_reserve2)
      ) {
        uint amountToken2 = _amountToken1.mul(_reserve2).div(_reserve1);
        token2.transfer(msg.sender, _amountToken2.sub(amountToken2));
      } else {
        uint amountToken1 = _amountToken2.mul(_reserve1).div(_reserve2);
        token1.transfer(msg.sender, _amountToken1.sub(amountToken1));
      }
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
    uint256 _totalLiquidity = totalLiquidity;
    //_totalLiquidity" 변수는 이 스마트 계약에서 현재 유동성 풀에 총 투입된 자산의 양을 나타냅니다.

    //liquidityShares" 변수를 계산하는 코드

    if (_totalLiquidity == 0) {
      _liquidityShares = sqrt(_amountToken1 * _amountToken2);
    } else {
      _liquidityShares = min(
        ((_amountToken1 * _totalLiquidity) / _reserve1),
        ((_amountToken2 * _totalLiquidity) / _reserve2)
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

    uint256 _totalLiquidity = totalLiquidity;

    _amountToken1 = (_liquidityShares * token1Balance) / _totalLiquidity;
    _amountToken2 = (_liquidityShares * token2Balance) / _totalLiquidity;
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
  function min(uint256 x, uint256 y) internal pure returns (uint256 z) {
    z = x < y ? x : y;
  }
}
