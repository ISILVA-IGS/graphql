'use strict';

const app = require('./src/index');

// We want to make a GET request with ?query=<graphql query>
// The event properties are specific to AWS. Other providers will differ.

module.exports.app = app;
