'use strict';

const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const { ProductType } = require('./ProductType');
const Productresolver = require('../resolver/ProductResolver');
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query any Fence by id and owner',
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
      },
      resolve: (_obj, { id, name }) => Productresolver.getproducts({ id, name }, 10),
    },
  },
});

const getProduct = () => {
  console.log("heloooo")
  return "helloooo"
}

module.exports.QueryType = QueryType;
