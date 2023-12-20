const SelectionHeader = ({ handleOptionBack, handleDeleteSelected }) => {
  return (
    <>
      <div className="selection-heading">
        <div className="options-div">
          <button
            className="backward-btn option-btn"
            onClick={handleOptionBack}
          >
            <img
              className="backward"
              src={process.env.PUBLIC_URL + "/images/arrow.png"}
              alt="backward-img"
            />
          </button>
          <button
            className="delete-btn option-btn"
            onClick={handleDeleteSelected}
          >
            <img
              className="delete"
              src={process.env.PUBLIC_URL + "/images/delete.png"}
              alt="delete-img"
            />
          </button>
          <button className="forward-btn option-btn">
            <img
              className="forward"
              src={process.env.PUBLIC_URL + "/images/arrow.png"}
              alt="forward-img"
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default SelectionHeader;
