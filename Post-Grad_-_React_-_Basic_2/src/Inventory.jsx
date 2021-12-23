import React from "react";
import Counter from "./Counter";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <Counter />
        <p>
          <b>TODO</b>: read instructions and complete 
                       this component, Inventory.jsx
        </p>
      </>
    );
  }
}

export default Inventory;
