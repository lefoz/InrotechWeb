import TableView from 'react-table-view'
import React, { Component} from 'react'
import Request from 'superagent';
import '../styles/RegTable-style.css'

class RegTable extends Component {
  constructor() {
    super()
    this.state = {RData:[{"id":"0","registry":"loading","value":"loading"}]}
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
   setInterval(() => this.getValue(), 5000);
  }

//https://github.com/visionmedia/superagent/issues/270
  getValue() {
    Request.get(window.sessionStorage.getItem('webUrl')+"/2")
    .withCredentials()
    .end((err, res) => {
      console.log(res.body)
      this.setState({RData: res.body })
      console.log('request ')
      
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

export default RegTable