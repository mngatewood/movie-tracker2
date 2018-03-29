import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userLogin } from '../../apiCalls/apiCalls';
import { validateUser } from '../../actions';
import './Login.css';

export class Login extends Component {
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

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = await userLogin('tman2272@aol.com', 'password');
    this.props.validateUser(user);
    // const user = await userLogin(this.state);
    // console.log(user);
    // console.log(this.props)
    // if (user) {
    //   this.props.validateUser(user);
    // }
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

const mapDispatchToProps = dispatch => ({
  validateUser: (user) => dispatch(validateUser(user))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));