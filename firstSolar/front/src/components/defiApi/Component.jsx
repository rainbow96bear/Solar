const DefiComponent = ({ totalLpListUp, defi0x, status, testFunc }) => {
  return (
    <>
      <div>defi API testing</div>

      {status ? (
        status == 2 ? (
          <div>
            데이터가져오기 성공
            {defi0x?.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  LP Id: {item.id.slice(0, 4) + "..." + item.id.slice(-4)}{" "}
                </div>
                <div>LP 이름 :{item.symbol} </div>
                <div>LP Token1 :{item.inputTokens[0]?.symbol} </div>
                <div>LP Token2 :{item.inputTokens[1]?.symbol} </div>
                <div>Platform : {item.name.split(" ")[0]}</div>
                <div>LP TotalSupply : {item.cumulativeVolumeUSD}</div>
                <div>MainNet(메인넷) : {item.name.split(" ")[0]}</div>
                <div>APY : {item.apy || 0}%</div>
                <div>TVL : ${item.totalValueLockedUSD}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>로딩중</div>
        )
      ) : (
        <div>버튼을 눌러주세요</div>
      )}
      <button onClick={testFunc}>defi</button>
    </>
  );
};
export default DefiComponent;
