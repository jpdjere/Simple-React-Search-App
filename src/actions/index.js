import _ from "lodash";
import data from "./data.js"



// export const getInitialFilters = () => dispatch => {
//   dispatch({ type: GET_INITIAL_FILTERS, payload: res.data})
// }


export const SET_PRICE_FILTER = "set_price_filter";

export const setPriceFilter = (value) => dispatch => {
  dispatch({ type: SET_PRICE_FILTER, payload: value})
}


export const SET_RATING_FILTER = "set_rating_filter";

export const setRatingFilter = (value) => dispatch => {
  dispatch({ type: SET_RATING_FILTER, payload: value})
}

export const SET_SO_FILTER = "set_so_filter";

export const setSOFilter = (value) => dispatch => {
  console.log(value);
  dispatch({ type: SET_SO_FILTER, payload: value})
}

export const GET_INITIAL_FILTERS = "get_filters";
export const FETCH_RESULTS = "fetch_results";

export const fetchResults = () => dispatch => {
  let results = data.tours;
  let priceMax = parseInt(_.maxBy(results, function(o) { return parseInt(o.price) }).price);
  let priceCurrent = priceMax;
  let priceMin = parseInt(_.minBy(results, function(o) { return parseInt(o.price) }).price);
  let ratingMax = parseFloat(_.maxBy(results, function(o) { return parseFloat(o.rating) }).rating);
  let ratingMin = parseFloat(_.minBy(results, function(o) { return parseFloat(o.rating) }).rating);
  let ratingCurrent = ratingMin;
  dispatch({
    type: GET_INITIAL_FILTERS,
    payload: {
      priceMax,
      priceMin,
      priceCurrent,
      ratingMax,
      ratingMin,
      ratingCurrent,
      onlySO:false
    }
  })
  dispatch({ type: FETCH_RESULTS, payload: data})
}
