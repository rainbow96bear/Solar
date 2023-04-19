const APIComp = ({
  SwapToken,
  setKeyWord,
  secondKeyWord,
  setSecondkeyWord,
  firstSelectTokenPrice,
  secondSelectTokenPrice,
  keyWord,
  convertToken,
  selectedOptions,
  handleChange,
}) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={keyWord}
          onChange={(e) => {
            setKeyWord(e.target.value);
          }}
        />
        <select value={selectedOptions} onChange={handleChange}>
          <option value="">Select Options</option>
          <option value="usdt">USDT</option>
          <option value="eth">ETH</option>
          <option value="bnb">BNB</option>
        </select>

        <input type="text" value={firstSelectTokenPrice} />
      </div>
      <div>
        <input
          type="text"
          value={secondKeyWord}
          onChange={(e) => {
            setSecondkeyWord(e.target.value.toLowerCase());
          }}
        />

        <input type="text" value={secondSelectTokenPrice} />
      </div>

      <button onClick={SwapToken}>첫번째 토큰결정</button>
      <button onClick={convertToken}>두번째 토큰결정</button>
    </div>
  );
};
export default APIComp;
