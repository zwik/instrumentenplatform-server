/* eslint-disable max-len */
module.exports = {
  air: (_parent, _args, { dataSources }) => dataSources.airAPI.getAllAir(),
  airRange: (_parent, { from, to }, { dataSources }) => dataSources.airAPI.getAirRange(from, to),
  rain: (_parent, _args, { dataSources }) => dataSources.rainAPI.getAllRain(),
  rainRange: (_parent, { from, to }, { dataSources }) => dataSources.rainAPI.getRainRange(from, to),
  sun: (_parent, _args, { dataSources }) => dataSources.sunAPI.getAllSun(),
  sunRange: (_parent, { from, to }, { dataSources }) => dataSources.sunAPI.getSunRange(from, to),
  temperature: (_parent, _args, { dataSources }) => dataSources.temperatureAPI.getAllTemperatures(),
  temperatureRange: (_parent, { from, to }, { dataSources }) => dataSources.temperatureAPI.getTemperatureRange(from, to),
};
