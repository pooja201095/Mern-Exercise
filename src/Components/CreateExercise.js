import React from "react";
import {Link} from 'react-router-dom';


import FormSelect from "./Form/FormSelect";
import Navbar from "./Navbar";
import Form from "./Form";

import { fetchUsers } from "../Api/fetchUsers";
import { addExercise } from "../Api/fetchExercises";


export default class CreateExercise extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormChange = this.handleFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    fetchUsers().then((res)=>{
      this.setState({
        users: res.map((user) => user.username),
        username: res[0].username,
      });
    });
  }

  handleFormChange=(e)=> {
    if(e.target){
      const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
    } else {
      this.setState({
        'date': e,
      })
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log('sub',exercise);

    addExercise(exercise).then((res)=>{
      console.log('data',res);
      window.location = "/";
    }).catch((err)=>console.log(err));

   
  }

  render() {
    return (
      <div>
        <Navbar>
        <li className='nav-item active'>
          <Link to='/' className='nav-link' href='#'>
            Exercises
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/user' className='nav-link' href='#'>
            Add User
          </Link>
        </li>
      </Navbar>
        <h3>Create New Exercise Log</h3>
        <Form onSubmit={this.onSubmit} username={this.state.username} description={this.state.description} duration={this.state.duration} date={this.state.date} submitLabel="Submit" handleFormChange={this.handleFormChange} >
          <FormSelect label='User' value={this.state.username} name='username' onChange={this.handleFormChange} users={this.state.users}></FormSelect>
        </Form>
      </div>
    );
  }
}
