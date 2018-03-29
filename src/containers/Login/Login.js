import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { userLogin } from '../../apiCalls/apiCalls';
import { validateUser } from '../../actions';
import './Login.css';
import { connect } from 'react-redux';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target; 
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const user = await userLogin(this.state);
      this.props.validateUser(user);
      this.props.history.push('/');
    } catch (error) {
      alert("Email and Password do not match");
      this.setState({
        email: '',
        password: ''
      });
    }
  }
  
  
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="email" 
            value={this.state.email}
            placeholder="Enter your email address." 
            onChange={this.handleChange} />
          <input 
            type="text"
            name="password"
            value={this.state.password}
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
  validateUser: user => dispatch(validateUser(user))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));