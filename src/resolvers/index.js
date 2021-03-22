const Query = require('./query');
const Mutation = require('./mutation');
const dateScalar = require('./scalars/date');

module.exports = {
  Query,
  Mutation,
  Date: dateScalar,
};
