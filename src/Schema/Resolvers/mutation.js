const {
  USER_ADDED_EVENT_LABEL,
} = require("../../Services/Subscriptions/EventLabels");
const { users } = require("../../utils/constants");
const Mutation = {
  //criando um novo usuario
  createUser: (_, args, { pubSub }) => {
    const newUser = {
      _id: String(Math.random()),
      name: args.name,
      email: args.email,
      active: true,
    };
    users.push(newUser);
    pubSub.publish(USER_ADDED_EVENT_LABEL, { userAdded: newUser });
    return newUser;
  },
};

module.exports = { Mutation };
