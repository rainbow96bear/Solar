const DefiComponent = ({
  totalLpListUp,
  defiList,
  status,
  formatNumber,
  mainNetList,
  dexList,
  filterNetworkAndDex,
}) => {
  return (
    <>
      <div>defi API testing</div>
      <button
        onClick={() => {
          totalLpListUp();
        }}
      >
        totalListUp
      </button>
      <div>
        {mainNetList?.map((item, index) => (
          <>
            <button
              onClick={() => {
                filterNetworkAndDex(item, "");
              }}
            >
              {item}
            </button>
          </>
        ))}
      </div>
      <div>
        {dexList?.map((item, index) => (
          <>
            <button
              onClick={() => {
                filterNetworkAndDex("", item);
              }}
            >
              {item}
            </button>
          </>
        ))}
      </div>
      {status ? (
        status == 2 ? (
          <div>
            데이터가져오기 성공
            {defiList?.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {item.tokens?.length == 2 ? (
                  <div
                    style={{
                      width: "10%",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    Tokens
                    <div>{item.tokens[0]}</div>
                    <div>{item.tokens[1]}</div>
                  </div>
                ) : (
                  <>No Pair Tokens</>
                )}
                <div style={{ width: "10%" }}>LP 이름 :{item.name} </div>
                <div style={{ width: "10%" }}>Platform : {item.platformId}</div>
                <div style={{ width: "10%" }}>
                  <img src={item.platformLogo} alt="" />
                </div>
                <div style={{ width: "10%" }}>
                  MainNet(메인넷) : {item.network}
                </div>
                <div style={{ width: "10%" }}>
                  <img src={item.mainNetLogo} alt="" />
                </div>
                <div style={{ width: "10%" }}>
                  APY : {parseInt(item.apy * 100) || 0}%
                </div>
                <div style={{ width: "10%" }}>
                  TVL : ${formatNumber(item.tvl)}
                </div>
                <div style={{ width: "10%" }}>
                  daily : {Math.round(item.dailyTvlRate * 10000) / 10000 || 0}%
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>로딩중</div>
        )
      ) : (
        <div>버튼을 눌러주세요</div>
      )}
    </>
  );
};
export default DefiComponent;
