import React from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/' className="navbar-brand" href="#">
         Exercise Tracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {this.props.children}
          </ul>
        </div>
      </nav>
    );
  }
}
