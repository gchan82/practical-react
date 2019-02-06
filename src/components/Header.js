import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">{this.props.title}</h1>
        {this.props.num}
        <div>
          {JSON.stringify(this.props.myObj)}
          {this.props.myArr[0]}
          {this.props.myFunc(10, 12)}
        </div>
      </header>
    );
  }
}

export default Header;