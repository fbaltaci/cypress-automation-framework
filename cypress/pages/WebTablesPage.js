/**
 * Page object for the Web Tables page.
 */
export class WebTablesPage {
  visit() {
    cy.visit('/webtables');
  }

  clickAdd() {
    cy.get('#addNewRecordButton').click();
  }

  fillForm({ firstName, lastName, email, age, salary, department }) {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('#age').type(age);
    cy.get('#salary').type(salary);
    cy.get('#department').type(department);
  }

  submit() {
    cy.get('#submit').click();
  }

  getTable() {
    return cy.get('.rt-tbody');
  }
}
