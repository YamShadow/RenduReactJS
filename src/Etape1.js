import React, { Component } from "react";

class Etape1 extends Component {
  state = {
    civilite: this.props.stateParent.civilite,
    prenom: this.props.stateParent.prenom,
    nom: this.props.stateParent.nom,
    email: this.props.stateParent.email,
    tel: this.props.stateParent.tel
  };

  handleSubmit = e => {
    e.preventDefault();

    let data = {
      etape1: {
        0: {
          nom: "civilite",
          value: this.state.civilite
        },
        1: {
          nom: "prenom",
          value: this.state.prenom
        },
        2: {
          nom: "nom",
          value: this.state.nom
        },
        3: {
          nom: "email",
          value: this.state.email
        },
        4: {
          nom: "tel",
          value: this.state.tel
        }
      },
      step: {
        value: 2
      }
    };
    this.props.handler(data);
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  divStyle = {
    position: "relative",
    left: "20px"
  };

  render() {
    return (
      <div style={this.divStyle}>
        <h1>Inscription</h1>
        <h2>Etape 1</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Civilité:
              <select
                value={this.state.civilite}
                name="civilite"
                onChange={this.handleChange}
              >
                <option value="mr">Monsieur</option>
                <option value="mme">Madame</option>
                <option value="nonBinaire">Non Binaire</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Prénom*:
              <input
                type="text"
                value={this.state.prenom}
                placeholder="Exemple : John"
                name="prenom"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Nom*:
              <input
                type="text"
                value={this.state.nom}
                placeholder="Exemple : Doe"
                name="nom"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email*:
              <input
                type="email"
                value={this.state.email}
                placeholder="Exemple : john@doe.fr"
                name="email"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              tél:
              <input
                type="tel"
                value={this.state.tel}
                placeholder="Exemple : +33 6 66 66 66 66"
                name="tel"
                pattern="(\+[0-9]{2}[0-9]{9})"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <input type="submit" value="Suivant" />
        </form>
      </div>
    );
  }
}

export default Etape1;
