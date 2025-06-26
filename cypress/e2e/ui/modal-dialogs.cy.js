describe("DemoQA - Modal Dialogs", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => false);
    cy.visit("/modal-dialogs");
  });

  it("opens and closes small modal", () => {
    cy.get("#showSmallModal").click();
    cy.get(".modal-content").should("be.visible");
    cy.get("#closeSmallModal").click();
    cy.get(".modal-content").should("not.exist");
  });
});
