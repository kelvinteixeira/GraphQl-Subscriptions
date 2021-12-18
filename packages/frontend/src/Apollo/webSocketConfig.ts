import { WebSocketLink } from '@apollo/client/link/ws';


export function createWebSocketLink() {
  const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_GRAPHQL_WS_SERVER as string,
    options: {
      reconnect: true
    },
  });


  return wsLink
}
