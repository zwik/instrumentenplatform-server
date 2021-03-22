module.exports = {
  async insertInsideValues(_root, {
    datetime, temperature, humidity, pressure,
  }, { dataSources }) {
    try {
      dataSources.temperatureAPI.insertInsideTemperature(datetime, temperature);
      dataSources.airAPI.insertInsideHumidityAndPressure(datetime, humidity, pressure);
      return true;
    } catch (err) {
      return false;
    }
  },
};
