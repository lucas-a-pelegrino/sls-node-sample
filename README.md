# Serverless Sample - NodeJS/AWS 🚀

[![GitHub Release](https://img.shields.io/github/v/release/lucas-a-pelegrino/sls-node-sample?sort=semver)]() [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://opensource.org/licenses/MIT)

> A Serverless application sample built using NodeJS, Serverless Framework, and AWS.

## Features

> Coming soon...

## Project Structure

```
services/                # Application's services separated by it's entity;
|--- {service}/          # Contain all lambdas for specific service. e.g: users, notes;
|------ events/          # Lambdas separated by operation. e.g: get, list, create, etc...;
|------ package.json     # Dependencies used only by this service, should be listed in this package.json;
|------ serverless.yml   # The serverless config used by the service;
shared/                  # Codebase shared across all services;
|--- helpers/            # Shared helpers. e.g: handleReponse();
|--- libs/               # Shared libs. e.g: AWS;
|--- resources/          # Shared resources. e.g: serverless.common.yml;
|--- utils/              # Shared utils. e.g: ApplicationError;
|--- package.json        # Dependencies used by the shared codebase should be installed in this package.json;
package.json             # Dependencies used across the entire project;
```

## Getting Started

### Installation Steps

> Coming soon...

## Documentation

> Coming soon...

## License

[MIT](https://opensource.org/licenses/MIT)
