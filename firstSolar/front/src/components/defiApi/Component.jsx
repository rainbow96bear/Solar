const DefiComponent = ({ testing }) => {
  return (
    <>
      <div>defi API testing</div>
      <button
        onClick={(e) => {
          e.preventDefault();
          testing();
        }}
      >
        메타마스크 연습
      </button>
    </>
  );
};
export default DefiComponent;
