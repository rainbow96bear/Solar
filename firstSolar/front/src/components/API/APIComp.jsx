const APIComp = ({ APIClick, APIClick2, priceData }) => {
  return (
    <div>
      <button
        onClick={() => {
          APIClick();
        }}
      >
        두과자
      </button>
      <button
        onClick={() => {
          APIClick2();
        }}
      >
        두과자2
      </button>
      <div>{priceData.map((item) => item.dltId)}</div>
      <div>
        {priceData.map((item) => item.rate[("bnt", "usd", "eur", "eth")])}
      </div>
      <div>{priceData.map((item) => item.symbol)}</div>
    </div>
  );
};
export default APIComp;
