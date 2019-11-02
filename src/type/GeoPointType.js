'use strict';

const {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
} = require('graphql');

var GeoPointType = new GraphQLObjectType({
  name: 'GeoPoint',
  description: 'Represents a GeoPoint',
  fields: {
    latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: point => point.latitude,
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: point => point.longitude,
    },
    index: {
      type: new GraphQLNonNull(GraphQLInt),
      defaultValue: 0,
      resolve: point => point.index,
    },
  },
});

var CreateGeoPointInputType = new GraphQLInputObjectType({
  name: 'CreateGeoPointInput',
  fields: {
    latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    index: {
      type: new GraphQLNonNull(GraphQLInt),
      defaultValue: 0,
    },
  },
});

module.exports.GeoPointType = GeoPointType;

module.exports.CreateGeoPointInputType = CreateGeoPointInputType;
