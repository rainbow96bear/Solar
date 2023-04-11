const DefiComponent = ({
  totalLpListUp,
  defiList,
  status,
  selectMainNet,
  formatNumber,
}) => {
  return (
    <>
      <div>defi API testing</div>

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
                <div style={{ width: "10%" }}>LP Id: {item.id}</div>
                <div style={{ width: "10%" }}>LP 이름 :{item.name} </div>
                <div style={{ width: "10%" }}>Platform : {item.platformId}</div>
                <div style={{ width: "10%" }}>
                  MainNet(메인넷) : {item.network}
                </div>
                <div style={{ width: "10%" }}>
                  APY : {parseInt(item.apy * 100) || 0}%
                </div>
                <div style={{ width: "10%" }}>
                  TVL : ${formatNumber(item.tvl)}
                </div>
                <div style={{ width: "10%" }}>
                  {" "}
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
      <button
        onClick={() => {
          totalLpListUp();
        }}
      >
        totalListUp
      </button>
      {/* <button onClick={()=>{selectMainNet();}}>selectMainNet</button> */}
    </>
  );
};
export default DefiComponent;
