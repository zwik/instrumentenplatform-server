module.exports = {
  async insertTemperatureValues(_root, {
    datetime, temperature, insidetemperature, dewpoint, feelslike,
  }, { dataSources }) {
    try {
      dataSources.temperatureAPI
        .insertTemperature(datetime, temperature, insidetemperature, dewpoint, feelslike);
      return true;
    } catch (err) {
      return false;
    }
  },
  async insertAirValues(_root, {
    datetime, humidity, insidehumidity, pressure, windspeed, winddirection,
  }, { dataSources }) {
    try {
      dataSources.airAPI
        .insertAir(datetime, humidity, insidehumidity, pressure, windspeed, winddirection);
      return true;
    } catch (err) {
      return false;
    }
  },
  async insertRainValues(_root, {
    datetime, rate,
  }, { dataSources }) {
    try {
      dataSources.rainAPI
        .insertRain(datetime, rate);
      return true;
    } catch (err) {
      return false;
    }
  },
};
