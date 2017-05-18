import React, { Component } from 'react'
import { BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom'

import Settings from './Settings'
import Main from './Main'
import RobotSelector from './RobotSelector'
import NotFound from './NotFound'
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
    },
    route:
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
      if (res.body) {
        this.setState({route:
        <Router>
          <Switch>
            <Route exact path="/" component={RobotSelector} />
            <Route path="/main" component={Main} />
            <Route path="/settings" component={Settings} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      })
      }
    })
    
  }

  render() {
    return (
      <div>
        {this.state.route}
      </div>
    );
  }
}
export default Login;