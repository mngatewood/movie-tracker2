import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="email" 
            placeholder="Enter your email address." 
            onChange={this.handleChange} />
          <input 
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={this.handleChange} />
          <button
            type="submit" 
            name="submit">Submit</button>
        </form>
      </div>
    );
  }
}


