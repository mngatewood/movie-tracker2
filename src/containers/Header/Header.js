import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut, resetFavorites } from '../../actions';
import './Header.css'

const Header = ({ logOut, error, user, resetFavorites}) => {
  
  const handleClick = () => {
    logOut();
    resetFavorites();
  };

  return <div className="header">
    <h1>Movie Tracker</h1>
    {user.name ? 
      <div className="nav">
        <h3>Welcome {user.name}</h3>
        <div className="nav-link-wrapper"><NavLink exact to="/">Movies</NavLink></div>
        <div className="nav-link-wrapper"><NavLink to="/login" onClick={handleClick}>Logout</NavLink></div>
        <div className="nav-link-wrapper"><NavLink to="/favorites">Favorites</NavLink></div>
      </div> 
      : 
      <div className="nav">
        <div className="nav-link-wrapper"><NavLink exact to="/">Movies</NavLink></div>
        <div className="nav-link-wrapper"><NavLink to="/login">Login</NavLink></div>
        <div className="nav-link-wrapper"><NavLink to="/signup">Sign Up</NavLink></div>
      </div>}
    <h2>{error}</h2>
  </div>;
};

const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  resetFavorites: () => dispatch(resetFavorites())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));