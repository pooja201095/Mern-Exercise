import React from "react";

import FormInput from "./Form/FormInput";
import FormDate from "./Form/FormDate";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    let { username,description,duration,date } = props;
    this.onSubmit = this.props.onSubmit;
    this.handleFormChange = this.props.handleFormChange;

    // this.state = {
    //   username,
    //   description,
    //   duration,
    //   date
    // };
  }

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        {this.props.children}
        <FormInput label='Description' value={this.props.description} name='description' onChange={this.handleFormChange}/>
        <FormInput label='Duration' value={this.props.duration} name='duration' onChange={this.handleFormChange}/>
        <FormDate label='Date' value={this.props.date} name='date' onChange={this.handleFormChange}></FormDate>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
