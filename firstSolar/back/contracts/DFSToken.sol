// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DFSToken is ERC20 {
  constructor(
    string memory _name,
    string memory _symbol,
    uint256 _amount
  ) ERC20(_name, _symbol) {
    _mint(msg.sender, _amount * 10 ** 18);
  }

  function reward(address _to, uint256 _amount) public {
    _mint(_to, _amount);
  }
}
