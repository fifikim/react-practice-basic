import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import UniqueList from "./components/UniqueList";

/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview. 
*/
const App = () => (
  <div className="App">
    <UniqueList />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
