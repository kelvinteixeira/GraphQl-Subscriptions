const { gql } = require("apollo-server-express");

const typeDefs = gql`
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

  type Query {
    hello: String
    users: [User!]! # essas ! para que não retorne um array com null
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }

  type Subscription {
    userAdded: User!
  }
`;

module.exports = { typeDefs };
