import React from "react";
import axios from "axios";

import Navbar from "./Navbar";
import {Link} from 'react-router-dom';

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

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
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
          <div className='form-group'>
            <label>Username: </label>
            <input
              type='text'
              className='form-control'
              placeholder='Username'
              value={this.state.username}
              onChange={this.onChangeUsername}
              required
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
