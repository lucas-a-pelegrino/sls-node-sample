import { StatusCodes } from 'http-status-codes';

import dynamoDb from './libs/dynamoDb';
import handleResponse from './libs/handleResponse';

import ApplicationError from './utils/ApplicationError';
import messages from './utils/messages';

export const main = handleResponse(async (event, context) => {
  const { id } = event.pathParameters;

  const params = {
    TableName: process.env.tableName,
    Key: {
      id,
    },
  };

  const user = await dynamoDb.get(params);
  if (!user.Item) {
    throw new ApplicationError(messages.notFound('user'), StatusCodes.NOT_FOUND);
  }

  return {
    body: user.Item,
  };
});
