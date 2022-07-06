// import { combineReducers } from "redux";
// import reposReducer from "./reposReducer";

// const reducer = combineReducers({
//   reposReducer
// });

// export default reducer;


import { combineReducers } from "redux";
import reposReducer, {textReducer} from "./reposReducer";

const reducer = combineReducers({
  reposReducer,
  textReducer
});
 


export default reducer;
