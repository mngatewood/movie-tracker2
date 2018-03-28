import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import { getMovies } from '../../apiCalls/apiCalls';
import apiKey from '../../apiCalls/apiKey';

class App extends Component {

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-27&primary_release_date.lte=2018-03-27`
    getMovies(url);
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

export default App;
