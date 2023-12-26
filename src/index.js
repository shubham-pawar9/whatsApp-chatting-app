import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const RootComponent = () => {
  const [personMsg, setPersonMsg] = useState([]);
  const [personMsgTime, setPersonMsgTime] = useState([]);
  return (
    <React.StrictMode>
      <App
        personMsg={personMsg}
        personMsgTime={personMsgTime}
        setPersonMsg={setPersonMsg}
        setPersonMsgTime={setPersonMsgTime}
      />
    </React.StrictMode>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
