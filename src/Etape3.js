import React, { Component } from "react";

class Etape3 extends Component {
  state = {
    etape1: {
      civilite: this.props.stateParent.etape1.civilite,
      prenom: this.props.stateParent.etape1.prenom,
      nom: this.props.stateParent.etape1.nom,
      email: this.props.stateParent.etape1.email,
      tel: this.props.stateParent.etape1.tel
    },
    etape2: {
      framework: this.props.stateParent.etape2.framework,
      autre: this.props.stateParent.etape2.autre
    },
    id: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  backStep = e => {
    this.props.handler({
      step: {
        value: e.target.value
      }
    });
  };

  save = e => {
    const res = this.fetchPost("http://localhost:3000/utilisateurs");
    if (res) {
      alert("Enregistrement en BDD effectué, merci !");
    }
    this.props.handler({ step: { value: 1 } });
  };

  fetchPost = url => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(this.state)
      })
        .then(response => response.json())
        .then(jsonData => resolve(jsonData))
        .catch(error => {
          reject(error);
        });
    });
  };

  divStyle = {
    position: "relative",
    left: "20px"
  };

  render() {
    return (
      <div style={this.divStyle}>
        <h1>Inscription</h1>
        <h2>Recapitulatif</h2>
        <p>Etape 1:</p>
        <p>Civilité : {this.state.etape1.civilite}</p>
        <p>Prénom : {this.state.etape1.prenom}</p>
        <p>Nom : {this.state.etape1.nom}</p>
        <p>email : {this.state.etape1.email}</p>
        <p>Téléphone : {this.state.etape1.tel}</p>
        <p>Etape 2:</p>
        <p>Framework : {this.state.etape2.framework}</p>
        <p>Autre : {this.state.etape2.autre}</p>
        <button value="BDD" onClick={this.save}>
          Enregistrement en BDD
        </button>
        <button value="1" onClick={this.backStep}>
          Retour étape 1
        </button>
        <button value="2" onClick={this.backStep}>
          Retour étape 2
        </button>
      </div>
    );
  }
}

export default Etape3;
