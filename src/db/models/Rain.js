const { Model } = require('objection');

class Rain extends Model {
  static get tableName() {
    return 'neerslag';
  }
}

module.exports = Rain;
