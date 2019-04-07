import React, { Component } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';

class App extends Component {
  state = {
    tasks: [
      {title: "Task 1", id: 1},
      {title: "Task 2", id: 2},
      {title: "Task 3", id: 3}
    ]
  }

  addTask = (task) => {
    
    task.id = Math.random();
    
    let tasks = [...this.state.tasks, task];

    this.setState({
      tasks: tasks
    });

    // console.log(tasks);
  }

  handleEdit = (id, title) =>{
    console.log(title);
  }

  handleDelete = (id) => {
      console.log(id);

      let tasks = this.state.tasks.filter(task => {
        return task.id !== id;
      })

      this.setState({
        tasks: tasks
      })

  }

  render() {
    return (
      <div className="mt-4">
        <div className="text-center">
          <h2 className="m-5">Todo's</h2>
        </div>
        <TaskList tasks={this.state.tasks} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        <AddTask addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
