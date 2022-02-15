const { DataSource } = require('apollo-datasource');

const Temperature = require('../db/models/Temperature');

class TemperatureAPI extends DataSource {
  async getAllTemperatures() {
    this.allTemperatures = await Temperature.query()
      .select('datetime', 'tempvalue', 'intempvalue', 'tempgevoel AS feelslike', 'dauwpunt AS dewpoint');
    return this.allTemperatures;
  }

  async getTemperatureRange(from, to) {
    this.temperatureRange = await Temperature.query()
      .select('datetime', 'tempvalue', 'intempvalue', 'tempgevoel AS feelslike', 'dauwpunt AS dewpoint')
      .whereBetween('datetime', [new Date(from), new Date(to)]);
    return this.temperatureRange;
  }

  async insertTemperature(datetime, temperature, inTemperature, dewpoint, feelsLike) {
    this.temperature = await Temperature.query().insert({
      dateTime: new Date(datetime),
      tempvalue: temperature,
      intempvalue: inTemperature,
      dauwpunt: dewpoint,
      tempgevoel: feelsLike,
    });
  }
}

module.exports = TemperatureAPI;
