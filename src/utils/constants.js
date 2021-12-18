const users = [
  {
    _id: String(Math.random()),
    name: "Kelvin",
    email: "teste1@gmail.com",
    active: true,
  },
  {
    _id: String(Math.random()),
    name: "Fulano",
    email: "teste2@gmail.com",
    active: false,
  },
  {
    _id: String(Math.random()),
    name: "Beltrano",
    email: "teste3@gmail.com",
    active: true,
  },
];

module.exports = { users };
