import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontStyle: "bold",
  };

  constructor() {
    super();
    console.log("Counter - constructor");
  }

  componentDidMount() {
    console.log("Counter - Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("Ajax call and get new data from server");
    }
  }

  render() {
    console.log("Counter - Rendered");
    let classes = this.getBadgeClasses();
    // console.log(this.props);

    return (
      <div>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-dark"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
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
