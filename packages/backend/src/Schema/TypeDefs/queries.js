const { gql } = require("apollo-server-express");

const queryTypeDefs = gql`
  type Query {
    hello: String
    users: [User!]! # essas ! para que não retorne um array com null
    getUserByEmail(email: String!): User!
  }
`;

module.exports = { queryTypeDefs };
