# Serverless Sample - NodeJS/AWS 🌩

[![GitHub Release](https://img.shields.io/github/v/release/lucas-a-pelegrino/sls-node-sample?sort=semver)]() [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://opensource.org/licenses/MIT)

> A Serverless application sample built using NodeJS, Serverless Framework, and AWS.

## Features

> Coming soon...

## Project Structure

```
services/                     # Application's services separated by it's entity;
|--- {service}/               # Contain all lambdas for specific service. e.g: users, notes;
|------ events/handler.js     # Lambdas handler for each event inside the service;
|------ useCases/             # Use Cases separeted for by lambda. e.g: list, get, create...;
|------ package.json          # Dependencies used only by this service, should be listed in this package.json;
|------ serverless.yml        # The serverless config used by the service;
shared/                       # Codebase shared across all services;
|--- helpers/                 # Shared helpers. e.g: handleReponse();
|--- libs/                    # Shared libs. e.g: AWS;
|--- resources/               # Shared resources. e.g: serverless.common.yml;
|--- utils/                   # Shared utils. e.g: ApplicationError;
|--- package.json             # Dependencies used by the shared codebase should be installed in this package.json;
scripts/                      # Scripts used for a seamless development flow;
package.json                  # Dev dependencies used across the entire project;
```

## Getting Started

### Installation Steps

Clone the repository to your local machine:
```sh
git clone https://github.com/lucas-a-pelegrino/sls-node-sample.git
cd sls-node-sample
```

Install the dependencies:
```sh
npm install
```

To build and test your service locally using [serverless offline](https://github.com/dherault/serverless-offline), run the following command:
```sh
npm run offline
# or
yarn offline
```

## Documentation

> Coming soon...

## License

[MIT](https://opensource.org/licenses/MIT)
