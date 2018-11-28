import React, { Component } from "react";

class Formulaire extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Nom : <input onChange={this.handleChange} name="nom" type="text" />
        <textarea
          value={this.state.message}
          name="message"
          onChange={this.handleChange}
        />
        <input type="text" name="prenom" value="Mathieu" />
        <input type="Submit" value="Submit" />
      </form>
    );
  }
}

export default Formulaire;
