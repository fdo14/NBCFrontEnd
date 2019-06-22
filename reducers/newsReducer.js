import { FETCH_NEWS } from "../actions/types";

export default (
  //Create the initial starting state of news
  state = {
    news: []
  },
  action
) => {
  //Create a switch statement, even though we only have one action type
  switch (action.type) {
    //If the action FETCH_NEWS is fired, we need to update the state as such
    //We don't want to alter the old state, we want to copy it, modify it, and return a new one
    case FETCH_NEWS:
      return { ...state, news: action.payload };
    //Always have a default case!
    default:
      return { ...state };
  }
};
