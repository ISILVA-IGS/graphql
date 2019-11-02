'use strict';

const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const { ProductType } = require('./ProductType');
const ProductResolver = require('../resolver/ProductResolver');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query any Fence by id and owner',
  fields: () => ({
    product: {
      type: ProductType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
      },
      resolve: (_obj, { id, name }) => {
        if(id || name) return ProductResolver.getProduct(id, name)

        throw new Error('Não foi possível encontrar o registro.')
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      args:{
        id: { type: GraphQLString },
        name: { type: GraphQLString },
      },
      resolve: (_obj, { id, name }) => ProductResolver.getProducts({ id, name }, 10) 
    }
  }),
});

module.exports.QueryType = QueryType;
