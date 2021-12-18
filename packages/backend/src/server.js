const express = require("express");
const { createServer } = require("http");
const { createApolloServer } = require("./ApolloConfig/ApolloServer");

const appExpress = express();
const httpServer = createServer(appExpress);

createApolloServer(appExpress, httpServer);

httpServer.listen(process.env.PORT, () =>
  console.log(`Server is now running on http://localhost:${process.env.PORT}/graphql`)
);
