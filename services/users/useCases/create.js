const { StatusCodes } = require('http-status-codes');
const { v4: uuid } = require('uuid');

const { messages } = require('shared/helpers');
const { dynamoDB } = require('shared/libs');
const { ApplicationError } = require('shared/utils');

const TABLE_NAME = process.env.tableName;

module.exports.create = async (data) => {
  const newUser = {
    id: uuid(),
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const user = await dynamoDB.get({
    TableName: TABLE_NAME,
    Key: {
      id: newUser.id,
    },
  });

  if (user) {
    throw new ApplicationError(messages.alreadyExists('user'), StatusCodes.CONFLICT);
  }

  const params = {
    TableName: TABLE_NAME,
    Item: { ...newUser },
  };

  await dynamoDB.put(params);

  return {
    statusCode: StatusCodes.CREATED,
    body: { ...params.Item },
  };
};
