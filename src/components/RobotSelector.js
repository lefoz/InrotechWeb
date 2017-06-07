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
    this.handleSimulation = this.handleSimulation.bind(this);
  }

  handleChange(propertyName, event) {
    event.preventDefault();
    let robot = this.state.robot;
    robot[propertyName] = event.target.value;
    this.setState({ robot: robot });
  }

  handleSimulation(event){
    event.preventDefault();
    if (window.sessionStorage.getItem('webUrl')==='/api/robot/') {
    this.setState({ robot: {ip:window.sessionStorage.getItem('ip'), ipcam:window.sessionStorage.getItem('videoIP')}});
    let robot = `${this.state.robot.ip}`
    this.getValue(robot)
      
  } else {
       location.pathname='/main';
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target)
    let robot = `${this.state.robot.ip}`
    this.getValue(robot)
  }

  getValue(robot) {
    Request
      .get("/api/robot/setrobot/" + robot)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (res.body||window.sessionStorage.getItem('webUrl')==='/api/robot/') {
        window.sessionStorage.setItem('webUrl', "/api/robot");
        window.sessionStorage.setItem('videoIP', "http://"+this.state.robot.ipcam+"/Streaming/Channels/1/preview");
        location.pathname='/main';
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
              <form onSubmit={this.handleSimulation}>
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