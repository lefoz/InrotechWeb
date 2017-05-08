import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Routes_login from './Routing/Routes_login'

import '../styles/Login-style.css';
import logo from '../images/Inrotechlogo_White_Cyan.png';


class Login extends Component {
  render() {
    console.log(this.props.route)
    return (
      <div className="background">
        <div className="wrapper">
          <div className="menuStyle">
            <div className="logo-front"><img src={logo} alt="" />
          </div>
        </div>
          <div className="divContent">
            <Routes_login /> 
          </div>
        </div>
      </div>
    );
  }
}
export default Login;