import React, { PropTypes, Component } from 'react';
import {Link } from 'react-router-dom';
import '../styles/Login_comp-style.css';

class Login_comp extends Component {
  render() {
    return (
        <div className='login_comp'>
        <h2/>
        <h2/>
            <input className="boxMargins" placeholder="Username" /><br />
            <input className="boxMargins" placeholder="Password" type="password"/><br />
            <Link to="robotselector">
              <input type="submit" value="LOG IN"/> 
            </Link>
        </div>
    );
  }
}

export default Login_comp;