/* eslint-disable max-len */
module.exports = {
  air: (_parent, _args, { dataSources }) => dataSources.airAPI.getAllAir(),
  airRange: (_parent, { from, to }, { dataSources }) => dataSources.airAPI.getAirRange(from, to),
  airRangeInterval: (_parent, { from, to, interval }, { dataSources }) => dataSources.airAPI.getAirRangeInterval(from, to, interval),
  rain: (_parent, _args, { dataSources }) => dataSources.rainAPI.getAllRain(),
  rainRange: (_parent, { from, to }, { dataSources }) => dataSources.rainAPI.getRainRange(from, to),
  rainRangeInterval: (_parent, { from, to, interval }, { dataSources }) => dataSources.rainAPI.getRainRangeInterval(from, to, interval),
  sun: (_parent, _args, { dataSources }) => dataSources.sunAPI.getAllSun(),
  sunRange: (_parent, { from, to }, { dataSources }) => dataSources.sunAPI.getSunRange(from, to),
  sunRangeInterval: (_parent, { from, to, interval }, { dataSources }) => dataSources.sunAPI.getSunRangeInterval(from, to, interval),
  temperature: (_parent, _args, { dataSources }) => dataSources.temperatureAPI.getAllTemperatures(),
  temperatureRange: (_parent, { from, to }, { dataSources }) => dataSources.temperatureAPI.getTemperatureRange(from, to),
  temperatureRangeInterval: (_parent, { from, to, interval }, { dataSources }) => dataSources.temperatureAPI.getTemperatureRangeInterval(from, to, interval),
};
