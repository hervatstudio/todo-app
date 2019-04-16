import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = { 
        posts: [ ]
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            // console.log(response);

            this.setState({
                posts: response.data.slice(0,10)
            })
        });
        
    }
    render() { 
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="container">
                        <div className="card mb-2" key={post.id}>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className="container">
                <p>No post found</p>
            </div>
        )

        return ( 
            <div>
                {postList}
            </div>
         );
    }
}
 
export default Posts;