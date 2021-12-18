const { users } = require("../../utils/constants");

const Query = {
  hello: () => "Hello World",
  users: () => users,
  getUserByEmail: (_, args) => users.find((user) => user.email === args.email),
};

module.exports = { Query };
