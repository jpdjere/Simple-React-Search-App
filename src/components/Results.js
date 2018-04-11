import React, {Component} from "react";
import {connect} from "react-redux"

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

import css from "./Results.css"


class Results extends Component{



  showResults(){
    if(this.props.results){
      let filtered = this.props.results.tours.filter((tour) => {
        if(
          parseInt(tour.price) > this.props.filters.priceCurrent ||
          parseFloat(tour.rating) < this.props.filters.ratingCurrent
        ){
          return false
        }
        return true
      })
      if(this.props.filters.onlySO){
        filtered = filtered.filter((tour) => {
          if(!tour.isSpecialOffer){
            return false
          }
          return true
        })
      }

      return(
        filtered.map((tour) => {
          return (

            <Card style={{padding:"10px",position:"relative"}}>
              <CardTitle title={tour.title}/>
              {
                tour.isSpecialOffer ?
                <p className={css.specialOffer}>SPECIAL OFFER</p>
                : ""
              }
              <CardText>
                <h3>
                  Price: €{tour.price}
                </h3>
                <h3>
                  Rating: {tour.rating} stars
                </h3>
              </CardText>
              <CardActions>
                <RaisedButton
                  label="BUY"
                  labelPosition="before"
                  primary={true}
                  icon={<ActionFlightTakeoff />}
                />
              </CardActions>
            </Card>

          )
        })
      )
    }
  }

  render(){
    return (
      <div style={{paddingRight:"40px !important"}}>
        {this.showResults()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    results:state.results,
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(Results);
