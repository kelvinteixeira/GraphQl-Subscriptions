import { HttpLink } from "@apollo/client";

export function createHttpLink(){
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_HTTP_SERVER
  });

  return httpLink
}


