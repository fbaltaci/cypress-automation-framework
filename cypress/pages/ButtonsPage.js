/**
 * Page object for the Buttons page.
 */
export class ButtonsPage {
  visit() {
    cy.visit("/buttons");
  }

  doubleClick() {
    cy.get("#doubleClickBtn").dblclick();
  }

  rightClick() {
    cy.get("#rightClickBtn").rightclick();
  }

  dynamicClick() {
    cy.get('button.btn.btn-primary').eq(2).click();
  }

  getDoubleClickMessage() {
    return cy.get("#doubleClickMessage");
  }

  getRightClickMessage() {
    return cy.get("#rightClickMessage");
  }

  getDynamicClickMessage() {
    return cy.get("#dynamicClickMessage");
  }
}
