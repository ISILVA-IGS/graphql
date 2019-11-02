'use strict';

const { GraphQLSchema } = require('graphql');
const { QueryType } = require('./type/QueryType');
/*const { MutationType } = require('./type/MutationType');*/

const schema = new GraphQLSchema({
  query: QueryType
});

module.exports.schema = schema;
