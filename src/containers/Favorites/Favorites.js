import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

export const Favorites = ({favorites, movies}) => {
  const displayFavorites = favorites.map(favorite => {
    return <Card key={favorite.movie_id} 
      movie={movies.find(movie => {
        return movie.movie_id === parseInt(favorite.movie_id, 10)
      })}
      isFavorite={true}/>;
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
  favorites: state.favorites,
  movies: state.movies
});

Favorites.propTypes = {
  favorites: PropTypes.array,
  movies: PropTypes.array

};

export default connect(mapStateToProps)(Favorites);

