import {
  ApolloClient,
  InMemoryCache, split
} from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { createHttpLink } from "./httpConfig";
import { createWebSocketLink } from "./webSocketConfig";

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  createWebSocketLink(),
  createHttpLink(),
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});