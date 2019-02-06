import React, { Component } from 'react';
import './App.css';
import {Body, Body2} from "./components/Body";
import Header from "./components/Header";

class App extends Component {
  add(a,b) {
    return a+b;
  }
  render() {
    const add = (a,b) => a+b;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Header title="Hello" num={4} myObj={{a:5,b: 6}} myArr={[10,11,12]}
            myFunc={this.add}
            ></Header>
            <Body myFunc={this.add} text="i am cool" text2="I am cool2"></Body>
            <Body2></Body2>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
