/* eslint-disable max-len */
module.exports = {
  temperature: (_parent, _args, { dataSources }) => dataSources.temperatureAPI.getAllTemperatures(),
  temperatureRange: (_parent, { from, to }, { dataSources }) => dataSources.temperatureAPI.getTemperatureRange(from, to),
  air: (_parent, _args, { dataSources }) => dataSources.airAPI.getAllAir(),
  airRange: (_parent, { from, to }, { dataSources }) => dataSources.airAPI.getAirRange(from, to),
};
