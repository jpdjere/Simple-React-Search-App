import React, {Component} from "react";
import ReactDOM from "react-dom"

class App extends Component{
  render(){
    return <hi>Hi!</hi>
  }
}

let root = document.getElementById("root");
ReactDOM.render(<App />,root)
