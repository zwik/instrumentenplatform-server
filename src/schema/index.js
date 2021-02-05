const { gql } = require('apollo-server');

module.exports = gql`
  type Temperature {
    datetime: Float
    tempvalue: Float,
    feelslike: Float,
    dewpoint: Float
  }

  type Query {
    temperature: [Temperature]
  }
`;
