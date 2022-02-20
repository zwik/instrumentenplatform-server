const { DataSource } = require('apollo-datasource');

const Temperature = require('../db/models/Temperature');

class TemperatureAPI extends DataSource {
  async getAllTemperatures() {
    this.allTemperatures = await Temperature.query()
      .select('datetime', 'tempvalue AS temperature', 'intempvalue AS insidetemperature', 'tempgevoel AS feelslike', 'dauwpunt AS dewpoint');
    return this.allTemperatures;
  }

  async getTemperatureRange(from, to) {
    this.temperatureRange = await Temperature.query()
      .select('datetime', 'tempvalue AS temperature', 'intempvalue AS insidetemperature', 'tempgevoel AS feelslike', 'dauwpunt AS dewpoint')
      .whereBetween('datetime', [new Date(from), new Date(to)]);
    return this.temperatureRange;
  }

  async getTemperatureRangeInterval(from, to, interval) {
    this.temperatureRangeInterval = await Temperature.query()
      .select('datetime', 'tempvalue AS temperature', 'intempvalue AS insidetemperature', 'tempgevoel AS feelslike', 'dauwpunt AS dewpoint')
      .whereBetween('datetime', [new Date(from), new Date(to)])
      .where(`MOD(MINUTE(datetime), ${interval}) = 0`);
    return this.temperatureRangeInterval;
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
