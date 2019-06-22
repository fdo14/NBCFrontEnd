import { combineReducers } from "redux";

import newsReducer from "./newsReducer";

//We will only have one reducer here, but for best coding practices I like to seperate the logic like this
export default combineReducers({
  news: newsReducer
});
