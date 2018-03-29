import { combineReducers } from "redux";

import FilterReducer from "./reducer_filter";
import ResultsReducer from "./reducer_results";

const rootReducer = combineReducers({
  filters: FilterReducer,
  results: ResultsReducer
});

export default rootReducer;
