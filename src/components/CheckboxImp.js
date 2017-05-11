import React, { Component } from 'react';
import Checkbox from './Checkbox.js';
import Request from 'superagent';



const items = 
[
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
];

class CheckboxImp extends Component {
//     constructor() {
//     super()
//     this.state = {info:[""]}
//     this.getValue = this.getValue.bind(this)
//   }

//   componentDidMount() {
//     this.getValue();
//   }

// //https://github.com/visionmedia/superagent/issues/270
//   getValue() {
//     Request.get("/api/values/getarray/1")
//     .withCredentials()
//     .end((err, res) => {
//       console.log(res.body)
//       this.setState({items: res.body })
//       console.log('request ')
      
//     })
//   }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxImp;