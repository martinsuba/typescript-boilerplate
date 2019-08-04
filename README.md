# typescript-boilerplate
Simple, minimalistic project template to start coding in [TypeScript](https://www.typescriptlang.org/).

## Features
* [Webpack](https://webpack.js.org/) build using [Babel](https://babeljs.io/) with [@babel/preset-typescript](https://babeljs.io/docs/en/next/babel-preset-typescript.html). Build is an umd module (lib can be imported by consumer with es6 or CommonJS imports).
* [ESLint](https://eslint.org/) using [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) plugin with [airbnb-base ruleset](https://www.npmjs.com/package/eslint-config-airbnb-base).
* Unit tests with [Karma](https://karma-runner.github.io) runner, [Mocha](https://mochajs.org/) framework, [Chai](https://www.chaijs.com/) assertion library, [Sinon](https://sinonjs.org/) spies and [Istanbul](https://istanbul.js.org/) coverage reporter.

## Npm scripts
* `clean` - removes `dist` folder
* `build` - webpack build in development mode
* `build:production` - webpack build in production mode
* `test` - runs unit tests
* `lint` - runs eslint

## Usage
```
git clone https://github.com/martinsuba/typescript-boilerplate
cd typescript-boilerplate
npm install
````
