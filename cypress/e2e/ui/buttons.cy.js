import { ButtonsPage } from "../../pages/ButtonsPage";

const buttonsPage = new ButtonsPage();

describe("DemoQA - Buttons Page with POM", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => false);
    buttonsPage.visit();
  });

  it("performs all clicks and validates messages", () => {
    buttonsPage.doubleClick();
    buttonsPage.getDoubleClickMessage().should("contain", "double click");

    buttonsPage.rightClick();
    buttonsPage.getRightClickMessage().should("contain", "right click");

    buttonsPage.dynamicClick();
    buttonsPage.getDynamicClickMessage().should("contain", "dynamic click");
  });
});
