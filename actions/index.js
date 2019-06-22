import { GraphQLClient } from "graphql-request";

import { FETCH_NEWS_QUERY } from "../graphql/query";
import { FETCH_NEWS } from "./types";

//This will be our one action that fetches the news and dispatches the action to the reducers
export const fetchNews = () => async dispatch => {
  //Grab our GraphQL CLient
  const client = new GraphQLClient(
    "https://cryptic-falls-75424.herokuapp.com/"
  );
  //Use our GraphQL query to fetch the data from the db or API
  const data = await client.request(FETCH_NEWS_QUERY);
  //Dispatch the action with the payload we just received
  dispatch({ type: FETCH_NEWS, payload: data });
};
