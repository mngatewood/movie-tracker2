/* eslint-disable camelcase */
import './Card.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { setError, 
  addFavoriteToStore, 
  removeFavoriteFromStore } from '../../actions';
import { removeFromFavoritesDb } from '../../apiCalls/removeFromFavoritesDb';
import { addToFavoritesDb } from '../../apiCalls/addToFavoritesDb';
import PropTypes from 'prop-types';
import favSelected from '../../assets/fav-selected.png';

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favErrorHidden: true,
      isFavorite: window.location.pathname === '/favorites' 
        ? true 
        : this.props.favorites.some(
          favorite => favorite.movie_id === this.props.movie.movie_id
        )
    };
  }

  favoriteError() {
    if (!this.props.user.id) {
      this.setState({ favErrorHidden: !this.state.favErrorHidden });
    }
  }

  addFavorite() {
    if (this.props.user.id && !this.state.isFavorite) {
      addToFavoritesDb(this.props.movie.movie_id, this.props.user.id);
      this.props.addFavoriteToStore(this.props.movie);
      this.setState({ isFavorite: true });
    } 
  }

  removeFavorite() {
    if (this.props.user.id && this.state.isFavorite) {
      removeFromFavoritesDb(this.props.movie.movie_id, this.props.user.id);
      this.props.removeFavoriteFromStore(this.props.movie.movie_id);
      this.setState({ isFavorite: false });
    }
  }

  handleClick = () => {
    this.favoriteError();
    this.addFavorite();
    this.removeFavorite(); 
  };

  render() {
    if (!this.props.movie) {
      return (
        <div className="lds-ring">
          <div></div><div></div><div></div><div></div>
        </div>
      );
    }
    const { title, overview, poster_path, vote_average } = this.props.movie;
    const { favErrorHidden } = this.state;

    return (
      <div className={`card ${this.state.isFavorite && 'favorite'}`}>
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
        <img className="addFavoriteIcon" 
          onClick={this.handleClick} 
          src={favSelected} 
          alt="add to favorites button" />
        <div className={"addFaveError"} hidden={favErrorHidden}>
          <p>You must</p>
          <h4><Link to="/login">Login</Link></h4>
          <p>or</p>
          <h4><Link to="/signup">Sign Up</Link></h4>
          <p>before adding favorites.</p>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setError(error)),
  addFavoriteToStore: favorite => dispatch(addFavoriteToStore(favorite)),
  removeFavoriteFromStore: movie_id => 
    dispatch(removeFavoriteFromStore(movie_id))
});

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.num,
    movie_id: PropTypes.num,
    isFavorite: PropTypes.bool
  }),
  user: PropTypes.object,
  setError: PropTypes.func,
  addFavoriteToStore: PropTypes.func,
  removeFavoriteFromStore: PropTypes.func,
  favorites: PropTypes.array,
  history: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
