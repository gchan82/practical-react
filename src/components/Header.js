import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">{this.props.title}</h1>
        <div>
        </div>
      </header>
    );
  }
}

export default Header;