const { Model } = require('objection');
const Knex = require('knex');

const environment = process.env.ENVIRONMENT || 'development';
const knexConfig = require('./knexfile')[environment];

const knex = Knex(knexConfig);
Model.knex(knex);

const allskycam = require('./schemas/allskycam');
const lucht = require('./schemas/lucht');
const magnetometer = require('./schemas/magnetometer');
const meteoren = require('./schemas/meteoren');
const neerslag = require('./schemas/neerslag');
const satelietkaartnl = require('./schemas/satelietkaartnl');
const temperatuur = require('./schemas/temperatuur');
const weersverwachting = require('./schemas/weersverwachting');
const zonnehelderheid = require('./schemas/zonnehelderheid');

const createSchemas = async () => {
  await allskycam.createSchema(knex);
  await lucht.createSchema(knex);
  await magnetometer.createSchema(knex);
  await meteoren.createSchema(knex);
  await neerslag.createSchema(knex);
  await satelietkaartnl.createSchema(knex);
  await temperatuur.createSchema(knex);
  await weersverwachting.createSchema(knex);
  await zonnehelderheid.createSchema(knex);
};

const destroy = () => {
  knex.destroy();
};

module.exports = {
  createSchemas,
  destroy,
};
