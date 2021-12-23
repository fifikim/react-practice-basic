import React from "react";
import ReactDOM from "react-dom";
import Inventory from "./Inventory";

// You can adjust the items web preview uses here
// This file is not included in the tests; the suite
// will mount the Inventory component directly.
const mockItems = [
  {id: 1, name: "foo", quantity: 1},
  {id: 2, name: "bar", quantity: 0},
  {id: 3, name: "baz", quantity: 3},
];

const App = () => (
  <div id="app">
    <Inventory items={mockItems} />
  </div>
);

export default App;
