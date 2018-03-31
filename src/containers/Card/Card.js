import './Card.css';
import React from 'react';
import { connect } from "react-redux";
import { setError, addFavoriteToStore, removeFavoriteFromStore } from '../../actions';
import { addToFavoritesDb, removeFromFavoritesDb } from '../../apiCalls/apiCalls';

const Card = ({movie, user, setError, addFavoriteToStore, isFavorite, removeFavoriteFromStore}) => {
  const { title, overview, poster_path, vote_average, movie_id } = movie;
  const favorite = isFavorite ? 'favorite' : '';

  const handleClick = () => {
    if (!user.id) {
      const error = 'Create an account or Login';
      setError(error);
    }

    if (user.id && !isFavorite) {
      addToFavoritesDb(movie, user.id);
      addFavoriteToStore(movie);
    } 
    
    if (user.id && isFavorite) {
      removeFromFavoritesDb(movie_id, user.id);
      removeFavoriteFromStore(movie_id);
    }
  };

  return (
    <div className={`card ${favorite}`}>
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
  addFavoriteToStore: favorite => dispatch(addFavoriteToStore(favorite)),
  removeFavoriteFromStore: movie_id => dispatch(removeFavoriteFromStore(movie_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);