import { WebTablesPage } from "../../pages/WebTablesPage";

const webTablesPage = new WebTablesPage();

describe("DemoQA - Web Tables with POM", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => false);
    webTablesPage.visit();
  });

  it("adds a new record to the table", () => {
    webTablesPage.clickAdd();
    webTablesPage.fillForm({
      firstName: "Refia",
      lastName: "Elif",
      email: "refia.elif@example.com",
      age: "5",
      salary: "0",
      department: "Kindergarten",
    });
    webTablesPage.submit();
    webTablesPage.getTable().should("contain", "Refia");
  });
});
