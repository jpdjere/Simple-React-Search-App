import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SearchBar from "./SearchBar"
import Filter from "./Filter"
import Results from "./Results"
import css from '../styles.css';

export default class Dashboard extends Component{
  componentDidMount(){
    console.log(css);
  }
  render(){
    return (
      <div className="">
        <div className={css.appBar}>
          <AppBar
            title="Tour search"
          />
        </div>
        <SearchBar />
        <Filter />
        <Results />
      </div>
    )
  }
}
