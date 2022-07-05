import { applyMiddleware } from "redux";
import {configureStore } from '@reduxjs/toolkit'

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";

let middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);

export default configureStore({reducer}, composeWithDevTools(middleware));
