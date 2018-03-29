import React, { Component } from 'react';
import './Signup.css';
import { userSignup } from '../../apiCalls/apiCalls';

export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    userSignup(this.state);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={this.state.name} 
          placeholder="Enter your name." 
          onChange={this.handleChange} />
        <input 
          type="text" 
          name="email" 
          value={this.state.email} 
          placeholder="Enter your email address." 
          onChange={this.handleChange} />
        <input 
          type="password" 
          name="password" 
          value={this.state.password} 
          placeholder="Enter your password" 
          onChange={this.handleChange} />
        <button 
          type="submit" 
          name="submit">
            Submit
        </button>
      </form>
    </div>;
  }
}

