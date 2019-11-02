'use strict';

const { graphql } = require('graphql');
const { schema } = require('./schema');

// The event properties are specific to AWS. Other providers will differ.
const app = (event, _context, callback) => {
  graphql(schema, event.query, {})
    .then(
      result => {
        console.log(11111111, schema, 2222222222)
        var status = result.errors != null ? 400 : 200;

        return callback(null, {
          statusCode: status,
          body: JSON.stringify(result),
        });
      },
      err => callback(err)
    )
    .catch(err => {
      console.error(err);
      callback(err);
    });
};

module.exports = app;
