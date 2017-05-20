import React, { Component } from 'react';
import Dropdown from '../Dropdown.js'


class SelectDropdown extends Component {
  constructor (props) {
    super(props)
    sessionStorage.clear();
    this.state = {
      selected: { value: 'Selection', label: 'SELECT ROBOT', videoIP:"ip"}
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('You selected ', option.videoIP)
    console.log('You selected ', option.value)
    window.sessionStorage.setItem('webUrl', option.value);
    window.sessionStorage.setItem('videoIP', option.videoIP);
    this.setState({selected: option})
  }

  render () {
    const options = [
      {
       type: 'group', name: 'Project', items: [
         { value: "/api/robot/", label: 'Project Robot', videoIP: "http://192.168.1.64/Streaming/Channels/1/preview" },
        ]
      },
      {
       type: 'group', name: 'Simulation', items: [
         { value: "/api/values/", label: 'Simulated Robot', videoIP: "http://192.168.1.64/Streaming/Channels/1/preview" },
        ]
      }
    ]

    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label 

    return (
      <section>
      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
      </section>
    )
  }
}

export default SelectDropdown