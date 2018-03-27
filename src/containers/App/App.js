import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import { getMovies, url } from '../../apiCalls/apiCalls';
import { addMovies } from '../../actions';
import { connect } from 'react-redux';

class App extends Component {

  async componentDidMount() {
    const movies = await getMovies(url);
    this.props.addMovies(movies);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route to='/' render = { () => <CardContainer /> } />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});

export default connect(null, mapDispatchToProps)(App);
