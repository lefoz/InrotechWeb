import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main-style.css';
import Request from 'superagent';

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
    Request.get("/api/values")
    .withCredentials()
    .end((err, res) => {
      this.setState({ value: res.body.now })
    })
    // fetch('api/values').then(result => {
    //   let jsonObject = result.json();
    //   console.log(result)
    //   
    // })
  }
  render() {

    return (
      <div className="main">
        <div className="top-menu">
          Top Menu
        </div>
        <div className="content-area">
          {this.state.value}
        </div>
      </div>
    );
  }
}

export default Main;