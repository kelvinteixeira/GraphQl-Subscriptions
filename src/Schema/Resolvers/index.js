const { Query } = require("./queries");
const { Mutation } = require("./mutation");
const { Subscription } = require("./subscription");

const resolvers = {
  Query,
  Mutation,
  Subscription,
};

module.exports = { resolvers };
