const APIComp = ({ APIClick, APIClick2 }) => {
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
    </div>
  );
};
export default APIComp;
