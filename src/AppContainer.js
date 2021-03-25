import React from 'react'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import App from './App';

const AppContainer = () => {
  return(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
  )
}

export default AppContainer;
