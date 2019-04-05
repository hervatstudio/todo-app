import React, { Component } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
// import 'bootstrap/dist/css/bootstrap';

class App extends Component {
  state = {
    tasks: [
      {title: "Task 1", id: 1},
      {title: "Task 2", id: 2},
      {title: "Task 3", id: 3}
    ]
  }
  render() {
    return (
      <div>
        <TaskList tasks={this.state.tasks}/>
        <AddTask/>
      </div>
    );
  }
}

export default App;
