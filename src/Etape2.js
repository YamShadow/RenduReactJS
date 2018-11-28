import React, { Component } from "react";
import checkboxes from "./Checkboxes";
import Checkbox from "./Checkbox";

class Etape2 extends Component {
  state = {
    framework: this.props.stateParent.framework,
    autre: this.props.stateParent.autre
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = {
      etape2: {
        0: { nom: "framework", value: this.state.framework },
        1: { nom: "autre", value: this.state.autre }
      },
      step: { value: 3 }
    };
    this.props.handler(data);
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleChangeCheckbox = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      framework: prevState.framework.set(item, isChecked)
    }));
  };

  backStep = e => {
    this.props.handler({
      step: {
        value: 1
      }
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
        <h2>Etape 2</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Framework :
              <div className="radio">
                <label>
                  <input
                    checked={this.state.framework === "ReactJS" ? true : false}
                    type="radio"
                    name="framework"
                    onChange={this.handleChange}
                    value="ReactJS"
                  />
                  ReactJS
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    checked={this.state.framework === "Angular" ? true : false}
                    type="radio"
                    name="framework"
                    onChange={this.handleChange}
                    value="Angular"
                  />
                  Angular
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    checked={this.state.framework === "VueJS" ? true : false}
                    type="radio"
                    name="framework"
                    onChange={this.handleChange}
                    value="VueJS"
                  />
                  VueJS
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    checked={this.state.framework === "Laravel" ? true : false}
                    type="radio"
                    name="framework"
                    onChange={this.handleChange}
                    value="Laravel"
                  />
                  Laravel
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    checked={this.state.framework === "Symfony" ? true : false}
                    type="radio"
                    name="framework"
                    onChange={this.handleChange}
                    value="Symfony"
                  />
                  Symfony
                </label>
              </div>
              {/* {checkboxes.map(item => (
                <label key={item.key}>
                  {item.name}
                  <Checkbox
                    name={item.name}
                    checked={this.state.framework.get(item.name)}
                    onChange={this.handleChangeCheckbox}
                  />
                </label>
              ))} */}
            </label>
          </div>
          <div>
            <label>
              Autre :
              <textarea
                value={this.state.autre}
                name="autre"
                onChange={this.handleChange}
              />
            </label>
          </div>

          <input type="submit" value="Suivant" />
          <button value="Retour" onClick={this.backStep}>
            Retour
          </button>
        </form>
      </div>
    );
  }
}

export default Etape2;
