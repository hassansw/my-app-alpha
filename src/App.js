import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      counter : 0
    }

    //Binding
    this.incNumText = this.incNumText.bind(this)
    this.decNumText = this.decNumText.bind(this)
  }

  incNumText(){
    this.setState( (value) => ({
      counter : value.counter + 1
    }))
  }

  decNumText() {
    this.setState( (value) => ({
      counter : value.counter - 1
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React By Hassan</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>

          <button onClick = {this.incNumText}> Increase </button>
          <h1>{this.state.counter}</h1>
          <button onClick = {this.decNumText}> Decrease </button>
          
        </div>
      </div>
    );
  }
}

export default App;
