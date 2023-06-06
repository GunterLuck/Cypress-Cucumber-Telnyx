# Telnyx-Cypress-Cucumber-Test

This project do https://telnyx.com/ part of the functionality e2e tests on cypress-cucumber framework with browserify preprocessor.

Allure is used as a reporter in this project.

# How to start

The project used [Node.js v18.15.0.](https://nodejs.org/en/blog/release/v18.15.0)

Download or clone a project

To clone a project with `GIT`, call `git clone https://github.com/GunterLuck/Telnyx-Cypress-Cucumber-Test.git`

To install dependencies , call `npm i`

## Run

To run cypress GUI, call `npm run open`

To run headless test with allure reporter on chrome bowser, call `npm run reporter-headless`

To check allure results, call `npm run allure:report`

To clean allure-report, call `npm run allure:clear`

To see the results of the allure reporter, click [here](https://gunterluck.github.io/Telnyx-Cypress-Cucumber-Test/)