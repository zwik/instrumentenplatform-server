const { DataSource } = require('apollo-datasource');

const Air = require('../db/models/Air');

class AirAPI extends DataSource {
  async getAllAir() {
    this.allAir = await Air.query()
      .select('datetime', 'luchtvocht AS humidity', 'luchtdruk AS pressure', 'windspeed', 'hoogtebewolking AS cloudheight', 'fijnstofmeting AS particulatematter', 'windrichting AS winddirection');
    return this.allAir;
  }

  async getAirRange(from, to) {
    this.airRange = await Air.query()
      .select('datetime', 'luchtvocht AS humidity', 'luchtdruk AS pressure', 'windspeed', 'hoogtebewolking AS cloudheight', 'fijnstofmeting AS particulatematter', 'windrichting AS winddirection')
      .whereBetween('datetime', [new Date(from), new Date(to)]);
    return this.airRange;
  }

  async insertInsideHumidityAndPressure(datetime, humidity, pressure) {
    this.insideHumidityAndPressure = await Air.query().insert({
      datetime: new Date(datetime),
      inluchtvocht: humidity,
      luchtdruk: pressure,
    });
    return this.insideHumidityAndPressure;
  }
}

module.exports = AirAPI;
