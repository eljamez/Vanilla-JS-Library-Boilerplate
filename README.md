# Vanilla-JS-Library-Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple boilerplate for building a JavaScript library. It uses ES6 modules and only exposes the necessary functions from within. This is meant as a starting point. Includes a basic counter in the library.

## Getting Started

### 1. Clone or Download the repository

Keep in mind, if you clone the repository you will want to update the folder name and remote after generating the library.

### 2. Generate

run `yarn generate` to run the CLI tool. This will first install any dependencies and then run you through a list of options.

### 3. Follow the Prompts

### 4. Rename your folder,

1. Clone or Download the repository
2. Run `yarn generate` (assuming you have yarn installed)
3. Follow the prompts
4.

## Quick Start

1. Clone or Download the repository
2. run `yarn install`
3. run `yarn start` to view the demo page at `localhost:8031`
4. Adjust to your liking

## Configurations

### Jest

Jest Configurations are set in `package.json` by default. If you want to make changes, they can be done within `package.json` or you can create a new `jest.config.js` file. [see Jest Documentation](https://jestjs.io/docs/en/configuration.html) for more details.

## Scripts

- `yarn start` for development, shows a demo page where you can test your libaray
- `yarn build` for building and readying for production
- `yarn test` for running all jest tests
- `yarn lint` runs eslint

There are a few other scripts stet up for commits and pushes. Check out package.json and

## Includes the following for your convenience

- [Babel](https://babeljs.io/) (for ES6)
- [Webpack](https://webpack.js.org/) (for bundling)
- [Yarn](https://yarnpkg.com/lang/en/) (for package management)
- [ESLint](https://eslint.org/) (for linting)
- [Jest](https://facebook.github.io/jest/) (for testing)
- [Husky](https://github.com/typicode/husky) (for pre-commit and pre-push hooks)
