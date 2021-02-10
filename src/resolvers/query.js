module.exports = {
  temperature: (_parent, _args, { dataSources }) => dataSources.temperatureAPI.getAllTemperatures(),
};
