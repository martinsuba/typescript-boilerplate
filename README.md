# typescript-boilerplate
Simple, minimalistic project template to start coding in [TypeScript][typescript].

## Features
* [Webpack][webpack] build using [Babel][babel] with [@babel/preset-typescript](https://babeljs.io/docs/en/next/babel-preset-typescript.html) Build is an umd module (lib can be imported by consumer with es6 or CommonJS imports).
* [ESLint][eslint] using [@typescript-eslint][@typescript-eslint] plugin with airbnb-base ruleset
* Unit tests with [Karma][karma] runner, [Mocha][mocha] framework, [Chai][chaijs] assertion library, [Sinon][sinon] spies and [Istanbul][istanbul] coverage reporter.

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
