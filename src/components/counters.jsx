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

  handleIncrement = (counter) => {
    // 3 dots i.e. '...' does cloning
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    console.log(index);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ counters: newCounters });

    // this.setState({ value: this.state.counters.value - 1 });
  };

  handleReset = () => {
    // would give us new array of counters
    const resettedCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: resettedCounters });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter} // incapsulate id and value
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
