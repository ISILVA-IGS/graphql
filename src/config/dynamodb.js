'use strict';

const { DocumentClient } = require('aws-sdk/clients/dynamodb');

const isTest = process.env.JEST_WORKER_ID;
const isLocal = process.env.NODE_ENV == null;
const TABLE_NAME = process.env.DYNAMODB_TABLE;

var config = {
  convertEmptyValues: true,
};

if (isLocal) {
  config = {
    ...config,
    endpoint: 'http://localhost:8000',
  };
}

if (isTest) {
  config = {
    ...config,
    accessKeyId: 'my-key',
    secretAccessKey: 'my-secret',
    region: 'local-env',
    endpoint: 'http://localhost:8000',
  };
}

const dynamoDb = new DocumentClient(config);

module.exports.tableName = TABLE_NAME;
module.exports.dynamoDb = dynamoDb;
