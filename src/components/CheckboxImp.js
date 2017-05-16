import React, { Component } from 'react';
import Checkbox from './Checkbox.js';
import Request from 'superagent';

var selItems=[];
var items=[];


class CheckboxImp extends Component {
    constructor(props) {
    console.log('iam in');
    super(props)
    this.state = {items}
    this.getValue = this.getValue.bind(this)

  }

  componentWillMount() {
    this.getValue();
    this.selectedCheckboxes = new Set();
  }

//https://github.com/visionmedia/superagent/issues/270
  getValue() {
    Request.get("/api/values/getarray/1")
    .withCredentials()
    .end((err, res) => {
      console.log(res.body)
      this.setState({items: res.body })
      console.log('request ')

    })
  }
  postValue(){
    Request.post("/api/values")
    .type('json')
    .send({selItems})    
    .end(function(err, res){})
    //upload
    console.log(selItems ,'Post complete')
  ;}

  //  componentWillMount = () => {

  // }

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
      console.log(checkbox, ' is selected.');
      selItems.push(checkbox);
    }

    this.postValue();
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items = (this.state.items),
    items.map(this.createCheckbox)
  )
 

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
            {this.createCheckboxes()}
            <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxImp;