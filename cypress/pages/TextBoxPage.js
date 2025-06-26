/**
 * Page object for the Text Box page.
 */
export class TextBoxPage {
  visit() {
    cy.visit('/text-box');
  }

  fillForm({ fullName, email, currentAddress, permanentAddress }) {
    cy.get('#userName').type(fullName);
    cy.get('#userEmail').type(email);
    cy.get('#currentAddress').type(currentAddress);
    cy.get('#permanentAddress').type(permanentAddress);
  }

  submit() {
    cy.get('#submit').click();
  }

  getOutputField(fieldId) {
    return cy.get(`#output #${fieldId}`);
  }
}
