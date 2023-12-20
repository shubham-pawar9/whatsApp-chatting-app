import logo from "./logo.svg";
import "./App.css";
import Chat from "./component/Chat";
import ChatList from "./component/ChatList";
import { useState } from "react";

const App = () => {
  const [chatSelect, setChatSelect] = useState();
  const [chatActive, setChatActive] = useState(false);
  const [chattingObjArray, setChattingObjArray] = useState([]);
  const handleChatSelect = (item) => {
    const existingObjectIndex = chattingObjArray.findIndex(
      (chat) => chat.name === item.name
    );
    if (existingObjectIndex !== -1) {
      setChattingObjArray((prev) => {
        const newArray = [...prev];
        newArray[existingObjectIndex] = {
          name: item.name,
          msg: newArray[existingObjectIndex].msg,
        };
        return newArray;
      });
    } else {
      setChattingObjArray((prev) => [...prev, { name: item.name, msg: [] }]);
    }
    setChatSelect(item);
    setChatActive(true);
  };

  return (
    <>
      {!chatActive && <ChatList handleChatSelect={handleChatSelect} />}
      {chatActive && (
        <Chat
          chatSelect={chatSelect}
          setChatActive={setChatActive}
          chattingObjArray={chattingObjArray}
          setChattingObjArray={setChattingObjArray}
        />
      )}
    </>
  );
};
export default App;
