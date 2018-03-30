import './Card.css';
import React from 'react';
import { connect } from "react-redux";

const Card = ({movie, user}) => {
  const { title, overview, poster, rating } = movie

  const handleClick = () => {
    console.log(user);
  };

  return (
    <div>
      <h3>{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w200/${poster}`} 
        alt="movie poster" />
      <p>Rating: {rating}</p>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Card);