const { gql } = require("apollo-server-express");

const subscriptionTypeDefs = gql`
  type Subscription {
    userAdded: User!
  }
`;

module.exports = { subscriptionTypeDefs };
