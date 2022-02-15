const { DataSource } = require('apollo-datasource');

const Rain = require('../db/models/Rain');

class RainAPI extends DataSource {
  async getAllRain() {
    this.allRain = await Rain.query()
      .select('datetime', 'neerslagvalue AS rate');
    return this.allRain;
  }

  async getRainRange(from, to) {
    this.rainRange = await Rain.query()
      .select('datetime', 'neerslagvalue AS rate')
      .whereBetween('datetime', [new Date(from), new Date(to)]);
    return this.rainRange;
  }

  async insertRain(datetime, rate) {
    this.rain = await Rain.query().insert({
      datetime: new Date(datetime),
      neerslagvalue: rate,
    });
    return this.rain;
  }
}

module.exports = RainAPI;
