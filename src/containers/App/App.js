import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import { getMovies } from '../../apiCalls/getMovies';
import { 
  addMovies, 
  addFavorites, 
  resetFavorites, 
  validateUser 
} from '../../actions';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Favorites from '../Favorites/Favorites';
import PropTypes from 'prop-types';
import { movieCleaner } from '../../apiCalls/movieCleaner';
import { getAccessToken } from '../../apiCalls/getAccessToken';
import { getTokenData } from '../../apiCalls/getTokenData';
import { getFavorites } from '../../apiCalls/getFavorites';

export class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: ''
    };
  }

  async componentDidMount() {
    let favorites = [];
    try {
      // Load user data if user is logged in
      const token = await getAccessToken();
      if (token) {
        const tokenData = getTokenData(token);
        const userData = { 
          username: tokenData.name, 
          id: tokenData.userId 
        };
        this.props.resetFavorites();
        favorites = await getFavorites(userData.id);
        this.props.addFavorites(favorites);
        this.props.validateUser(userData);
      }
      const movies = await getMovies();
      const cleanMovies = movieCleaner(movies, favorites);
      this.props.addMovies(cleanMovies);
    } catch (error) {
      this.setState({error: error.message});
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' render={() => <CardContainer 
          error={this.state.error} />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/signup' render={() => <Signup />} />
        <Route path='/favorites' render={() => <Favorites />} />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addMovies: (movies) => dispatch(addMovies(movies)),
  validateUser: (user) => dispatch(validateUser(user)),
  addFavorites: (favorites) => dispatch(addFavorites(favorites)),
  resetFavorites: () => dispatch(resetFavorites())
});

App.propTypes = {
  addMovies: PropTypes.func,
  validateUser: PropTypes.func,
  addFavorites: PropTypes.func,
  resetFavorites: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(App));
