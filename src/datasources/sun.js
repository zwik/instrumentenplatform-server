const { DataSource } = require('apollo-datasource');

const Sun = require('../db/models/Sun');

class SunAPI extends DataSource {
  async getAllSun() {
    this.allSun = await Sun.query()
      .select('datetime', 'radiatie AS radiation', 'uvindex');
    return this.allSun;
  }

  async getSunRange(from, to) {
    this.sunRange = await Sun.query()
      .select('datetime', 'radiatie AS radiation', 'uvindex')
      .whereBetween('datetime', [new Date(from), new Date(to)]);
    return this.sunRange;
  }

  async insertSun(datetime, radiation, uvindex) {
    this.sun = await Sun.query().insert({
      datetime: new Date(datetime),
      radiate: radiation,
      uvindex,
    });
    return this.sun;
  }
}

module.exports = SunAPI;
