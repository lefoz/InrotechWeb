import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom'
import '../styles/RobotSelector-style.css';
import Dropdown from './SelectDropdown.js'
import logo from '../images/Inrotechlogo_White_Cyan.png';
import '../styles/Dropdown-style.css';
import Request from 'superagent';

class RobotSelector extends Component {
  constructor(){
    super()
    this.state={robot:{
      ip:'',
      ipcam:''
    }
    }
    this.getValue = this.getValue.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(propertyName, event) {
    event.preventDefault();
    let robot = this.state.robot;
    robot[propertyName] = event.target.value;
    this.setState({ robot: robot });
  }

  handleSubmit(event) {
    event.preventDefault();
    let robot = `${this.state.robot.ip}:${this.state.robot.ipcam}`
    this.getValue(robot)
  }
  
  getValue(robot) {  
    Request
    .get("/api/robot/"+robot)
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      console.log(res.text)
      window.sessionStorage('weburi',"api/robot")
      location.pathname='/main'
    })
    
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
              <form onSubmit={this.handleSubmit}>
                <input value={this.state.robot.ip} onChange={this.handleChange.bind(this, 'ip')} className="roboIP" placeholder="ROBOT IP" /><br />
                <input value={this.state.robot.ipcam} onChange={this.handleChange.bind(this, 'ipcam')} className="camIP" placeholder="CAMERA IP" /><br />
                <input type="submit" value="CONNECT TO ROBOT" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RobotSelector;