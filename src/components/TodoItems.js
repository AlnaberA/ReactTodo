import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItems extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

TodoItems.propTypes={
    todo: PropTypes.object.isRequired
}

export default TodoItems
