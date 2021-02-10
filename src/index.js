require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const consola = require('consola');
const { createSchemas, destroy } = require('./db');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const Temperature = require('./models/Temperature');

async function main() {
  const temps = await Temperature.query().insert({
    tempvalue: 12.3,
    feelslike: 11.7,
    dewpoint: -9.4,
  });

  consola.info('temps: ', temps);
}

createSchemas()
  .then(() => main())
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
