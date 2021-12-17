const { SubscriptionServer } = require("subscriptions-transport-ws");
const { execute, subscribe } = require("graphql");
const { pubSub } = require("../Services/Subscriptions/pubSub");

function createSubscriptionServer(schema, server) {
  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      onConnect(connectionParams, webSocket, context) {
        return { pubSub };
      },
      onDisconnect(webSocket, context) {
        console.log("Subscription Server Disconnected!");
      },
    },
    { server, path: "/graphql" }
  );

  return { subscriptionServer, pubSub };
}

module.exports = { createSubscriptionServer };
