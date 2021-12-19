const {
  USER_ADDED_EVENT_LABEL,
} = require("../../Services/Subscriptions/EventLabels");

const Subscription = {
  //criação do canal
  userAdded: {
    // nome do canal criado
    subscribe: (_, __, { pubSub }) =>
      pubSub.asyncIterator([USER_ADDED_EVENT_LABEL]),
  },
};

module.exports = { Subscription };
