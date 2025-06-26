import { RadioButtonPage } from "../../pages/RadioButtonPage";

const radioButtonPage = new RadioButtonPage();

describe("DemoQA - Radio Buttons with POM", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => false);
    radioButtonPage.visit();
  });

  it("selects Yes and verifies", () => {
    radioButtonPage.selectRadio("Yes");
    radioButtonPage.getSelectedValue().should("have.text", "Yes");
  });
});
