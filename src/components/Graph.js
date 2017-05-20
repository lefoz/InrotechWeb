import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main-style.css';
import Request from 'superagent';
import Video from './Video';
import logo from '../images/Inrotechlogo_White_Cyan.png';
import RTChart from 'react-rt-chart'
import '../../node_modules/c3/c3.css'

class Graph extends Component {

  constructor() {
    super()
    this.state = { value: [] }
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    setInterval(() => this.getValue(), 1000)
  }

  getValue() {
    Request.get(window.sessionStorage.getItem('webUrl'))
      .withCredentials()
      .end((err, res) => {
        //var _val1 = res.body.x
        this.setState({
          value: res.body.x
        })
      })
  }

  render() {
    var flow = {
      duration: 50,

    };

    var chart = ({
      transition: {
        duration: 0
      }
    });


    var data = {
      xFormat: '%S',
      date: new Date(),
      Car: this.state.value
    }
    var axis = {
      x: {
        type: 'timeseries',
        tick: {
          format: '%S'
        }
      }
    };

    return <section><RTChart
      flow={flow}
      maxValues={20}
      fields={
        ['Car']
      }

      data={data}
    /></section>
  }
}
export default Graph;