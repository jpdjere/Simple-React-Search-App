import React, {Component} from "react";
import Slider from "./Slider"
import Toggle from 'material-ui/Toggle';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {connect} from "react-redux";
import {setSOFilter} from "../actions"

const styles = {
  wrapper:{
    boxShadow: "0px 0px 35px 5px rgba(0,0,0,0.75)",
    padding: "40px 30px"
  },
  floatLeft:{
    float:"left",
    marginLeft:"10px",
    marginRight:"10px"
  },
  toggleWrapper:{
    display: "flex",
    alignItems: "center"

  }
}

class Filter extends Component{

  handleToggleChange = (event,isInputChecked) => {
    this.props.setSOFilter(isInputChecked);
  };

  showFilters(){
    return (
      this.props.filters &&
      <div  style={styles.wrapper}>
        <Slider />
        <div style={styles.toggleWrapper}>
          <p style={styles.floatLeft} >
            <b>
              See only Special Offers!
            </b>
          </p>
          <Toggle
            style={styles.floatLeft}
            label={<b>{this.props.filters.onlySO ? "ON" : "OFF"}</b>}
            labelPosition="right"
            onToggle={this.handleToggleChange}
          />
        </div>
      </div>
    )
  }

  render(){
    return(
      this.props.results &&
      <Card>
        <CardHeader
          title="Filter your results..."
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {this.showFilters()}
        </CardText>
      </Card>

    )
  }


}

function mapStateToProps(state){
  return {
    results:state.results,
    filters:state.filters
  }
}

export default connect(mapStateToProps, {setSOFilter})(Filter)
