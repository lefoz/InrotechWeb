import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RegTableAll from './RegTableAll'
import Checkbox from './CheckboxImp'
import '../styles/Settings-style.css';

var url=  window.robotUrl;
class Settings extends Component {
  render() {
    return (
      <div className="wrapper">
       <div className="divContent">
         <h1>SETTINGS</h1>
         <h3>PLEASE SELECT REGESTRIES TO BE SHOWN ON MAIN PAGE</h3>
          <div id="reg"><RegTableAll/></div>
          <div id="check"><Checkbox/></div>
          <Link to="/Main">
                <input type="submit" value="Back To Main" />
              </Link>  
          </div>
        </div>
      
    );
  }
}
export default Settings;