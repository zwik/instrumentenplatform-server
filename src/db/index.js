const { Model } = require('objection');
const Knex = require('knex');

const environment = process.env.ENVIRONMENT || 'development';
const knexConfig = require('./knexfile')[environment];

const knex = Knex(knexConfig);
Model.knex(knex);

const temperatuur = require('./schemas/temperatuur');

const createSchemas = async () => {
  await temperatuur.createSchema(knex);
};

const destroy = () => {
  knex.destroy();
};

module.exports = {
  createSchemas,
  destroy,
};
