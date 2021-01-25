const { v4: uuid } = require('uuid');

const { handleResponse } = require('shared/helpers');
const { dynamoDB } = require('shared/libs');

module.exports.main = handleResponse(async (event, context) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.tableName,
    Item: {
      id: uuid(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  };

  await dynamoDB.put(params);

  return {
    body: params.Item,
  };
});
