// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract WrappedMATIC is ERC20 {
  IERC20 public matic;

  constructor(address _matic) ERC20("Wrapped MATIC", "WMATIC") {
    matic = IERC20(_matic);
  }

  function wrap(uint256 amount) external {
    require(amount > 0, "Amount should be greater than 0");
    matic.transferFrom(msg.sender, address(this), amount);
    _mint(msg.sender, amount);
  }

  function unwrap(uint256 amount) external {
    require(amount > 0, "Amount should be greater than 0");
    require(balanceOf(msg.sender) >= amount, "Insufficient WMATIC balance");
    _burn(msg.sender, amount);
    matic.transfer(msg.sender, amount);
  }
}
