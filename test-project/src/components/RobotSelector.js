import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/RobotSelector-style.css';
import logo from '../images/Inrotechlogo_White_Cyan.png';

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
                    dropdown here
              <h2>OR</h2>
              <input className="roboIP" placeholder="ROBOT IP"></input><br />
              <input className="camIP" placeholder="CAMERA IP"></input><br />
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