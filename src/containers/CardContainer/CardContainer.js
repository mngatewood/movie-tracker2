import React from 'react';
import './CardContainer.css';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const CardContainer = ({movies}) => {
  let displayCards;

  if (movies) {
    displayCards = movies.map((movie) => {
      return <Card
        key={movie.key}
        movie={movie} />;
    });
  }
  return (
    <div>
      {displayCards}
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(CardContainer);