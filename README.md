 ----------------------
| Jasmine + Karma demo
 ----------------------

Pre-requisites:
 
- Node.js, npm
https://nodejs.org/en/download/

- Karma CLI
> npm install -g karma-cli

- Jasmine 
1. Jasmine standalone was downloaded from https://github.com/jasmine/jasmine/releases
   (note you can also install it using npm if you want)

#  Vai!
1. src/Calculator.js is a class made for testing purposes
2. spec/CalculatorSpec.js is where the specs/tests are located
3. To run the tests, just open SpecRunner.html in your browser

Karma integration

1. Install all the packages and plugins, with command prompt opened in your project folder, type:
\jasmine-karma-demo> npm install

2. To run the tests and start the karma watching, type:
> karma start karma-config.js
Also there is a shortcut to this command configured in package.json in scripts section, that is 
> npm test 



