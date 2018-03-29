import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions';


const Header = (props) => {
  
  const handleClick = (event) => {
    console.log(props)
    event.preventDefault();
    props.logOut();
  };

  return (
    <div>
      <NavLink to='/'><h1>Movie Tracker</h1></NavLink>
      <NavLink to='/login'>Login</NavLink>
      <button onClick={handleClick}>Logout</button>
      <NavLink to='/signup'>Sign Up</NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));  