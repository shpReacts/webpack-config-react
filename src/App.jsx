import React, { Component } from "react";
import counter from "./assets/imgs/counter.jpg";
import "./App.css";
import CurrentTime from "./components/CurrentTime";

export default class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>helloooooooooooooooo</h2>
        <CurrentTime />
        <img src={counter} alt="counter" />
        <span>{this.state.count}</span>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
