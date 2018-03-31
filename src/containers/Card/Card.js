import './Card.css';
import React from 'react';
import { connect } from "react-redux";
import { setError } from '../../actions';
import { addToFavorites } from '../../apiCalls/apiCalls';

const Card = ({movie, user, setError}) => {
  const { title, overview, poster_path, vote_average } = movie;

  const handleClick = () => {
    if (!user.id) {
      const error = 'Create an account or Login';
      setError(error);
    }

    if (user.id) {
      addToFavorites(movie, user.id);
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} 
        alt="movie poster" />
      <p>Rating: {vote_average}</p>
      <button onClick={handleClick}>Favorite</button>
      <p>{}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);