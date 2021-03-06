import React, { Component } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  state = {
    tasks: [
      {title: "Task 1", id: 1},
      {title: "Task 2", id: 2},
      {title: "Task 3", id: 3}
    ],
    post: [ ]
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
    const { post } = this.state

    return (
      <BrowserRouter>
        <div className="">
          <NavBar/>
          
          <Route exact path = '/' component={Home}/>
          <Route path = '/about' component={About}/>
          <Route path = '/contact' component={Contact}/>
          <Route path = '/posts' component={Posts}/>
          <Route path = '/:post_id' component={PostDetails}/>

          <div className="text-center mt-4">
            <h2 className="m-5">Todo's</h2>
          </div>

          <TaskList tasks={this.state.tasks} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          <AddTask addTask={this.addTask}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
