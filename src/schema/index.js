const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  type Query {
    air: [Air]
    airRange(from: Date, to: Date): [Air]
    rain: [Rain]
    rainRange(from: Date, to: Date): [Rain]
    sun: [Sun]
    sunRange(from: Date, to: Date): [Sun]
    temperature: [Temperature]
    temperatureRange(from: Date, to: Date): [Temperature]
  }

  type Air {
    datetime: Date!
    humidity: Float
    pressure: Float
    windspeed: Float
    cloudheight: Float
    particulatematter: Float
    winddirection: String
  }

  type Rain {
    datetime: Date!
    rate: Float
  }

  type Sun {
    datetime: Date!
    radiation: Float
    uvindex: Float
  }

  type Temperature {
    datetime: Date!
    temperature: Float
    insidetemperature: Float
    feelslike: Float
    dewpoint: Float
  }

  type Mutation {
    insertTemperatureValues(datetime: Date!, temperature: Float, insidetemperature: Float, dewpoint: Float, feelslike: Float): Boolean
    insertAirValues(datetime: Date!, humidity: Float, insidehumidity: Float, pressure: Float, windspeed: Float, winddirection: Float): Boolean
    insertRainValues(datetime: Date!, rate: Float): Boolean
    insertSunValues(datetime: Date!, radiation: Float, uvindex: Float): Boolean
  }
`;
