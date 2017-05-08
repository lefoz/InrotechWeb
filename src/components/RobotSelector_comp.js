import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/RobotSelector-style.css';

class RobotSelector extends Component {
  render() {
    return (
        <div className="robotselector_comp">
          <h2>PLEASE SELECT ROBOT</h2>
          <h2>OR</h2>
          <div className='robo_comp'>
            <input className="roboIP" placeholder="ROBOT IP"></input><br />
            <input className="camIP" placeholder="CAMERA IP"></input><br />
            <Link to="main">
              <input type="submit" value="CONNECT TO ROBOT"/> 
            </Link>
          </div>         
        </div>
    );
  }
}

export default RobotSelector;