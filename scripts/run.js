const path = require('path');
const sh = require('shelljs');

const { build } = require('./build');

const clear = {
  win32: 'cls',
  darwin: 'clear',
  linux: 'clear',
};

const run = () => {
  try {
    const lambda = process.argv[2];

    build(lambda);

    sh.exec(clear[process.platform]);
    sh.cd(path.resolve(__dirname, `../dist/${lambda}`));
    sh.exec('npx sls offline --color=always');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
