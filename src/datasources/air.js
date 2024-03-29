const { DataSource } = require('apollo-datasource');

const Air = require('../db/models/Air');

class AirAPI extends DataSource {
  async getAllAir() {
    this.allAir = await Air.query()
      .select('datetime', 'luchtvocht AS humidity', 'inluchtvocht as insidehumidity', 'luchtdruk AS pressure', 'windspeed', 'hoogtebewolking AS cloudheight', 'fijnstofmeting AS particulatematter', 'windrichting AS winddirection');
    return this.allAir;
  }

  async getAirRange(from, to) {
    this.airRange = await Air.query()
      .select('datetime', 'luchtvocht AS humidity', 'inluchtvocht as insidehumidity', 'luchtdruk AS pressure', 'windspeed', 'hoogtebewolking AS cloudheight', 'fijnstofmeting AS particulatematter', 'windrichting AS winddirection')
      .whereBetween('datetime', [new Date(from), new Date(to)]);
    return this.airRange;
  }

  async getAirRangeInterval(from, to, interval) {
    this.airRangeInterval = await Air.query()
      .select('datetime', 'luchtvocht AS humidity', 'inluchtvocht as insidehumidity', 'luchtdruk AS pressure', 'windspeed', 'hoogtebewolking AS cloudheight', 'fijnstofmeting AS particulatematter', 'windrichting AS winddirection')
      .whereBetween('datetime', [new Date(from), new Date(to)])
      .andWhereRaw(`MOD(MINUTE(datetime), ${interval}) = 0`);
    return this.airRangeInterval;
  }

  async insertAir(datetime, humidity, inHumidity, pressure, windspeed, windDirection) {
    this.air = await Air.query().insert({
      datetime: new Date(datetime),
      luchtvocht: humidity,
      inluchtvocht: inHumidity,
      luchtdruk: pressure,
      windspeed,
      windrichting: windDirection,
    });
    return this.air;
  }
}

module.exports = AirAPI;
