import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> No Tags! </p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}{" "}
      </ul>
    );
  }
  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        {this.state.tags.length === 0 && "another tag!"}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
