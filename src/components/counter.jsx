import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontStyle: "bold",
  };

  // constructor() {
  //   super();
  //   console.log("Counter - constructor");
  // }

  // componentDidMount() {
  //   console.log("Counter - Mounted");
  // }

  // componentWillUnmount() {
  //   console.log("Counter - Unmounted");
  //   // gives us opputunity to cleanup
  //   // like handewl timers, listeners, avoid memory leaks, etc
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log("prevProps", prevProps);
  //   // console.log("prevState", prevState);
  //   if (prevProps.counter.value !== this.props.counter.value) {
  //     console.log("Ajax call and get new data from server");
  //   }
  // }

  render() {
    // console.log("Counter - Rendered");
    let classes = this.getBadgeClasses();
    // console.log(this.props);

    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={classes}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            className="btn btn-dark btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-dark btn-sm m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
