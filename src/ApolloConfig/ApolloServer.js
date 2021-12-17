const { ApolloServer } = require("apollo-server-express");
const { schema } = require("../Schema");
const { graphQLContext } = require("./graphQLContext");
const { createSubscriptionServer } = require("./SubscriptionServer");

// No GraphQl toda request é POST
//Toda request bate no mesmo endpoint que por convenção fica (/graphql)

// Query => Obter informações como se fosse o (GET)
// Mutation => Manipular informações como se fosse (POST, PUT, PATCH, DELETE)
// Scalar Types => String, Int, Boolean, ID

async function createApolloServer(app, httpSv) {
  const { subscriptionServer, pubSub } = createSubscriptionServer(
    schema,
    httpSv
  );

  const instanceOfApolloServer = new ApolloServer({
    schema,
    context: graphQLContext(pubSub),
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });

  await instanceOfApolloServer.start();
  instanceOfApolloServer.applyMiddleware({ app });
}

module.exports = { createApolloServer };
