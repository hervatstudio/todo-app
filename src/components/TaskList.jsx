import React, { Component } from 'react';

// class TaskList extends Component {
//     render() { 
//         return ( 
//             <div>
//                 <div className="container">
//                     {this.props.tasks.map(task => {
//                         return (
//                             <div key={task.id} className="d-flex justify-content-between m-2">
//                                 <h6>{task.title}</h6>
//                                 <button onClick={ () => {this.props.handleDelete(task.id)}} className="btn btn-danger btn-sm">Delete</button>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//          );
//     }
// }

class TaskList extends Component {
    render() { 
        
        let tasks = this.props.tasks;
        const taskList = tasks.length ? (
            tasks.map(task => {
                return (
                    <div key={task.id} className="d-flex justify-content-between list-group-item align-items-center">
                        <div>
                            <h6 className="m-0">{task.title}</h6>
                        </div>
                        <div>
                            <button onClick={() => {this.props.handleEdit(task.id, task.title)}} className="btn btn-light btn-sm m-1"><i className="fa fa-edit"></i> Edit</button>
                            <button onClick={ () => {this.props.handleDelete(task.id)}} className="btn btn-light btn-sm"><i className="fa fa-check"></i> Done</button>
                        </div>
                    </div>
                );
            })
        ) : (
            <p>Your task is empty</p>
        )
        return ( 
            <div className="container mb-5">
                <div className="list-group">
                    {taskList}
                </div>
            </div>
         );
    }
}
 
export default TaskList;
