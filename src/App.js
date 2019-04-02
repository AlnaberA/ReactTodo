import React, { Component } from 'react';
import Todos from './components/todo/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';

console.log("test");
class App extends Component {
  //App level state because the state is being shared between components. App level states should be handled with redux. 
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

  //Delete todo
  delTodo=(id)=>{
    this.setState({
      //return id that is not passed in from the delTodo prop.
      todos:[...this.state.todos.filter(todo=>todo.id!==id)]
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <AddTodo/>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
