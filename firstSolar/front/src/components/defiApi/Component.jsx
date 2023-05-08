const DefiComponent = ({ personalSign }) => {
  return (
    <>
      <div>defi API testing</div>
      <button
        onClick={(e) => {
          e.preventDefault();
          personalSign();
        }}
      >
        서명
      </button>
    </>
  );
};
export default DefiComponent;
