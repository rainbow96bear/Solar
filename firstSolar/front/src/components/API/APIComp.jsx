const APIComp = ({
  APIClick,
  NowUSDTprice,
  NowETHprice,
  NowBNBprice,
  BNBtoUSDT,
  BNBtoETH,
  ETHtoBNB,
  ETHtoUSDT,
  USDTtoETH,
  USDTtoBNB,
}) => {
  return (
    <div>
      <button
        onClick={() => {
          APIClick();
          console.log({
            NowUSDTprice,
            NowETHprice,
            NowBNBprice,
            BNBtoUSDT,
            BNBtoETH,
            ETHtoBNB,
            ETHtoUSDT,
            USDTtoETH,
            USDTtoBNB,
          });
        }}
      >
        두과자
      </button>
    </div>
  );
};
export default APIComp;
