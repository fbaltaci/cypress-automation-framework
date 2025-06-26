import "@shelex/cypress-allure-plugin";
import "./commands";

before(() => {
  cy.allure().writeEnvironmentInfo({
    browser: "chrome",
    baseUrl: Cypress.config("baseUrl"),
  });
});
