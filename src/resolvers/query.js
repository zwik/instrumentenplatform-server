module.exports = {
  temperature: (_parent, _args, { dataSources }) => dataSources.temperatureAPI.getAllTemperatures(),
  air: (_parent, _args, { dataSources }) => dataSources.airAPI.getAllAir(),
};
