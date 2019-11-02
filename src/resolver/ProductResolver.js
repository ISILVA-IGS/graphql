'use strict';

const { dynamoDb, tableName } = require('../config/dynamodb');




const getProducts = async (obj, limit = 10) => {
  var scanFilter = {};

  for (var key in obj) {
    const value = obj[key];

    if (value) {
      scanFilter[key] = {
        ComparisonOperator: 'EQ',
        AttributeValueList: [value],
      };
    }
  }

  const data = await dynamoDb
    .scan({
      TableName: tableName,
      ScanFilter: scanFilter,
      Limit: limit,
    })
    .promise()
    .catch(e => console.error(e));

  return data.Items;
};

module.exports = {
  getProducts
};
