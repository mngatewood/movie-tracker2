import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to='/'><h1>Movie Tracker</h1></NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Sign Up</NavLink>
    </div>
  );
};

export default Header;  