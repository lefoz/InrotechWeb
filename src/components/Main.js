import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main-style.css';
import Request from 'superagent';
import logo from '../images/Inrotechlogo_White_Cyan.png';
class Main extends Component {

  constructor() {
    super()
    this.state = {value:[]}
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    this.getValue();
  }

  getValue() {
    //Request.get("/api/values")
    Request.get("/api/values/5")
    .withCredentials()
    .end((err, res) => {
      this.setState({ value: res.body.now })
      console.log('request ')
      console.log(res.body)
    })
  }
  
  render() {

    return (
      <div className="main">
        <div className="top-menu">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="robot-info"><p>ROBOT INFO</p></div>
        <Link to="/Settings">
            <input className="settings" type="submit" value="SETTINGS"/> 
        </Link>
         <Link to="/">
            <input className="logout" type="submit" value="NEW ROBOT"/> 
        </Link>
        </div>
        <div className="content-area">
        <div className="box-left">  
        <div className="video-area">Video</div>
        <div className="graph-area">graph</div>
        <div className="task-area">taskmanager {this.state.value}</div>
        </div>
        <div className="box-right">
        <div className="index-area">index</div>
        </div>
          
        </div>
        
      </div>
    );
  }
}

export default Main;