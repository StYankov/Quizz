import React, { Component } from 'react';
import Header from './components/header';
import QuizzContainer from './components/quizzContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <QuizzContainer />
      </div>
    );
  }
}

export default App;
