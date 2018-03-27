import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import { getMovies } from '../../apiCalls/apiCalls';

class App extends Component {

  componentDidMount() {
    getMovies();
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
