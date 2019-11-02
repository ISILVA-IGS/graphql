'use strict';

const { GraphQLObjectType, GraphQLString } = require('graphql');

const ProductType = new GraphQLObjectType({
  name: 'Product',
  description: 'Represents a product',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: product => product.id,
    },
    name: {
      type: GraphQLString,
      resolve: product => product.name,
    },
  }),
});

module.exports.ProductType = ProductType;
