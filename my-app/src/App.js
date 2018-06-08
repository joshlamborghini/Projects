import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function Person(Props){
  return (
    <div className="person">
      <h1>{Props.name}</h1>
      <p>Your Age: {Props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Max" age="28"/>
    <Person name="Josh" age="33"/>
    <Person name="Josh" age="33"/>    
  </div>
);

ReactDOM.render(app, document.querySelector('#app'));

export default App;
