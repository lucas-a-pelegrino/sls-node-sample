const { handleResponse } = require('shared/helpers');
const userUseCases = require('../useCases');

module.exports = {
  create: handleResponse(async (event, context) => {
    const data = JSON.parse(event.body);
    return userUseCases.create(data);
  }),

  get: handleResponse(async (event, context) => {
    const { id } = event.pathParameters;
    return userUseCases.get(id);
  }),
};
