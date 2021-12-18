const express = require("express");
const { createServer } = require("http");
const { createApolloServer } = require("./ApolloConfig/ApolloServer");

const appExpress = express();
const httpServer = createServer(appExpress);

createApolloServer(appExpress, httpServer);

const PORT = 8000;
httpServer.listen(PORT, () =>
  console.log(`Server is now running on http://localhost:${PORT}/graphql`)
);
