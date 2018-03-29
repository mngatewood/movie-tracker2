import './Card.css';
import React from 'react';

const Card = ({movie}) => {
  const { title, overview, poster, rating } = movie
  return (
    <div>
      <h3>{title}</h3>
       <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt="movie poster" />
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Card;