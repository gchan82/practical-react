import React, { Component } from 'react';
import './App.css';

const Body = (props) => (<div>
  <p className="App-intro">{props.text}</p>
  <p className="App-intro">{props.text2}</p>
  <p className="App-intro">{props.myFunc(1,2)}</p>
</div>);


class Header extends Component {
  render(){
    return (
<header className="App-header">
            <h1 className="App-title">{this.props.title}</h1>
            {this.props.num}
            <div>
            {JSON.stringify(this.props.myObj)}
            {this.props.myArr[0]}
            {this.props.myFunc(10,12)}
            </div>
        </header>
    );
  }
}

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
