import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom'
import '../styles/RobotSelector-style.css';
import Dropdown from './SelectDropdown.js'
import logo from '../images/Inrotechlogo_White_Cyan.png';
import '../styles/Dropdown-style.css';
import Request from 'superagent';

class RobotSelector extends Component {
  constructor() {
    super()
    this.state = {
      robot: {
        ip: '',
        ipcam: ''
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
    let robot = `${this.state.robot.ip}`
    this.getValue(robot)
  }

  getValue(robot) {
    Request
      .get("/api/robot/setrobot/" + robot)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        console.log("robot connection " + res.body)
        if (res.body) {
        window.sessionStorage.setItem('webUrl', "/api/robot")
        window.sessionStorage.setItem('videoIP', this.state.robot.ipcam);
        location.pathname='/main'
          
        } else {
          
        }
      })

  }

  render() {
    return (
      <div className="background">
        <div className="wrapper">
          <div className="logo-front"><img src={logo} alt="" /></div>
          <div>
            <div className="divContent">
              <Dropdown />
              <form onSubmit={this.handleSubmit}>
                <input type="submit" value="CONNECT" />
               </form>
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