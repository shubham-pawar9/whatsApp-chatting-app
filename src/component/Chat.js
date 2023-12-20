import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Emoji from "./Emoji";
import SelectionHeader from "../SelectionHeader";

const Chat = ({
  chatSelect,
  setChatActive,
  chattingObjArray,
  setChattingObjArray,
}) => {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const [currTime, setCurrTime] = useState("");
  const [personMsg, setPersonMsg] = useState([]);
  const [autoBotMsg, setAutoBotMsg] = useState([]);
  const [personMsgTime, setPersonMsgTime] = useState([]);
  const [inputBoxMsg, setInputBoxMsg] = useState("");
  const [botStatus, setBotStatus] = useState(chatSelect.status);
  const [chatDivHeight, setChatDivHeight] = useState(window.innerHeight);
  const [emojiStatus, setEmojiStatus] = useState(false);
  const [longPressDetected, setLongPressDetected] = useState(false);
  const [selectMsg, setSelectMsg] = useState(false);
  const [selectMsgStatus, setSelectMsgStatus] = useState(false);
  const [chatingObject, setChatingObject] = useState([
    {
      Shubham: {
        msg: [],
        time: [],
      },
      bot: {
        msg: [],
        time: [],
      },
    },
  ]);

  const [botChattingObject, setBotChattingObject] = useState({
    emoji: "👍",
    hii: "hii buddy",
    hi: "hello",
    hello: "hello",
    hie: "hello",
    how: "fine",
    what: "nothing special",
    who: "I am Shubham",
    where: "Pune",
    come: "No",
    ok: "yupp..",
    friend: "what you are asking, I dont understand",
    good: "Thank you",
    bye: "bye bye",
    img: "Nice one 👍",
    name: "Shubham",
    other: "hmmm...",
  });
  const timeoutRef = useRef();
  const divRef = useRef(null);
  const fileInputRef = useRef();

  const handlePersonMsg = () => {
    let accumulatedMsg = [];
    let accumulatedTime = [];

    chatingObject.forEach((item) => {
      accumulatedMsg = accumulatedMsg.concat(item["Shubham"].msg);
      accumulatedTime = accumulatedTime.concat(item["Shubham"].time);
    });

    setPersonMsg(accumulatedMsg);
    setPersonMsgTime(accumulatedTime);
  };
  useEffect(() => {
    handlePersonMsg();
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setChatDivHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  };
  const handleInputBox = (e) => {
    setInputBoxMsg(e.target.value);
    setCurrTime(time);
  };
  const handleSubmitInputMsg = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setChatingObject((prevChats) => [
      {
        Shubham: {
          msg: [...prevChats[prevChats.length - 1]?.Shubham.msg, inputBoxMsg],
          time: [...prevChats[prevChats.length - 1]?.Shubham.time, currentTime],
        },
        bot: {
          msg: [...prevChats[prevChats.length - 1]?.bot.msg, autoBotMsg],
          time: [...prevChats[prevChats.length - 1]?.bot.time, currentTime],
        },
      },
    ]);
    setPersonMsg((prevMsg) => [...prevMsg, inputBoxMsg]);
    console.log(inputBoxMsg);
    setPersonMsgTime((prevTime) => [...prevTime, currentTime]);
    setInputBoxMsg("");
    setEmojiStatus(false);
    const existingObjectIndex = chattingObjArray.findIndex(
      (item) => item.name === chatSelect.name
    );
    console.log(existingObjectIndex);
    if (existingObjectIndex !== -1) {
      setChattingObjArray((prev) => {
        const newArray = [...prev];
        // Check if msg is already an array
        newArray[existingObjectIndex].msg = Array.isArray(
          newArray[existingObjectIndex].msg
        )
          ? [...newArray[existingObjectIndex].msg, personMsg]
          : [personMsg];
        return newArray;
      });
    } else {
      setChattingObjArray((prev) => [
        ...prev,
        { name: chatSelect.name, msg: [personMsg] },
      ]);
    }
  };

  const handleBotReplyMsg = (chatingObject) => {
    const latestUserMsg =
      chatingObject[chatingObject.length - 1]?.Shubham.msg[
        chatingObject[chatingObject.length - 1]?.Shubham.msg.length - 1
      ];
    if (latestUserMsg) {
      const userWords = latestUserMsg.toLowerCase().split(" ");
      //   const matchedKey = Object.keys(botChattingObject).find((key) =>
      //     userWords.some((word) => key.toLowerCase().includes(word.toLowerCase()))
      //   );
      let matchedKey;
      userWords[0].length > 20
        ? (matchedKey = "img")
        : (matchedKey = Object.keys(botChattingObject).find((key) =>
            userWords.some((word) =>
              key.toLowerCase().includes(word.toLowerCase())
            )
          ));
      // If a match is found, use the corresponding bot response; otherwise, use the "other" response
      const response = matchedKey
        ? botChattingObject[matchedKey.toLowerCase()]
        : botChattingObject["other"];

      let currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setAutoBotMsg(response);
      console.log(response);
      setChatingObject((prevChats) => [
        {
          Shubham: {
            msg: [...prevChats[prevChats.length - 1]?.Shubham.msg, inputBoxMsg],
            time: [
              ...prevChats[prevChats.length - 1]?.Shubham.time,
              currentTime,
            ],
          },
          bot: {
            msg: [...prevChats[prevChats.length - 1]?.bot.msg, response],
            time: [...prevChats[prevChats.length - 1]?.bot.time, currentTime],
          },
        },
      ]);
      timeoutRef.current = setTimeout(
        () => {
          setBotStatus("Typing..");
          timeoutRef.current = setTimeout(() => {
            handleShowBotMsg(response, currentTime);
            setBotStatus("Online");
            // console.log(chatingObject);
          }, 3000);
        },
        botStatus == "offline" ? 6000 : 1
      );
    }
  };
  useEffect(() => {
    handleBotReplyMsg(chatingObject);
  }, [chatingObject]);
  const handleShowBotMsg = (botMsg, currentTime) => {
    setPersonMsg((prevMsg) => [...prevMsg, botMsg]);
    setPersonMsgTime((prevTime) => [...prevTime, currentTime]);
  };

  const handleCamOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageUrl = event.target.result;

        // Now you can use `imageUrl` in your component state or wherever needed
        // console.log("Selected file:", file);
        // console.log("Image URL:", imageUrl);
        const currentTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        setPersonMsg((prevMsg) => [...prevMsg, imageUrl]);
        setPersonMsgTime((prevTime) => [...prevTime, currentTime]);
        setChatingObject((prevChats) => [
          {
            Shubham: {
              msg: [...prevChats[prevChats.length - 1]?.Shubham.msg, imageUrl],
              time: [
                ...prevChats[prevChats.length - 1]?.Shubham.time,
                currentTime,
              ],
            },
            bot: {
              msg: [...prevChats[prevChats.length - 1]?.bot.msg, autoBotMsg],
              time: [...prevChats[prevChats.length - 1]?.bot.time, currentTime],
            },
          },
        ]);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };
  const handleEmojiSelect = (e) => {
    setInputBoxMsg((prevMsg) => prevMsg + " " + e.target.innerHTML);
    console.log(e.target.innerHTML);
  };
  let pressTimer;

  const handleTouchStart = (e) => {
    pressTimer = setTimeout(() => {
      const parentDiv = findParentDiv(e.target);
      if (parentDiv) {
        console.log(parentDiv);
        setLongPressDetected(true);
        setSelectMsgStatus(true);
        document
          .getElementById(parentDiv.id)
          .parentElement.classList.add("selected");
        setSelectMsg(
          document.getElementById(parentDiv.id).childNodes[0].innerHTML
        );
        // setParentId(parentDiv.id);
      }
    }, 1000);
  };

  const handleTouchMove = () => {
    clearTimeout(pressTimer);
    setLongPressDetected(false);
    // setParentId(null);
  };

  const handleTouchEnd = () => {
    clearTimeout(pressTimer);
    setLongPressDetected(false);
    // setParentId(null);
  };
  const findParentDiv = (element) => {
    // Traverse up the DOM tree to find the closest parent div
    while (element) {
      if (element.tagName === "DIV") {
        return element;
      }
      element = element.parentElement;
    }
    return null;
  };
  const handleOptionBack = () => {
    setSelectMsgStatus(false);
    document.querySelector(".selected")?.classList.remove("selected");
  };
  const handleDeleteSelected = () => {
    setPersonMsg((prevMsg) =>
      prevMsg.filter((item) => !item.includes(selectMsg))
    );
    console.log(personMsg);
  };
  useEffect(() => {
    scrollToTop();
  }, [personMsg]);
  return (
    <>
      <div className="single-chat">
        <div className="chat-name">
          <div className="chat-heading">
            <button
              className="back-btn heading-btn"
              onClick={() => setChatActive(false)}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/back.png"}
                alt="back-btn"
              />
            </button>
            <img
              className="profile-img"
              src={
                process.env.PUBLIC_URL + `/images/profile/${chatSelect.profile}`
              }
              alt="profile-img"
            />
            <div className="chat-person-name">
              <span className="person-name">{chatSelect.name}</span>
              <span className="online-status">{botStatus}</span>
            </div>
            <div className="options-div">
              <button className="video-call-btn heading-btn">
                <img
                  className="video-call"
                  src={process.env.PUBLIC_URL + "/images/video-call.png"}
                  alt="profile-img"
                />
              </button>
              <button className="audio-call-btn heading-btn">
                <img
                  className="audio-call"
                  src={process.env.PUBLIC_URL + "/images/audio-call.png"}
                  alt="profile-img"
                />
              </button>
              <button className="option-btn heading-btn">
                <img
                  className="option"
                  src={process.env.PUBLIC_URL + "/images/option.png"}
                  alt="profile-img"
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className="chat-text-div"
          style={{
            height: `${chatDivHeight - 130}px`,
          }}
        >
          <div className="inside-chat-text" ref={divRef}>
            {personMsg.map((value, msgIndex) => (
              <div
                className="msgParentDiv"
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="person-msg-div"
                  id={`person-msg${msgIndex}`}
                  key={msgIndex}
                >
                  {value.length > 20 ? (
                    <>
                      <img className="image-msg" src={value} />
                      <span className="msg-time">
                        {personMsgTime[msgIndex]}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="single-msg">{value}</span>
                      <span className="msg-time">
                        {personMsgTime[msgIndex]}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-input-div">
          <div className="input-box">
            <img
              className="emoji-icon"
              src={process.env.PUBLIC_URL + "/images/emoji.png"}
              alt="emoji-icon"
              onClick={() => setEmojiStatus(true)}
            />
            <input
              className="input-chat-box"
              type="text"
              placeholder="Type a message"
              value={inputBoxMsg}
              onChange={(e) => handleInputBox(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleInputBox(e);
                }
              }}
            />
            <div className="input-icons">
              <img
                className="doc-pin-icon"
                src={process.env.PUBLIC_URL + "/images/doc-pin.png"}
                alt="doc-pin-icon"
              />
              <label>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <img
                  className="cam-open-icon"
                  src={process.env.PUBLIC_URL + "/images/cam-open.png"}
                  alt="cam-open-icon"
                  onClick={handleCamOpen}
                />
              </label>
            </div>
          </div>
          <button className="send-btn" onClick={handleSubmitInputMsg}>
            <img
              className="send-img"
              src={process.env.PUBLIC_URL + "/images/send.png"}
              alt="send-btn"
            />
          </button>
        </div>
        {emojiStatus && (
          <Emoji
            handleEmojiSelect={handleEmojiSelect}
            setEmojiStatus={setEmojiStatus}
          />
        )}
        {selectMsgStatus && (
          <SelectionHeader
            handleOptionBack={handleOptionBack}
            handleDeleteSelected={handleDeleteSelected}
          />
        )}
      </div>
    </>
  );
};
export default Chat;
