import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
import {connect} from "react-redux"
import {setPriceFilter,setRatingFilter} from "../actions";

class Sliders extends Component {

  handlePriceSlider = (event, value) => {
    this.props.setPriceFilter(value);
  };

  handleRatingSlider = (event, value) => {
    this.props.setRatingFilter(value);
  };

  render() {
    return (
      <div>
        {/* Price */}
        <p>
          <b>By Price:</b>
        </p>
        <Slider
          min={this.props.filters.priceMin}
          max={this.props.filters.priceMax}
          value={this.props.filters.priceCurrent}
          onChange={this.handlePriceSlider}
        />

        <p>
          <span>{'Tours with prices between '}</span>
          <b><span>{this.props.filters.priceMin}  </span></b>and
          <span><b> {this.props.filters.priceCurrent}</b></span>
        </p>

        {/* Rating */}
        <p style={{marginTop:"40px"}}>
          <b>By Rating:</b>
        </p>
        <Slider
          min={this.props.filters.ratingMin}
          max={this.props.filters.ratingMax}
          value={this.props.filters.ratingMax - this.props.filters.ratingCurrent}
          onChange={this.handleRatingSlider}
        />
        <p>
          <span>{'Tours with ratings between '}</span>
          <b><span>{this.props.filters.ratingCurrent} </span></b> and
          <span><b> {this.props.filters.ratingMax}</b></span>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    results:state.results,
    filters:state.filters
  }
}

export default connect(mapStateToProps, {setPriceFilter,setRatingFilter} )(Sliders)
