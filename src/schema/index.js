const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  type Query {
    temperature: [Temperature]
  }

  type Temperature {
    datetime: Float
    tempvalue: Float,
    feelslike: Float,
    dewpoint: Float
  }
`;
