import React from 'react';
import './Favorites.css';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

export const Favorites = ({movies, favorites}) => {
  const displayFavorites = favorites.map(favorite => {
    return <Card key={favorite.movie_id} 
      movie={movies.find(movie => {
        return movie.movie_id === parseInt(favorite.movie_id, 10)
      })}
    />;
  });
  return (
    <div>
      <div className="favorites">
        {displayFavorites.length > 0 ? 
          displayFavorites : 
          <h4>There are no favorites to display.</h4>}
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  movies: state.movies,
  favorites: state.favorites
});

Favorites.propTypes = {
  movies: PropTypes.array,
  favorites: PropTypes.array

};

export default connect(mapStateToProps)(Favorites);
