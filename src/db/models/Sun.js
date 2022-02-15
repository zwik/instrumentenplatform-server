const { Model } = require('objection');

class Sun extends Model {
  static get tableName() {
    return 'zonnehelderheid';
  }
}

module.exports = Sun;
