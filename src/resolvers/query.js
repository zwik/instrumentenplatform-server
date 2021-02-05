const Temperature = require('../models/Temperature');

module.exports = {
  temperature: () => Temperature.query(),
};
