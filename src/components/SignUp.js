import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Login-style.css';

class SignUp extends Component {
  render() {
    return (
      <div className="wrapper">
       <div>
         <div className="menuStyle">
         <h1>SIGN UP</h1>
         <h3>THE FINAL FRONTIER AWAITS</h3>
        </div>
          <div className="divContent">
            <input className="boxMargins" placeholder="Username"></input><br />
            <input className="boxMargins" placeholder="Password"></input><br />
            <input className="boxMargins" placeholder="Retype Password"></input><br />
            <input className="boxMargins" placeholder="Email"></input><br />
            <Link to="/">
            <input type="submit" value="SIGN UP"/> 
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;