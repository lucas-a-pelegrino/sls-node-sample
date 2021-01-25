const { StatusCodes } = require('http-status-codes');

const { dynamoDB } = require('shared/libs');
const { handleResponse, messages } = require('shared/helpers');
const { ApplicationError } = require('shared/utils');

module.exports.main = handleResponse(async (event, context) => {
  const { id } = event.pathParameters;

  const params = {
    TableName: process.env.tableName,
    Key: {
      id,
    },
  };

  const user = await dynamoDB.get(params);
  if (!user.Item) {
    throw new ApplicationError(messages.notFound('user'), StatusCodes.NOT_FOUND);
  }

  return {
    body: user.Item,
  };
});
