import React, { Component } from 'react';

class TaskList extends Component {
    state = { 
        
     }
     render() {
        // console.log(this.props);
        return (
             <div>
                 <ul>
                 {this.props.tasks.map(task => {
                     return (
                        <li key={task.id}>{task.title}</li> 
                     );
                     
                 })}
                 </ul>
             </div>
         );
    }
}
 
export default TaskList;