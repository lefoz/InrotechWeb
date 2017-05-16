import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Login_comp-style.css';
import Request from 'superagent';


class Login_comp extends Component {
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

  componentDidMount() {
    //this.getValue();
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
        location.href = '/RobotSelector'
      }
    })
    
  }

  render() {
    return (
        <div className='login_comp'>
        <h2/>
        <h2/>
        <form onSubmit={(e)=>this.getValue(e)}>
          <input ref={(input) => this.state.user.name = input} id="user_login" className="boxMargins" placeholder='username' type="text"/><br />
          <input ref={(input) => this.state.user.pass = input} id='user_pswd' className="boxMargins" placeholder="Password" type="password"/><br />
          <input className="boxMargins" type="submit"/> 
        </form>
        </div>
    );
  }
}

export default Login_comp;