/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');

const DIST = path.resolve(__dirname, '../dist');

module.exports.build = (lambda) => {
  if (fs.existsSync(DIST)) {
    sh.rm('-rf', DIST);
  }

  fs.mkdirSync(DIST);

  const distLambdaPath = path.resolve(__dirname, `${DIST}/${lambda}`);

  sh.cp('-R', path.resolve(__dirname, `../services/${lambda}/`), distLambdaPath);
  sh.cp('-R', path.resolve(__dirname, '../.env'), distLambdaPath);

  sh.cd(distLambdaPath);

  sh.exec('npm install --color=always');
};
