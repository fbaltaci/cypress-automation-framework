const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
  reporter: "@shelex/cypress-allure-plugin",
  reporterOptions: {
    outputDir: "allure-results",
    clean: true,
  },
});
