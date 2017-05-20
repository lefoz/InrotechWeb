import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main-style.css';
import Request from 'superagent';
import Video from './Video';
import Graph from './Graph';
<<<<<<< HEAD
import RegTable from './RegTable'
import Taskmanager from './Taskmanager'
=======
import RegTable from './RegTable.js'
import RobotInfo from './RobotInfo'
>>>>>>> ebb3a81ab0825a4ae07966b316832470352c6d51
import 
logo from '../images/Inrotechlogo_White_Cyan.png';



class Main extends Component {

    constructor(selectedRobot) {
        super()
        this.robot = selectedRobot
        this.state = { value: [] }
        this.getValue = this.getValue.bind(this)
    }

    componentDidMount() {
        // this.getValue();
    }

    //https://github.com/visionmedia/superagent/issues/270
    getValue() {
            Request.get(window.sessionStorage.getItem('webUrl')+"/5")
            .withCredentials()
            .end((err, res) => {
                let _val = res.text;
                this.setState({ value: _val })
                console.log('request ')
                console.log(res.body)
            })
    }

    render() {

        return (
            <div className="main">
                <div className="top-menu">
                    <div className="logo"> <img src={logo} alt="" /> </div>
                    <div className="robot-info"><RobotInfo/> </div >
                    <Link to="settings" >
                        <input className="settings" type="submit" value="SETTINGS" />
                    </Link> <Link to="/RobotSelector" >
                        <input className="logout" type="submit" value="NEW ROBOT" />
                    </Link>
                </div>
                <div className="content-area">
                    <div className="box-left" >
                        <div className="box-left-top" >
                            <div className="video-area" >
                                <Video />
                            </div> <div className="graph-area" >
                                <Graph />
                            </div> </div>
                        <div className="task-area" >
                            <Taskmanager />
                        </div>
                    </div>
                    <div className="box-right" >
                        <div className="index-area" > <RegTable /> </div> </div>

                </div>
            </div>
        );
    }
}

export default Main