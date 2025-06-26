/**
 * Page object for the Radio Button page.
 */
export class RadioButtonPage {
  visit() {
    cy.visit('/radio-button');
  }

  selectRadio(label) {
    cy.contains('label', label).click();
  }

  getSelectedValue() {
    return cy.get('.text-success');
  }
}
