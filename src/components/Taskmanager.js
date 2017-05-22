import TableView from 'react-table-view'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import Request from 'superagent';

class Taskmanager extends Component {
  constructor() {
    super()
    this.state = {}
    this.state = {RData:[{"name":"loading","status":"loading","cpu":"Loading"}]}

    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    this.getValue();
  }

//https://github.com/visionmedia/superagent/issues/270
  getValue() {
    Request.get(window.sessionStorage.getItem('webUrl')+"taskmanager/")
    .withCredentials()
    .end((err, res) => {
      console.log(res.body)
      this.setState({RData: res.body })
      console.log('request ')
      
    })
  }

  render () {
    return (
        <div className="taskmanager">
            <TableView data={this.state.RData}/>
        </div>
    )
  }
}

export default Taskmanager;