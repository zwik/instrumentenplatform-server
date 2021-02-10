const { Model } = require('objection');

class Air extends Model {
  static get tableName() {
    return 'lucht';
  }
}

module.exports = Air;
