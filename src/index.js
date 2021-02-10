require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const consola = require('consola');
const { createSchemas, destroy } = require('./db');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

createSchemas()
  .then(() => {
    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => {
      consola.info(`🚀  Server ready at ${url}`);
    });
  })
  .catch((err) => {
    consola.error(err);
    return destroy();
  });
