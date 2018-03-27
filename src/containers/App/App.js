import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {

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
