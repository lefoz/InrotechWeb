import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/RobotSelector-style.css';
import Dropdown from './SelectDropdown.js'
import logo from '../images/Inrotechlogo_White_Cyan.png';
import '../styles/Dropdown-style.css';

class RobotSelector extends Component {
  render() {
    return (
      <div className="background">
        <div className="wrapper">
          <div className="menuStyle">
            <div className="logo-front"><img src={logo} alt="" /></div>
          </div>
          <div>
            <div className="divContent">
              <h2>PLEASE SELECT ROBOT</h2>
              <Dropdown/>
              <Link to="/Main">
                <input type="submit" value="CONNECT" />
              </Link>
              <h2>OR CONNECT MANUALLY</h2>
              <input className="roboIP" placeholder="ROBOT IP"></input><br />
              <input className="camIP" placeholder="CAMERA IP"></input><br />
              <input className="camUserId" placeholder="CAMERA USERNAME"></input><br />
              <input className="camPassword" placeholder="CAMERA PASSWORD"></input><br />
              <Link to="/Main">
                <input type="submit" value="CONNECT TO ROBOT" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RobotSelector;