import { StatusCodes } from 'http-status-codes';

export default function handleResponse(lambda) {
  return async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    let statusCode;
    let body;

    try {
      const response = await lambda(event, context);
      statusCode = response.statusCode || StatusCodes.SUCCESS;
      body = response.body;
    } catch (error) {
      console.error(error);

      statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
      body = { message: error.message };
    }

    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
}
