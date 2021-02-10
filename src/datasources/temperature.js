const { DataSource } = require('apollo-datasource');

const Temperature = require('../db/models/Temperature');

class TemperatureAPI extends DataSource {
  getAllTemperatures() {
    this.allTemperatures = Temperature.query()
      .select('datetime', 'tempvalue', 'tempgevoel AS feelslike', 'dauwpunt AS dewpoint');
    return this.allTemperatures;
  }
}

module.exports = TemperatureAPI;
