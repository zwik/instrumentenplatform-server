const { Model } = require('objection');
const Knex = require('knex');

const environment = process.env.ENVIRONMENT || 'development';
const knexConfig = require('./knexfile')[environment];

const knex = Knex(knexConfig);
Model.knex(knex);

const createSchemas = async () => {
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
};

const destroy = () => {
  knex.destroy();
};

module.exports = {
  createSchemas,
  destroy,
};
