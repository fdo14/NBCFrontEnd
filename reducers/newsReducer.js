import { FETCH_NEWS } from "../actions/types";

export default (
  state = {
    news: []
  },
  action
) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, news: action.payload };
    default:
      return { ...state };
  }
};
