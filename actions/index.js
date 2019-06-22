import { GraphQLClient } from "graphql-request";

import { FETCH_NEWS_QUERY } from "../graphql/query";
import { FETCH_NEWS } from "./types";

export const fetchNews = () => async dispatch => {
  const client = new GraphQLClient(
    "https://cryptic-falls-75424.herokuapp.com/"
  );
  const data = await client.request(FETCH_NEWS_QUERY);
  dispatch({ type: FETCH_NEWS, payload: data });
};
