import React from "react";

export default class MyForm extends React.Component {

  state = {
    name: "ben",
    favoritePet: "",
    rememberMe: false,
    title: 'Miss.',
  }

  handleChange = (event, fieldName, isCheckbox) => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: isCheckbox? event.target.checked: event.target.value });
  };

  handleChangeFavoritePet = (event) => {
    this.setState({ favoritePet: event.target.value });
  };

  handleSelect = event => {
    this.setState({title:event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        name="name"
        value={this.state.name} 
        onChange={this.handleChange} />
        <textarea 
        name="favoritePet"
          value={this.state.favoritePet} 
          onChange={this.handleChange} 
        />
        <input 
          type="checkbox" 
          checked={this.state.rememberMe}
          onChange={this.handleChange}
        /> 
<div>
  <select value={this.state.title} onChange={(event) => this.handleChange(event)}>
    <option>Mr.</option>
    <option>Miss.</option>
    <option>Ms.</option>
    <option>Mrs.</option>
  </select>
</div>
<button type="submit">submit</button>
      </form>
    );
  }
}
