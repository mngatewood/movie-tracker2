import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut, resetFavorites } from '../../actions';
import './Header.css';
import PropTypes from 'prop-types';

export class Header extends Component {


  handleClick = () => {
    this.props.logOut();
    this.props.resetFavorites();
  };

  render() {
    const { user, error } = this.props;
    return <div className="header">
      <h1>Movie Tracker</h1>
      { user.name ? 
        <div className="nav">
          <div className="welcome">
            <h5>Welcome { user.name }</h5>
          </div>
          <div className="nav-link-wrapper"><NavLink exact to="/">Movies</NavLink></div>
          <div className="nav-link-wrapper"><NavLink to="/login" onClick={this.handleClick}>Logout</NavLink></div>
          <div className="nav-link-wrapper"><NavLink to="/favorites">Favorites</NavLink></div>
        </div> 
        : 
        <div className="nav">
          <div className="welcome">
            <h5>You are logged out.</h5>
          </div>
          <div className="nav-link-wrapper"><NavLink exact to="/">Movies</NavLink></div>
          <div className="nav-link-wrapper"><NavLink to="/login">Login</NavLink></div>
          <div className="nav-link-wrapper"><NavLink to="/signup">Sign Up</NavLink></div>
        </div>}
      <h2>{error}</h2>
    </div>;
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  resetFavorites: () => dispatch(resetFavorites())
});

Header.propTypes = {
  logOut: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  user: PropTypes.object,
  resetFavorites: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

