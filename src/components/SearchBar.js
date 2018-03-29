import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchResults} from "../actions"

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from "./Slider";

const styles = {
  wrapper: {
    width: '100%',
    display: "flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    flexWrap: "wrap",
    // margin: "0 auto",
    // padding:"100px"
    margin:"10px 0"

  },
  textFieldWrapper: {
    flex: "5 1"
  },
  buttonWrapper: {
    flex: "1 1",
    alignSelf: "center",
    padding: "20px"
  },
};

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
      <div>

        <div style={styles.wrapper}>
          <div style={styles.textFieldWrapper}>
            <TextField
              floatingLabelText="Search for your travel package!"
              fullWidth={true}
              value={this.state.search}
              onChange={this.handleTextChange}
            />
          </div>
          <div style={styles.buttonWrapper}>
            <RaisedButton label="Search!"
              primary={true}
              style={{margin:"0px"}}
              fullWidth={true}
              onClick={this.submit}


            />
          </div>

        </div>
        {this.state.searchError && <h3 style={{color:"red"}}>{this.state.searchError}</h3>}
      </div>
    )
  }
}

export default connect(null,{fetchResults})(SearchBar);
