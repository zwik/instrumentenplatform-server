const { DataSource } = require('apollo-datasource');

const Temperature = require('../db/models/Temperature');

class TemperatureAPI extends DataSource {
  getAllTemperatures() {
    this.allTemperatures = Temperature.query()
      .select('datetime', 'tempvalue', 'intempvalue', 'tempgevoel AS feelslike', 'dauwpunt AS dewpoint');
    return this.allTemperatures;
  }

  async insertInsideTemperature(datetime, temperature) {
    this.insideTemperature = await Temperature.query().insert({
      datetime: new Date(datetime),
      intempvalue: temperature,
    });
    return this.insideTemperature;
  }
}

module.exports = TemperatureAPI;
