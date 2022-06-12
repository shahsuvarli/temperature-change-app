import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: 10,
      color: "white",
    };
    this.increaseTemp = this.increaseTemp.bind(this);
    this.decreaseTemp = this.decreaseTemp.bind(this);
  }

  increaseTemp() {
    this.setState({ temp: this.state.temp + 1 });
  }
  decreaseTemp() {
    this.setState({ temp: this.state.temp - 1 });
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="submain">
            <div
              className="temp-circle"
              style={{
                backgroundColor:
                  this.state.temp <= 0
                    ? "#DBF1FD"
                    : this.state.temp < 15
                    ? "yellow"
                    : this.state.temp < 25
                    ? "orange"
                    : "red",
                color: this.state.temp >= 15 ? "white" : "black",
              }}
            >
              {this.state.temp} C°
            </div>
          </div>
          <div className="buttons">
            <button className="minus" onClick={this.decreaseTemp}>
              -
            </button>
            <button className="plus" onClick={this.increaseTemp}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
