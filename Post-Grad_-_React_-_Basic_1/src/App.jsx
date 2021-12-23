import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import DynamicInput from "./components/DynamicInput";

/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview. 
*/
const App = () => (
  <div className="App">
    <DynamicInput />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
