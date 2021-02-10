require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const consola = require('consola');
const { createSchemas, destroy } = require('./db');

const TemperatureAPI = require('./datasources/temperatures');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const dataSources = () => ({
  temperatureAPI: new TemperatureAPI(),
});

createSchemas()
  .then(() => {
    const server = new ApolloServer({ typeDefs, resolvers, dataSources });
    server.listen().then(({ url }) => {
      consola.info(`🚀  Server ready at ${url}`);
    });
  })
  .catch((err) => {
    consola.error(err);
    return destroy();
  });
