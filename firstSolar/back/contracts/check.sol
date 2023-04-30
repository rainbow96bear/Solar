// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MonthlyCheck {
  function isLeapYear(uint16 year) public pure returns (bool) {
    return (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0));
  }

  function daysPerMonth(uint16 month, uint16 year) public pure returns (uint8) {
    if (month == 2) {
      return isLeapYear(year) ? 29 : 28;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      return 30;
    } else {
      return 31;
    }
  }

  function checkIfFirstDayOfMonth() public view returns (bool) {
    uint256 currentTime = block.timestamp;
    (uint16 year, uint16 month, uint16 day) = timestampToDate(currentTime);
    return day == 1;
  }

  function checkIfLastDayOfMonth() public view returns (bool) {
    uint256 currentTime = block.timestamp;
    (uint16 year, uint16 month, uint16 day) = timestampToDate(currentTime);
    uint8 daysInCurrentMonth = daysPerMonth(month, year);
    return day == daysInCurrentMonth;
  }

  function checktime() public view returns (uint256) {
    return block.timestamp;
  }

  function timestampToDate(
    uint256 _timestamp
  ) public pure returns (uint16, uint16, uint16) {
    uint16 year = uint16((1970 + _timestamp / 31556952));
    uint16 month = 1;
    uint256 totalDays = _timestamp / 86400;

    for (uint16 i = 1970; i < year; i++) {
      totalDays -= daysPerYear(i);
    }

    for (; month <= 12; month++) {
      uint8 daysInMonth = daysPerMonth(month, year);
      if (totalDays >= daysInMonth) {
        totalDays -= daysInMonth;
      } else {
        break;
      }
    }

    return (year, month, uint16(totalDays + 1));
  }

  function daysPerYear(uint16 year) public pure returns (uint16) {
    return isLeapYear(year) ? 366 : 365;
  }
}
