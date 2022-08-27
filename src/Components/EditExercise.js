import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

import withRouter from "./withRouter";
import FormSelect from "./Form/FormSelect";
import Form from "./Form";
import Navbar from "./Navbar";

class EditExercise extends React.Component {
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
      currentId: props.router.params.id,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.state.currentId)
      .then((res) => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date),
        });
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => user.username),
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

    axios
      .post(
        `http://localhost:5000/exercises/update/${this.state.currentId}`,
        exercise
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render(){
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
        <li className='nav-item'>
          <Link to='/user' className='nav-link' href='#'>
            Add User
          </Link>
        </li>
      </Navbar>
        <h3>Edit Exercise</h3>
        <Form onSubmit={this.onSubmit} username={this.state.username} description={this.state.description} duration={this.state.duration} date={this.state.date} handleFormChange={this.handleFormChange}>
          <FormSelect label='User' value={this.state.username} name='username' onChange={this.handleFormChange} users={this.state.users}></FormSelect>
        </Form>
      </div>
    );
  }
}

export default withRouter(EditExercise);
