import React, { Component } from 'react';

class PostDetails extends Component {
    state = { 
        id: ''
     }
    componentDidMount(){
        
        let id = this.props.match.params.post_id;
        this.setState({
            id: id
        })

        console.log(id)
    }
    render() { 
        return ( 
            <div className="container">
                <h4>{this.state.id}</h4>
            </div>
         );
    }
}
 
export default PostDetails;