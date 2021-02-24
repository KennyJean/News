import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "https://newsapi.org/v2/",
  headers: {
    Authorization: "87292dd84e644e75ac372d3b6f892c1b",
  },
});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
