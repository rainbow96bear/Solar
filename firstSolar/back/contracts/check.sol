// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract MonthlyCheck {
  uint256 private constant SECONDS_PER_DAY = 86400;
  uint256 private constant SECONDS_PER_MONTH = 30 * SECONDS_PER_DAY;
  uint256 private startTimestamp;

  constructor() {
    // 매월 1일을 기준으로 시작 시간 설정
    startTimestamp = block.timestamp - (block.timestamp % SECONDS_PER_MONTH);
  }

  function checkIfFirstDayOfMonth() public view returns (uint256) {
    uint256 currentDay = (block.timestamp - startTimestamp) / SECONDS_PER_DAY;
    return currentDay;
  }

  function time() public view returns(uint256){
return startTimestamp;
  }
}
