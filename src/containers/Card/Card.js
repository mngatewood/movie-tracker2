import './Card.css';
import React from 'react';
import { connect } from "react-redux";
import { setError, addFavoriteToStore } from '../../actions';
import { addToFavoritesDb } from '../../apiCalls/apiCalls';

const Card = ({movie, user, setError, addFavoriteToStore}) => {
  const { title, overview, poster_path, vote_average } = movie;

  const handleClick = () => {
    if (!user.id) {
      const error = 'Create an account or Login';
      setError(error);
    }

    if (user.id) {
      addToFavoritesDb(movie, user.id);
      addFavoriteToStore(movie);
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
  setError: error => dispatch(setError(error)),
  addFavoriteToStore: favorite => dispatch(addFavoriteToStore(favorite))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);