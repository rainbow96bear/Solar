// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "../contracts/Token.sol";

contract EthSwap {
  string public name = "EthSwap Instant Exchange";
  Token public token;
  uint public rate = 100;
  // 토큰 비율

  event TokensPurchased(address account, address token, uint amount, uint rate);

  event TokensSold(address account, address token, uint amount, uint rate);

  constructor(Token _token) {
    token = _token;
    // 토큰 컨트랙트 인스턴스 초기화
  }

  function buyTokens() public payable {
    // 토큰 구매함수
    // Calculate the number of tokens to buy
    uint tokenAmount = msg.value * rate;
    // 토큰 구매량 계산

    // Require that EthSwap has enough tokens
    require(
      token.balanceOf(address(this)) >= tokenAmount,
      "Insufficient token balance in EthSwap contract"
    );
    //EthSwap 컨트랙트가 충분한 토큰을 보유하고 있는지 확인
    // 토큰잔액확인

    // Transfer tokens to the user
    token.transfer(msg.sender, tokenAmount);
    // 사용자에게 토큰전송

    // Emit an event
    emit TokensPurchased(msg.sender, address(token), tokenAmount, rate);
  }

  function sellTokens(uint _amount) public payable {
    // 토큰판매함수
    // User can't sell more tokens than they have
    require(
      token.balanceOf(msg.sender) >= _amount,
      "Insufficient token balance"
    );
    // 사용자가 충분한 토큰을 보유하고있는지 확인

    // Calculate the amount of Ether to redeem
    uint etherAmount = _amount / rate;
    // 판매할 토큰의 Ether 가치 계산

    // Require that EthSwap has enough Ether
    require(
      address(this).balance >= etherAmount,
      "Insufficient ether balance in EthSwap contract"
    );
    // EthSwap 컨트랙트가 충분한 Ether를 보유하고 있는지 확인
    // 이더잔액확인

    // Perform sale
    token.transferFrom(msg.sender, address(this), _amount);
    // 사용자가 토큰을 EthSwap 컨트랙트로 전송
    payable(msg.sender).transfer(etherAmount);
    // 사용자에게 Ether 전송
    // msg.sender address가 transfer함수쓰려면 payalble로 형변환해야한다

    // Emit an event
    emit TokensSold(msg.sender, address(token), _amount, rate);
  }
}
