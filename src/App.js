import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider, connect}  from 'react-redux'
import axios from 'axios'



function mapStateToProp(state){
  return {
    componentSate : state
  }
}


class App extends Component {

  constructor() {
    super()

    this.state = {
      counter  : 0
      //userLogs : []
    }

    //Binding
    //this.incNumText = this.incNumText.bind(this)
    //this.decNumText = this.decNumText.bind(this)
  }


  //This way it automatically bind it to
  incNumText = () => {
    this.setState({
      counter : this.state.counter + 1,
    })
  }

  decNumText = () => {
    if(this.state.counter > 0){
      this.setState({
        counter : this.state.counter - 1
      })
    }
  }

  // getDataFromUrl = () => {
        
  //   axios.get('http://mmssatc.pk/ais/andro_API/data_logs.php', {
  //     params: {
  //       user_id: 1
  //     }
  //   })
  //   .then(responseJson => {

  //     var tempArray = []

  //     responseJson.data.forEach(element => {
  //       tempArray.push(element)
  //     });

  //     this.setState({
  //       userLogs : tempArray
  //     })

  //     var counter = 0;
  //     this.state.userLogs.forEach(element => {
  //       console.log(element)
  //       counter++
  //       if (counter==10) {
  //         return
  //       }
  //     });

  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

  // }

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

          {/*<button onClick = {this.incNumText.bind(this)}> Increase </button>*/}
          <button onClick = {this.incNumText}> Increase </button>
          <h1>{this.state.counter}</h1>
          {/*<button onClick = {this.decNumText.bind(this)}> Decrease </button>*/}
          <button onClick = {this.decNumText}> Decrease </button>
          <br/>
          <br/>
          <br/>
          <button > GetData </button>
  
        </div>
      </div>
    );
  }
}

export default connect (mapStateToProp, null) (App);
