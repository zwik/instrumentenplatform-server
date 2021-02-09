const Query = require('./query');
const dateScalar = require('./scalars/date');

module.exports = {
  Query,
  Date: dateScalar,
};
