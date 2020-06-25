import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counter(s) - constructor");
  }

  componentDidMount() {
    console.log("Counter(s) - Mounted");
  }

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    console.log("Counter(s) - Rendered");

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter} // incapsulate id and value
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
