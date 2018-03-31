import React from 'react';
import './Favorites.css';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const Favorites = ({favorites}) => {
  const displayFavorites = favorites.map(favorite => {
    return <Card key={favorite.id} 
      movie={favorite}
      isFavorite={true}/>;
  });
  return (
    <div>
      {displayFavorites}
    </div>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps)(Favorites);
