import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("Event Handler called", counterId);
    const newCounters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: newCounters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
