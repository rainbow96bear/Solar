const DefiComponent = ({ totalLpListUp, defi0x, status, selectMainNet }) => {
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
                <div>LP Id: {item.id}</div>
                <div>LP 이름 :{item.name} </div>

                <div>Platform : {item.platformId}</div>
                <div>MainNet(메인넷) : {item.network}</div>
                <div>APY : {parseInt(item.apy * 100) || 0}%</div>
                <div>TVL : ${item.tvl}</div>
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
