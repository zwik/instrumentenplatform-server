const { DataSource } = require('apollo-datasource');

const Air = require('../db/models/Air');

class AirAPI extends DataSource {
  getAllAir() {
    this.allAir = Air.query()
      .select('datetime', 'luchtvocht as humidity', 'luchtdruk as pressure', 'windspeed', 'hoogtebewolking as cloudheight', 'fijnstofmeting as particulatematter', 'windrichting as winddirection');
    return this.allAir;
  }
}

module.exports = AirAPI;
