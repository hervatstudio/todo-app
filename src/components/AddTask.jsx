import React, { Component } from 'react';

class AddTask extends Component {
    state = { 
        title: '',
        disabled: 'disabled'
     }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        });

        if(e.target.value !== ''){
            this.setState({
                disabled: ''
            })
        } else {
            this.setState({
                disabled: 'disabled'
            })
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            title: ''
        })
    }

  
    render() { 
        return ( 
            <div className="container">
                <form action="">
                    <div className="form-group text-center">
                        <input onChange={this.handleChange} id="title" className="form-control" placeholder="Task name" value={this.state.title}/>
                        <button onClick={this.handleSubmit} className="btn btn-outline-primary mt-2" disabled={this.state.disabled}><i className="fa fa-plus"></i> Add</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default AddTask;