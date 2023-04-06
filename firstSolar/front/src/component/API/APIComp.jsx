const APIComp = ({ APIClick }) => {
  return (
    <div>
      <button
        onClick={() => {
          APIClick();
        }}
      >
        두과자
      </button>
    </div>
  );
};
export default APIComp;
