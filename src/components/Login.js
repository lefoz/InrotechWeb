import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login-style.css';
import logo from '../images/Inrotechlogo_White_Cyan.png';


class Login extends Component {
  render() {
    return (
      <div className="background">
      <div className="wrapper">
        <div className="menuStyle">
        <div className="logo-front"><img src={logo} alt="" /></div>
        </div>
        <div>
          <div className="divContent">
            <input className="boxMargins" placeholder="Username"></input><br />
            <input type="password" className="boxMargins" placeholder="Password"></input><br />
            <Link to="robotselector">
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