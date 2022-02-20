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

  async getRainRangeInterval(from, to, interval) {
    this.rainRangeInterval = await Rain.query()
      .select('datetime', 'neerslagvalue AS rate')
      .whereBetween('datetime', [new Date(from), new Date(to)])
      .where(`MOD(MINUTE(datetime), ${interval}) = 0`);
    return this.rainRangeInterval;
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
