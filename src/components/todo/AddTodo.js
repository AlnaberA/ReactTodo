import React, { Component } from "react";

export class AddTodo extends Component {
  // This is a component state.
  state = {
    title: ""
  };
  //e is the event param
  onChange = e => {
    this.setState({ title: e.target.value });
  };
  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="submit" className="btn" />
      </form>
    );
  }
}

export default AddTodo;
