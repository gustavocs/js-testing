 ----------------------
 # JS Testing
 ----------------------

Pre-requisites:
 
- Node.js, npm:
https://nodejs.org/en/download/

- Karma CLI
> npm install -g karma-cli

- Jasmine / Karma
> npm install

# Vai!

1. `src/*.js`: classes made for testing purposes
2. `spec/*.js` is where specs/tests are located
3. To run the tests, just open `SpecRunner.html` in your browser

# Karma integration

- To run tests through Karma and start the watcher:
> karma start karma-config.js

- Too long? (Configured in package.json): 
> npm test 
