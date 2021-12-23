import React from "react";

class UniqueList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  // TODO feel free to adjust this skeleton as you wish
  
  render() {
    return (
      <>
        <div>
          <input
            className="item-input"
            type="text"
            value={""}
            onChange={() => {}}
            onKeyDown={() => {}}
          />
          <input
            className="add-button"
            type="button"
            value="Add Item"
            onClick={() => {}}
          />
          <input
            className="remove-button"
            type="button"
            value="Remove Item"
            onClick={() => {}}
          />
          <input
            className="clear-button"
            type="button"
            value="Clear Items"
            onClick={() => {}}
          />
        </div>
        <ul className="items">
        </ul>
      </>
    );
  }
}

export default UniqueList;