import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  constructor() {
    super();
    console.log("App - Constructor");
    // while using constructor(props)
    // use super(props)
    // use this.state = this.props.something
    // this.setState() won't work in constructor
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

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
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></Navbar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
