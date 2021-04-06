const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  type Query {
    temperature: [Temperature]
    temperatureRange(from: Date, to: Date): [Temperature]
    air: [Air]
    airRange(from: Date, to: Date): [Air]
  }

  type Temperature {
    datetime: Date!
    tempvalue: Float
    intempvalue: Float
    feelslike: Float
    dewpoint: Float
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

  type Mutation {
    insertInsideValues(datetime: Date!, temperature: Float, humidity: Float, pressure: Float): Boolean
  }
`;
