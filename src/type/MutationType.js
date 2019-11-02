'use strict';

const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLFloat } = require('graphql');
const { FenceType } = require('./FenceType');
const { CreateGeoPointInputType } = require('./GeoPointType');
const FenceResolver = require('../resolver/FenceResolver');

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Create or Update a fence',
  fields: () => ({
    createFence: {
      type: FenceType,
      args: {
        owner: { type: GraphQLString },
        polygon: {
          type: new GraphQLList(CreateGeoPointInputType),
        },
        range: { type: GraphQLFloat },
      },
      resolve: async (_obj, { owner, polygon, range }) => {
        let result = await FenceResolver.createFence(owner, polygon, range).catch(e =>
          console.error(e)
        );
        let response = await FenceResolver.getFence(result.id, result.owner).catch(e =>
          console.error(e)
        );

        return response;
      },
    },
  }),
});

module.exports.MutationType = MutationType;
