import React from "react";
import ReactDOM from "react-dom";
import Notification from "./components/Notification";

// Adjust the props to Notification for Web Preview here
const App = () => (
  <>
    <Notification 
      message="test message" 
      type="caution" 
    />
  </>
);

export default App;
