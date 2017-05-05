import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/RobotSelector-style.css';

class RobotSelector extends Component {
  render() {
    return (
         <div className="roboSel-body">
          <h2>PLEASE SELECT ROBOT</h2>
          
           <h2>OR</h2>
          <input className="roboIP" placeholder="ROBOT IP"></input><br />
          <input className="camIP" placeholder="CAMERA IP"></input><br />
          <Link to="/Main">
          <input type="submit" value="CONNECT TO ROBOT"/> 
          </Link>
     </div>
    );
  }
}

export default RobotSelector;