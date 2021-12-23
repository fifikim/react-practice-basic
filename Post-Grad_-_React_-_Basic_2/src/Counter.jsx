import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  
  incrementCount() {
    this.setState(state => ({counter: state.counter + 1}));
  }
  
  decrementCount() {
    this.setState(state => ({counter: state.counter - 1}));
  }

  render() {
    return (
      <div>
        <h1 className="counter">{this.state.counter}</h1>
        <button
          type="button" 
          className="increment" 
          onClick={this.incrementCount}
        >Increment</button>
        <button
          type="button" 
          className="decrement" 
          onClick={this.decrementCount}
        >Decrement</button>
      </div>
    );
  }
}

export default Counter;
