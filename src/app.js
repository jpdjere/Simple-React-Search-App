import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from "./components/Dashboard"

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Dashboard />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

let root = document.getElementById("root");
ReactDOM.render(<App />,root)
