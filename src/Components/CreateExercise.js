import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


import FormSelect from "./Form/FormSelect";
import Navbar from "./Navbar";
import Form from "./Form";


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
    axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => user.username),
          username: res.data[0].username,
        });
      }
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

    console.log(exercise);

    axios
      .post(`http://localhost:5000/exercises/add`, exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
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
        <Form onSubmit={this.onSubmit} username={this.state.username} description={this.state.description} duration={this.state.duration} date={this.state.date}  handleFormChange={this.handleFormChange} >
          <FormSelect label='User' value={this.state.username} name='username' onChange={this.handleFormChange} users={this.state.users}></FormSelect>
        </Form>
      </div>
    );
  }
}
