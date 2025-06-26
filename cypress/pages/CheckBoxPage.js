/**
 * Page object for the Check Box page.
 */
export class CheckBoxPage {
  visit() {
    cy.visit('/checkbox');
  }

  expandAll() {
    cy.get("button[title='Expand all']").click();
  }

  selectCheckbox(label) {
    cy.contains('.rct-title', label).click();
  }

  getResultText() {
    return cy.get('#result');
  }
}
