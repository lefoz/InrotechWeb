import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main-style.css';
import Video from './Video';
import Graph from './Graph';
import RegTable from './RegTable.js'
import logo from '../images/Inrotechlogo_White_Cyan.png';

var url= window.robotUrl;

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = { value: [] }
    }

    render() {
        return (
            <div className="main">
                <div className="top-menu">
                    <div className="logo"><img src={logo} alt=""/></div>
                    <p className="robot-info">ROBOT INFO</p>
                    <Link to="settings" >
                        <input className="settings" type="submit" value="SETTINGS" />
                    </Link> 
                    <Link to="/robotSelector" >
                        <input className="logout" type="submit" value="NEW ROBOT" />
                    </Link>
                </div>
                <div className="content-area">
                    <div className="box-left" >
                        <div className="box-left-top" >
                            <div className="video-area" >
                                <Video uri="192.168.1.64"/>
                            </div> 
                            <div className="graph-area" >
                                <Graph />
                            </div> 
                        </div>
                        <div className="task-area" ></div>
                    </div>
                    <div className="box-right" >
                        <div className="index-area" > <RegTable /> </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Main