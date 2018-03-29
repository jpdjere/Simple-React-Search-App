import _ from "lodash";
import { FETCH_RESULTS } from "../actions";

export default function(state = null, action) {
  switch (action.type) {

    case FETCH_RESULTS:
      let results = action.payload.tours;
      return {
        ...state,
        tours:results,
      };

    default:
      return state;
  }
}
