const { USER_ADDED } = require('./channels')
const { ApolloServer, gql } = require('apollo-server-express')
const { execute, subscribe } = require('graphql')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const express = require('express')
const { createServer } = require('http')
const { PubSub } = require('graphql-subscriptions')



// No GraphQl toda request é POST
//Toda request bate no mesmo endpoint que por convenção fica (/graphql)

// Query => Obter informações como se fosse o (GET)
// Mutation => Manipular informações como se fosse (POST, PUT, PATCH, DELETE)
// Scalar Types => String, Int, Boolean, ID



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
    createUser(name: String!, email: String!,): User!
  }

  type Subscription {
    userAdded: User!
  }

`
const users = [
  { _id: String(Math.random()), name: "Kelvin", email: 'teste1@gmail.com', active: true },
  { _id: String(Math.random()), name: "Fulano", email: 'teste2@gmail.com', active: false },
  { _id: String(Math.random()), name: "Beltrano", email: 'teste3@gmail.com', active: true }
]

const resolvers = {
  Query: {
    hello: () => "Hello World",
    users: () => users,
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email)
    },
  },
  Mutation: {  //criando um novo usuario
    createUser: (_, args, { pubsub }) => {
      const newUser = {
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: true,
      }
      users.push(newUser)
      return newUser
    }

  },
  Subscription: { //criação do canal
    userAdded: { // nome do canal criado
      subscribe: (obj, args, { pubsub }) => pubsub.asyncIterator('USER_ADDED')
    }
  }
}

app = express()

const httpServer = createServer(app)

const schema = makeExecutableSchema({
  typeDefs, resolvers
})

const pubsub = new PubSub() // responsavel por criar o tunel webSocket

async function createApolloServer() {
  const subscriptionServer = SubscriptionServer.create({

    schema,
    execute,
    subscribe,
  }, {
    server: httpServer,
    path: '/subscriptions',
  });

  const server = new ApolloServer({
    typeDefs, resolvers, context: { pubsub }, plugins: [{
      async serverWillStart() {
        return {
          async drainServer() {
            subscriptionServer.close();
          }
        };
      }
    }]
  })
  server.start();
  return server
}
const server = createApolloServer()
server.applyMiddleware({ app });

const PORT = 8000;
httpServer.listen(PORT, () =>
  console.log(`Server is now running on http://localhost:${PORT}/graphql`)
)
