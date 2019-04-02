import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todoStyles/todoItemStyle.css';
export class TodoItems extends Component {
 getStyle = () => {
    return{
        background: '#f4f4f4',
        borderBottom:'1px #ccc solid',
        textDecoration: this.props.todo.completed ? 'line-through':'none'
    }
 } 

 render() {
    const {id,title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} />
            {title}
            <button className="delBtnStyle" onClick={this.props.delTodo.bind(this,id)}>x</button>
        </p>
      </div>
    )
  }
}
TodoItems.propTypes={
    todo: PropTypes.object.isRequired
}
export default TodoItems
