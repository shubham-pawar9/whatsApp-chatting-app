import logo from "./logo.svg";
import "./App.css";
import Chat from "./component/Chat";
import ChatList from "./component/ChatList";
import { useState } from "react";

const App = ({ personMsg, setPersonMsg, personMsgTime, setPersonMsgTime }) => {
  const [chatSelect, setChatSelect] = useState();
  const [chatActive, setChatActive] = useState(false);
  const handleChatSelect = (item) => {
    setChatSelect(item);
    setChatActive(true);
    // console.log(personMsg);
  };

  return (
    <>
      {!chatActive && <ChatList handleChatSelect={handleChatSelect} />}
      {chatActive && (
        <Chat
          chatSelect={chatSelect}
          setChatActive={setChatActive}
          personMsg={personMsg}
          setPersonMsg={setPersonMsg}
          personMsgTime={personMsgTime}
          setPersonMsgTime={setPersonMsgTime}
        />
      )}
    </>
  );
};
export default App;
