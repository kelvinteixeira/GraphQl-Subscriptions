const { gql } = require("apollo-server-express");
const { queryTypeDefs } = require("./queries");
const { mutationTypeDefs } = require("./mutations");
const { subscriptionTypeDefs } = require("./subscriptions");

const defaultTypeDefs = gql`
  type User {
    _id: ID! # ID para aplicar uma chave primaria
    name: String! #Aplicar ! faz com que esse atributo seja obrigatorio
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User! # aninhamento de tipos
  }
`;

const typeDefs = [
  defaultTypeDefs,
  queryTypeDefs,
  mutationTypeDefs,
  subscriptionTypeDefs,
];


module.exports = { typeDefs };
