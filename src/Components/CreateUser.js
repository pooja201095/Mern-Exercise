import React from "react";

import Navbar from "./Navbar";
import {Link} from 'react-router-dom';

import { addUsers } from "../Api/fetchUsers";
import FormInput from "./Form/FormInput";
import Button from "./Form/Button";

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    addUsers(user).then((res)=>{
      console.log(res.data);
      this.setState({
        username: "",
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar>
        <li className='nav-item'>
          <Link to='/create' className='nav-link' href='#'>
            Create Exercise
          </Link>
        </li>
        <li className='nav-item active'>
          <Link to='/' className='nav-link' href='#'>
            Exercises
          </Link>
        </li>
        <li className='nav-item active'>
          <Link to='/custom' className='nav-link' href='#'>
            Any Custom Link
          </Link>
        </li>
      </Navbar>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <FormInput label='Username' value={this.state.username} name='username' onChange={this.onChangeUsername}></FormInput>
          <Button label="Submit"></Button>
        </form>
      </div>
    );
  }
}
