const Emoji = ({ handleEmojiSelect, setEmojiStatus }) => {
  return (
    <>
      <div className="emoji-div">
        <img
          className="close-emoji-div"
          src={process.env.PUBLIC_URL + "/images/close.png"}
          onClick={() => setEmojiStatus(false)}
        />
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128512;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128513;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128514;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128515;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128516;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128517;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128518;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128519;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128520;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128521;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128522;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128523;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128524;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128525;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128526;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128527;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128528;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128529;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128530;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128531;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128532;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128533;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128534;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128535;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128536;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128537;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128538;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128539;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128540;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128541;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128542;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128543;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128544;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128545;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128546;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128547;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128548;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128549;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128550;</h1>
        <h1 onClick={(e) => handleEmojiSelect(e)}>&#128551;</h1>
      </div>
    </>
  );
};
export default Emoji;
