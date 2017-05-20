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
  }
  
  getValue(e) {
    e.preventDefault();
    const user_login = `${this.state.user.name.value}:${this.state.user.pass.value}`    
    Request
    .get("/api/user/"+user_login)
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      console.log('response = ')
      console.log(res.body)

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
        <form onSubmit={(e)=>this.getValue(e)}>
          <input ref={(input) => this.state.user.name = input} id="user_login" className="boxMargins" placeholder='username' type="text"/><br />
          <input ref={(input) => this.state.user.pass = input} id='user_pswd' className="boxMargins" placeholder="Password" type="password"/><br />
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