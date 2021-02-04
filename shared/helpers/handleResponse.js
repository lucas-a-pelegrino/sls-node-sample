const { StatusCodes } = require('http-status-codes');

module.exports.handleResponse = (lambda) => {
  return async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    let statusCode;
    let body;
    const headers = {
      'Access-Control-Allow-Origin': process.env.CORS_ORIGIN,
      'Access-Control-Allow-Credentials': true,
    };

    try {
      const response = await lambda(event, context);
      statusCode = response.statusCode || StatusCodes.SUCCESS;
      body = response.body;

      if (statusCode === StatusCodes.NO_CONTENT) {
        headers['Content-Length'] = 0;
      }
    } catch (error) {
      console.error(error);

      statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
      body = { message: error.message };
    }

    return {
      headers,
      statusCode,
      body: JSON.stringify(body),
    };
  };
};
