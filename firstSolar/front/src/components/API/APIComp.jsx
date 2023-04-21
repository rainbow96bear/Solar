const APIComp = ({
  // SwapToken == swap 실행 버튼
  SwapToken,
  // set volum == swap 수량값 조절
  setVolum,
  // volum == swap 수량
  volum,
  // selectSwapToken == 스왑을 진행할 토큰
  selectSwapToken,
  // selectedSecondSwapToken == 스왑의 결과 토큰
  selectedSecondSwapToken,
  // handleChange == 스왑하려는 토큰(select) 현재 값 확인
  handleChange,
  // handleSecondChange == 스왑하려는 토큰(select) 현재 값 확인
  handleSecondChange,
  // returnSwapConvertPrice == 스왑을 진행해 나오는 결과값
  returnSwapConvertPrice,
}) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <input
            type="text"
            value={volum}
            onChange={(e) => {
              setVolum(e.target.value);
            }}
          />
        </div>
        <select value={selectSwapToken} onChange={handleChange}>
          <option value="">Select Options</option>
          <option value="usdt">USDT</option>
          <option value="eth">ETH</option>
          <option value="bnb">BNB</option>
        </select>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <input
            type="text"
            placeholder="0"
            value={
              isNaN(returnSwapConvertPrice) ||
              returnSwapConvertPrice === null ||
              returnSwapConvertPrice === undefined
                ? "0"
                : returnSwapConvertPrice
            }
          />
        </div>
        <select value={selectedSecondSwapToken} onChange={handleSecondChange}>
          <option value="">Select Options</option>
          <option value="usdt">USDT</option>
          <option value="eth">ETH</option>
          <option value="bnb">BNB</option>
        </select>
      </div>

      <button onClick={SwapToken}>첫번째 토큰결정</button>
    </div>
  );
};
export default APIComp;
