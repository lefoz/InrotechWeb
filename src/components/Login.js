import React, { Component } from 'react'

import '../styles/Login-style.css'
import logo from '../images/Inrotechlogo_White_Cyan.png'

import '../styles/Login_comp-style.css';
import Request from 'superagent';


class Login extends Component {
   constructor() {
    super()
    this.state = {
      user:{
      name: "",
      pass: ""
    }
  }
    this.getValue = this.getValue.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(propertyName, event) {
    event.preventDefault();
    const user = this.state.user;
    user[propertyName] = event.target.value;
    this.setState({ user: user });
  }

  handleSubmit(event) {
    event.preventDefault();
    var userid = `${this.state.user.name}:${this.state.user.pass}`
    this.getValue(userid)
  }
  
  getValue(userid) {  
    Request
    .get("/api/user/"+userid)
    .set('Content-Type', 'application/json')
    .end((err, res) => {

      //if (res.body)
      if (true) {
        location.pathname = '/RobotSelector'
      }
    })
    
  }

  render() {
    return (
      <div className="background">
        <div className="wrapper">
          <div className="menuStyle">
            <div className="logo-front"><img src={logo} alt="" />
          </div>
        </div>
          <div className="divContent">
            <div className='login_comp'>
        <h2/>
        <h2/>
       <form onSubmit={this.handleSubmit}>
          <input value={this.state.user.name} onChange={this.handleChange.bind(this, 'name')} id="user_login" className="boxMargins" placeholder='username' type="text"/><br />
          <input value={this.state.user.pass} onChange={this.handleChange.bind(this, 'pass')} id='user_pswd' className="boxMargins" placeholder="Password" type="password"/><br />
          <input className="boxMargins" type="submit"/> 
        </form>
        </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;