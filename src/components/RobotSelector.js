import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/RobotSelector-style.css';
import Dropdown from './SelectDropdown.js'
import logo from '../images/Inrotechlogo_White_Cyan.png';
import '../styles/Dropdown-style.css';

class RobotSelector extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="background">
        <div className="wrapper">
         
            <div className="logo-front"><img src={logo} alt="" /></div>
         
          <div>
            <div className="divContent">
              <Dropdown/>
              <Link to="/Main">
                <input type="submit" value="CONNECT"/>
              </Link>
              <h3>OR CONNECT MANUALLY</h3>
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