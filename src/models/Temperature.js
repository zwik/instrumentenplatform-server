const { Model } = require('objection');

class Temperature extends Model {
  static get tableName() {
    return 'temperature';
  }
}

module.exports = Temperature;
