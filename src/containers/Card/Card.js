import './Card.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { 
  setError, 
  addFavoriteToStore, 
  removeFavoriteFromStore 
} from '../../actions';
import { 
  addToFavoritesDb, 
  removeFromFavoritesDb 
} from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';

export class Card extends Component {

  favoriteError = (event) => {
    if (!this.props.user.id) {
      const errorDiv = event.target.nextSibling;
      errorDiv.classList.remove("hidden");
    }
  };

  addFavorite = () => {
    if (this.props.user.id && !this.props.isFavorite) {
      addToFavoritesDb(this.props.movie, this.props.user.id);
      addFavoriteToStore(this.props.movie);
    } 
  };

  removeFavorite = () => {
    if (this.props.user.id && this.props.isFavorite) {
      removeFromFavoritesDb(this.props.movie.movie_id, this.props.user.id);
      removeFavoriteFromStore(this.props.movie_id);
    }
  };

  handleClick = (event) => {
    this.favoriteError(event);
    this.addFavorite();
    this.removeFavorite();
  };

  render() {
    const favorite = this.props.isFavorite ? "favorite" : "";
    const { title, overview, poster_path, vote_average } = this.props.movie;

    return (
      <div className={`card ${favorite}`}>
        <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} 
          alt="movie poster" />
        <div className="movieDetails">
          <div className="title">
            <h4>{title}</h4>
          </div>
          <div className="overview">
            <p>{overview}</p>
          </div>
          <div className="rating">
            <h4>Rating: {vote_average}</h4>
          </div>
        </div>
        <button onClick={(event) => this.handleClick(event)}>Favorite</button>
        <div className={"addFaveError hidden"}>
          <p>You must</p>
          <h4><a href="/login">Log In</a></h4>
          <p>or</p>
          <h4><a href="/signup">Sign Up</a></h4>
          <p>before adding favorites.</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setError(error)),
  addFavoriteToStore: favorite => dispatch(addFavoriteToStore(favorite)),
  removeFavoriteFromStore: movie_id => dispatch(removeFavoriteFromStore(movie_id))
});

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.num,
    movie_id: PropTypes.num
  }),
  user: PropTypes.object,
  setError: PropTypes.func,
  addFavoriteToStore: PropTypes.func,
  isFavorite: PropTypes.bool,
  removeFavoriteFromStore: PropTypes.func,
  movie_id: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
