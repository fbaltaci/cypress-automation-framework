import { CheckBoxPage } from "../../pages/CheckBoxPage";

const checkBoxPage = new CheckBoxPage();

describe("DemoQA - Check Box with POM", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => false);
    checkBoxPage.visit();
  });

  it("expands and selects checkbox", () => {
    checkBoxPage.expandAll();
    checkBoxPage.selectCheckbox("Desktop");
    checkBoxPage.getResultText().should("contain", "desktop");
  });
});
