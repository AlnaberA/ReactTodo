import React, { Component } from 'react';
import Todos from './components/todo/Todos';

console.log("test");
class App extends Component {
  state={
    todos:[
      {
        id:1,
        title:'Task 1.',
        completed:false,
      },
      {
        id:2,
        title:'Task 2.',
        completed:false,
      },
      {
        id:3,
        title:'Task 3.',
        completed:false,
      }
    ]
  }

  toggleComplete = (id) =>{
     this.setState(
       {
         todos: this.state.todos.map(todo =>{
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo;
         })
       });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
