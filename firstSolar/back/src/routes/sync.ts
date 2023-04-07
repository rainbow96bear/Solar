import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post("/apiUse", async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error);
    res.send("실패");
  }
});
export default router;

// --디파짓--
// function deposit(uint _amount) public nonReentrant {
//   strategy.beforeDeposit();
//   uint256 _pool = balance();
//   want().safeTransferFrom(msg.sender, address(this), _amount);
//   earn();
//   uint256 _after = balance();
//   _amount = _after - _pool; // Additional check for deflationary tokens
//   uint256 shares = 0;
//   if (totalSupply() == 0) {
//       shares = _amount;
//   } else {
//       shares = (_amount * totalSupply()) / _pool;
//   }
//   _mint(msg.sender, shares);
// }
//
// --출금--
// function withdraw(uint256 _shares) public {
//   uint256 r = (balance() * _shares) / totalSupply();
//   _burn(msg.sender, _shares);
//   uint b = want().balanceOf(address(this));
//   if (b < r) {
//       uint _withdraw = r - b;
//       strategy.withdraw(_withdraw);
//       uint _after = want().balanceOf(address(this));
//       uint _diff = _after - b;
//       if (_diff < _withdraw) {
//           r = b + _diff;
//       }
//   }
//   want().safeTransfer(msg.sender, r);
// }
//
// --earn--
// function earn() public {
//   uint _bal = available();
//   want().safeTransfer(address(strategy), _bal);
//   strategy.deposit();
// }
//
// --proposeStrat--
// function proposeStrat(address _implementation) public onlyOwner {
//   require(address(this) == IStrategyV7(_implementation).vault(), "Proposal not valid for this Vault");
//   require(want() == IStrategyV7(_implementation).want(), "Different want");
//   stratCandidate = StratCandidate({
//       implementation: _implementation,
//       proposedTime: block.timestamp
//   });
//   emit NewStratCandidate(_implementation);
// }
//
// --upgradeStrat--
//  function upgradeStrat() public onlyOwner {
//  require(stratCandidate.implementation != address(0), "There is no candidate");
//  require(stratCandidate.proposedTime + approvalDelay < block.timestamp, "Delay has not passed");
//  emit UpgradeStrat(stratCandidate.implementation);
//  strategy.retireStrat();
//  strategy = IStrategyV7(stratCandidate.implementation);
//  stratCandidate.implementation = address(0);
//  stratCandidate.proposedTime = 5000000000;
//  earn();
// }
