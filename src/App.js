import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'learn about react and redux'},
      {id: 2, content: 'watch game of thrones'}
    ]
  }

  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
      //todos <- since the names are the same you can use the short hand version
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          deleteToDo={this.deleteToDo}
        />
      </div>
    );
  }
}

export default App;
