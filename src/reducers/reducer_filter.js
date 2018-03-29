import _ from "lodash";
import { GET_INITIAL_FILTERS, SET_PRICE_FILTER, SET_RATING_FILTER, SET_SO_FILTER  } from "../actions";

export default function(state = null, action) {
  switch (action.type) {

    case GET_INITIAL_FILTERS:
      let filters = action.payload;
      return filters;

    case SET_PRICE_FILTER:
      return {
        ...state,
        priceCurrent: action.payload
      }

    case SET_RATING_FILTER:
      return {
        ...state,
        ratingCurrent: action.payload
      }

    case SET_SO_FILTER:
    return {
      ...state,
      onlySO: action.payload
    }


    default:
      return state;
  }
}
