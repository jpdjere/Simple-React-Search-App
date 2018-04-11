import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchResults} from "../actions"

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from "./Slider";
import css from "./SearchBar.css"

class SearchBar extends Component{
  constructor(){
    super();
    this.state = {
      search: "",
      searchError:null
    }
    this.submit = this.submit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

  }

  submit(){
    if(this.state.search.trim().length > 4){
      this.setState({
        search:"",
        searchError:null
      })
      this.props.fetchResults();
    }else{
      this.setState({
        search:"",
        searchError:"Your search term should be at least five characters long."
      })
    }
  }
  handleTextChange(event,newValue){
    console.log(event, newValue);
    this.setState({
      search:newValue
    })
  }

  render(){
    return (
      <div className={css.searchBar}>

        <div className={css.searchBarContainer}>
          <div className={css.textField}>
            <TextField
              floatingLabelText="Search for your travel tour!"
              fullWidth={true}
              value={this.state.search}
              onChange={this.handleTextChange}
            />
          </div>
          <div className={css.searchButton}>
            <RaisedButton label="Search!"
              primary={true}
              style={{margin:"0px"}}
              fullWidth={true}
              onClick={this.submit}


            />
          </div>

        </div>
        {this.state.searchError && <h3 className={css.errorMessage}>{this.state.searchError}</h3>}
      </div>
    )
  }
}

export default connect(null,{fetchResults})(SearchBar);
