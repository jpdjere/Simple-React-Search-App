import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SearchBar from "./SearchBar"
import Filter from "./Filter"
import Results from "./Results"

export default class Dashboard extends Component{
  render(){
    return (
      <div>
        <AppBar
          title="Tour search"
        />
        <SearchBar />
        <Filter />
        <Results />
      </div>
    )
  }
}
