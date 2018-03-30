import './Card.css';
import React from 'react';

const Card = ({movie}) => {
  const { title, overview, poster, rating } = movie

  const handleClick = () => {
    console.log('works');
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

export default Card;