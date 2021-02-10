const { Model } = require('objection');

class Temperature extends Model {
  static get tableName() {
    return 'temperatuur';
  }
}

module.exports = Temperature;
