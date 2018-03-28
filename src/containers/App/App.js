import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import { getMovies, url, getUser } from '../../apiCalls/apiCalls';
import { addMovies } from '../../actions';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

class App extends Component {

  async componentDidMount() {
    const movies = await getMovies(url);
    this.props.addMovies(movies);
    getUser('tman2272@aol.com', 'password')
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' render={() => <CardContainer />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/signup' render={() => <Signup />} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
