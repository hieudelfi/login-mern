import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Landing from './Landing';
class Landing extends  Component {
    loutOut(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push(`/`);
    }

    render(){
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>               
            </ul>
        );
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>               
                <li className="nav-item">
                   <a href="" onClick={()=>this.loutOut()} className="nav-link">
                       Logout
                   </a>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button 
                    className="navbar-toggler" 
                    data-toggle="collapse" 
                    type="button" 
                    data-target="#navbar1" 
                    aria-controls="navbar1" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}
export default withRouter(Landing);