import { v4 as uuid } from 'uuid';

import dynamoDb from './libs/dynamoDb';
import handleResponse from './libs/handleResponse';

export const main = handleResponse(async (event, context) => {
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

  await dynamoDb.put(params);

  return {
    body: params.Item,
  };
});
