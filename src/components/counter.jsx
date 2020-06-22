import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  styles = {
    fontSize: 15,
    fontStyle: "bold",
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();
    console.log(this.props);

    return (
      <div>
        <h4>{this.props.id}</h4>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-dark" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
