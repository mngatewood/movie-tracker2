import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { userLogin } from '../../apiCalls/userLogin';
import { getFavorites } from '../../apiCalls/getFavorites';
import { 
  validateUser, 
  setError, 
  addFavorites, 
  resetFavorites
} from '../../actions';
import './Login.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filmReel from '../../assets/film-reel.svg';

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
      const userData = await userLogin(this.state);
      const favorites = await getFavorites(userData.data.user.id);
      this.props.resetFavorites();
      this.props.addFavorites(favorites);
      this.props.validateUser({ 
        username: userData.data.user.username, 
        id: userData.data.user.id 
      });
      this.props.history.push('/');
    } catch (error) {
      this.setState({
        email: "",
        password: "",
        errorMessage: "Email and password do not match."
      });
    }
  }
  
  render() {
    const enableSubmit = this.state.email && this.state.password; 
    return (
      <div className="login">
        <div className="icon-container">
          <div className="reel-strip" />
          <img className="film-reel-lg" src={filmReel} alt="film reel icon" />
          <div className="reel-strip" />
        </div>
        <h4>Please enter your email address and password to login.</h4>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="email" 
            value={this.state.email}
            placeholder="Email address" 
            onChange={this.handleChange} />
          <input 
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange} />
          <button
            type="submit" 
            name="submit"
            disabled={!enableSubmit}>
              Submit
          </button>
        </form>
        <h2 className="errorMessage">{this.state.errorMessage}</h2>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  validateUser: user => dispatch(validateUser(user)),
  setError: error => dispatch(setError(error)),
  addFavorites: favorites => dispatch(addFavorites(favorites)),
  resetFavorites: () => dispatch(resetFavorites())
});

Login.propTypes = {
  validateUser: PropTypes.func,
  setError: PropTypes.func,
  addFavorites: PropTypes.func,
  resetFavorites: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
