import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import Login_comp from './Login_comp'
import RobotSelector_comp from './RobotSelector_comp'

import '../styles/Login-style.css'
import logo from '../images/Inrotechlogo_White_Cyan.png'


class Login extends Component {
  render() {
    return (
      <div className="background">
        <div className="wrapper">
          <div className="menuStyle">
            <div className="logo-front"><img src={logo} alt="" />
          </div>
        </div>
          <div className="divContent">
            <Route exact path='/' component={Login_comp} /> 
            <Route path='/robotselector' component={RobotSelector_comp} />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;