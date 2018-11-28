import React, { Component } from "react";
import Etape1 from "./Etape1";
import Etape2 from "./Etape2";
import Etape3 from "./Etape3";

const ChooseStep = props => {
  if (props.step === 2)
    return <Etape2 handler={props.handler} stateParent={props.state.etape2} />;
  else if (props.step === 3)
    return <Etape3 stateParent={props.state} handler={props.handler} />;
  else
    return <Etape1 handler={props.handler} stateParent={props.state.etape1} />;
};

class App extends Component {
  state = {
    step: 1,
    etape1: {
      civilite: "mr",
      prenom: "",
      nom: "",
      email: "",
      tel: ""
    },
    etape2: {
      autre: "",
      framework: ""
    }
  };

  handler = e => {
    let change = {};

    for (let key in e) {
      let tmp = {};
      if (key === "step") {
        tmp = e[key].value;
      } else {
        for (let i in e[key]) {
          let name = e[key][i].nom;
          tmp[name] = e[key][i].value;
        }
      }
      change[key] = tmp;
    }

    this.setState(change);
  };

  render() {
    return (
      <div className="App">
        <ChooseStep
          handler={this.handler}
          state={this.state}
          step={this.state.step}
        />
      </div>
    );
  }
}

export default App;
