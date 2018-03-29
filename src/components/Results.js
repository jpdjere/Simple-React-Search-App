import React, {Component} from "react";
import {connect} from "react-redux"

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const styles = {
  wrapper:{

  }

}


class Results extends Component{

  showCardTitle(tour){
    if(tour.isSpecialOffer){
      return <CardTitle title={tour.title} subtitle="SPECIAL OFFER" />
    }
    return <CardTitle title={tour.title}/>
  }

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

            <Card style={{padding:"10px"}}>
              {this.showCardTitle(tour)}
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
