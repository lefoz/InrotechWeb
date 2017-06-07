import React, { Component } from 'react';
import Dropdown from '../Dropdown.js'


class SelectDropdown extends Component {
  constructor (props) {
    super(props)
    window.sessionStorage.clear();
    this.state = {
      selected: { value: 'Selection', label: 'SELECT ROBOT'}
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    window.sessionStorage.setItem('webUrl', option.value);
    window.sessionStorage.setItem('videoIP', option.videoIP);
    window.sessionStorage.setItem('ip', option.ip);
    console.log(option.value)
    this.setState({selected: option})
  }

  render () {
    const options = [
      {
       type: 'group', name: 'Project', items: [
         { value: "/api/robot/", label: 'Project Robot', videoIP: "192.168.1.64", ip:"192.168.117.40" },
        ]
      },
      {
       type: 'group', name: 'Simulation', items: [
         { value: "/api/values/", label: 'Simulated Robot', videoIP: "http://46.22.26.25:81/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER", ip:"null"},
        ]
      }
    ]

    const defaultOption = this.state.selected
    //const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label 

    return (
      <section>
      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
      </section>
    )
  }
}

export default SelectDropdown