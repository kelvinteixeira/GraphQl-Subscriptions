const { PubSub } = require("graphql-subscriptions");

const pubSub = new PubSub(); // responsavel por criar o tunel webSocket

module.exports = { pubSub };
