const { DataSource } = require('apollo-datasource');

const Air = require('../db/models/Air');

class AirAPI extends DataSource {
  getAllAir() {
    this.allAir = Air.query()
      .select('datetime', 'luchtvocht AS humidity', 'luchtdruk AS pressure', 'windspeed', 'hoogtebewolking AS cloudheight', 'fijnstofmeting AS particulatematter', 'windrichting AS winddirection');
    return this.allAir;
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
