import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'


class NavBar extends Component {
    state = {  }
    render() { 
        console.log(this.props);
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/posts">Posts</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default withRouter(NavBar);