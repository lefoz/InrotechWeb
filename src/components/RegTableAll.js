import TableView from 'react-table-view'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import Request from 'superagent';
import '../styles/RegTable-style.css'

//var url= window.robotUrl;
class RegTableAll extends Component {
  constructor() {
    super()
    this.state = {RData:[{"registry":"loading","name":"loading",}]}
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    this.getValue();
  }

  getValue() {
    Request.get(window.sessionStorage.getItem('webUrl')+"1")
    .withCredentials()
    .end((err, res) => {
      this.setState({RData: res.body })

      
    })
  }

  render () {
    return (
        <section>
            <TableView data={this.state.RData}/>
        </section>
    )
  }
}

export default RegTableAll