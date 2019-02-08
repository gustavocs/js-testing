 ----------------------
 # JS Testing
 ----------------------

An introduction to testing and unit testing in front-end.
Made for AngularMVD meetup.

## Pre-requisites:
 
- [Node.js / npm](https://nodejs.org/en/download/)

- Karma CLI
> npm install -g karma-cli

## Dependencies:
- Jasmine / Karma / Karma plugins { `karma-failed-reporter`, `karma-chrome-launcher`, `karma-ie-launcher`, `karma-jasmine` }
> npm install

## Vai!

1. `src/*.js`: classes made for testing purposes
2. `spec/*.js` is where specs/tests are located
3. To run tests with Jasmine, just open `SpecRunner.html` in your browser

## Karma integration

- To run tests through Karma and start the watcher:
> karma start karma-config.js

- Too long?
> npm test 
