import { useState } from "react";

const ChatList = ({ handleChatSelect }) => {
  const [chatListNames, SetChatListNames] = useState([
    { name: "Shubham", status: "online", profile: "1.png" },
    { name: "Rajat", status: "offline", profile: "2.png" },
    { name: "Omkar", status: "online", profile: "3.png" },
    { name: "Rohit", status: "online", profile: "4.png" },
    { name: "Siddharth", status: "offline", profile: "5.png" },
    { name: "Abs", status: "online", profile: "6.png" },
    { name: "Pratik", status: "offline", profile: "7.png" },
  ]);
  return (
    <>
      <div className="chatList">
        <div className="listHeading">
          <span className="whatsapp-txt">WhatsApp</span>
          <div className="head-icons">
            <img src={process.env.PUBLIC_URL + "/images/camera.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "/images/search.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "/images/option.png"} alt="" />
          </div>
        </div>
        <div className="list-heading-bar">
          <ul>
            <li>Chats</li>
            <li>Updates</li>
            <li>Calls</li>
          </ul>
        </div>
        <div className="chattingList-Div">
          {chatListNames &&
            chatListNames.map((item, index) => {
              return (
                <div
                  className="chatPerson-div"
                  onClick={() => {
                    handleChatSelect(item);
                  }}
                >
                  <div className="profileImage">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/profile/${index + 1}.png`
                      }
                      alt=""
                    />
                  </div>
                  <div className="personName">
                    <span className="name">{item.name}</span>
                  </div>
                  <div className="msg-time-status">
                    <span className="msg-status">{item.status}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default ChatList;
