import React, { Component, useState } from "react";

export class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  //Можно функцию как вынести отдельно-increment, так и записать после onClick-decrement
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
};
