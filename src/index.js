'use strict';

const { graphql } = require('graphql');
const { schema } = require('./schema');

// The event properties are specific to AWS. Other providers will differ.
const app = (event, _context, callback) => {
  const hasQueryString = event.queryStringParameters != null;
  const hasBody = event.body != null;

  var source;

  if (hasQueryString && event.queryStringParameters['query'] != '') {
    source = event.queryStringParameters['query'];
  }

  if (hasBody && event.body != '') {
    let body = JSON.parse(event.body);
    source = body.query;
  }

  graphql(schema, source, {})
    .then(
      result => {
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
