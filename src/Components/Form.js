import React from "react";

import FormInput from "./Form/FormInput";
import FormDate from "./Form/FormDate";
import Button from "./Form/Button";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.props.onSubmit;
    this.handleFormChange = this.props.handleFormChange;
  }

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        {this.props.children}
        <FormInput label='Description' value={this.props.description} name='description' onChange={this.handleFormChange}/>
        <FormInput label='Duration' value={this.props.duration} name='duration' onChange={this.handleFormChange}/>
        <FormDate label='Date' value={this.props.date} name='date' onChange={this.handleFormChange}></FormDate>
        <Button label={this.props.submitLabel}></Button>
      </form>
    );
  }
}
