const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',

  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },

  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },

  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to type expected by parseValue
      return parseInt(ast.value, 10);
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

module.exports = dateScalar;
