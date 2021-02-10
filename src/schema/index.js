const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  type Query {
    temperature: [Temperature]
    air: [Air]
  }

  type Temperature {
    datetime: Float
    tempvalue: Float
    feelslike: Float
    dewpoint: Float
  }

  type Air {
    datetime: Float
    humidity: Float
    pressure: Float
    windspeed: Float
    cloudheight: Float
    particulatematter: Float
    winddirection: String
  }
`;
