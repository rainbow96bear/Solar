const DefiComponent = ({ testing, defi0x }) => {
  return (
    <>
      <div>defi API testing</div>
      {/* {defi0x.length && (
        <>
          <div>{defi0x[0].websiteUrl}</div>
          <div>{defi0x[0].positionInfos[0].logo}</div>
          <div>{defi0x[0].positionInfos[0].contractAddress}</div>
          <div>{defi0x[0].positionInfos[0].section}</div>
          <div>{defi0x[0].positionInfos[0].symbol}</div>
        </>
      )} */}
      {defi0x &&
        defi0x.map((item, index) => (
          <>
            <div>해당 계정 : {item.owned}</div>
            <div>MainNET : {item.chain}</div>
            <div>Defi Protocol : {item.protocol}</div>
            <div key={`defiAPI-websiteUrl-${index}`}>
              SwapSite :{item.websiteUrl}
            </div>
            <div key={`defiAPI-logo-${index}`}>Defi Logo 주소 :{item.logo}</div>
            <img src={item.logo} alt="" />
            <div key={`defiAPI-contractAddress-${index}`}>
              해당 Pool CA: {item.positionInfos[0].contractAddress}
            </div>
            <div key={`defiAPI-section-${index}`}>
              상태 : {item.positionInfos[0].section}
            </div>
            <div key={`defiAPI-symbol-${index}`}>
              TokenSymbol : {item.positionInfos[0].symbol}
            </div>
          </>
        ))}
      <button onClick={testing}>defi</button>
    </>
  );
};
export default DefiComponent;
