require('dotenv').config();

const { Model } = require('objection');
const Knex = require('knex');
const { ApolloServer } = require('apollo-server');
const consola = require('consola');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const Person = require('./models/Person');
const Temperature = require('./models/Temperature');

const knex = Knex({
  client: 'mysql',
  useNullAsDefault: true,
  connection: {
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    insecureAuth: true,
  },
});

Model.knex(knex);

async function createSchemas() {
  if (await knex.schema.hasTable('persons')) {
    return;
  }

  await knex.schema.createTable('persons', (table) => {
    table.increments('id').primary();
    table.integer('parentId').unsigned().references('persons.id');
    table.string('firstname');
  });

  if (await knex.schema.hasTable('temperature')) {
    return;
  }

  await knex.schema.createTable('temperature', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.double('tempvalue').notNullable();
    table.double('feelslike').defaultTo(null);
    table.double('dewpoint').notNullable();
  });
}

async function main() {
  const sylvester = await Person.query().insertGraph({
    firstName: 'Sylvester',

    children: [
      {
        firstName: 'Sage',
      }, {
        firstName: 'Sophia',
      },
    ],
  });

  consola.info('created: ', sylvester);

  const temps = await Temperature.query().insert({
    tempvalue: 12.3,
    feelslike: 11.7,
    dewpoint: -9.4,
  });

  const sylvesters = await Person.query()
    .where('firstName', 'Sylvester')
    .withGraphFetched('children')
    .orderBy('id');

  consola.info('sylvesters: ', sylvesters);
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
    return knex.destroy();
  });
