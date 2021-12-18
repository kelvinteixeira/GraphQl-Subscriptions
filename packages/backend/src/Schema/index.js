const { makeExecutableSchema } = require("@graphql-tools/schema");
const { typeDefs } = require("./TypeDefs");
const { resolvers } = require("./Resolvers");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = { schema };
