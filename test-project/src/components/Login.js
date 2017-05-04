import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login-style.css';


class Login extends Component {
  render() {
    return (
      <div className="background">
      <div className="wrapper">
        <div className="menuStyle">
         <h1>INROTECH</h1>
         <h3>SERVICE AND SUPPORT SITE</h3>
        </div>
        <div>
          <div className="divContent">
            <input className="boxMargins" placeholder="Username"></input><br />
            <input type="password" className="boxMargins" placeholder="Password"></input><br />
            <Link to="/Main">
            <input type="submit" value="LOG IN"/> 
            </Link>
           </div>
           </div>
        </div>
      </div>
    );
  }
}
export default Login;