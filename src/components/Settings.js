import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RegTableAll from './RegTableAll'
import Checkbox from './CheckboxImp'
import '../styles/Settings-style.css';

class Settings extends Component {
  render() {
    return (
      <div className="wrapper">
       <div className="divContent">
         <h1>SETTINGS</h1>
         <h3>PLEASE SELECT REGESTRIES TO BE SHOWN ON MAIN PAGE</h3>
          <div id="reg"><RegTableAll/></div>
          <div id="check"><Checkbox/></div>  
          <Link to="main">
          <input type="submit" value="SAVE SETTINGS"/> 
           </Link>
          </div>
        </div>
      
    );
  }
}
export default Settings;