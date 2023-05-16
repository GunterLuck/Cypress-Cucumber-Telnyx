// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@shelex/cypress-allure-plugin';
Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
      const path = `../reports/screenshots/${Cypress.spec.name}/${screenshotFileName}`
      cy.allure().attachment('screenshot', new Buffer.from(path,'base64'),'image/png')
      
    }
    else {
      const screenshotFileName = `${runnable.parent.title} -- ${test.title} -- after each hook.png`
      const path = `../reports/screenshots/${Cypress.spec.name}/${screenshotFileName}`
      cy.allure().attachment('screenshot', new Buffer.from(path,'base64'),'image/png')
    }
  })
// Alternatively you can use CommonJS syntax:
// require('./commands')