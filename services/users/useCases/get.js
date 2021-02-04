const { StatusCodes } = require('http-status-codes');

const { messages } = require('shared/helpers');
const { dynamoDB } = require('shared/libs');
const { ApplicationError } = require('shared/utils');

const TABLE_NAME = process.env.tableName;

module.exports.get = async (userId) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: userId,
    },
  };

  const user = await dynamoDB.get(params);
  if (!user.Item) {
    throw new ApplicationError(messages.notFound('user'), StatusCodes.NOT_FOUND);
  }

  return {
    body: { ...user.Item },
  };
};
