const Temperature = require('../db/models/Temperature');

module.exports = {
  temperature: () => Temperature.query(),
};
