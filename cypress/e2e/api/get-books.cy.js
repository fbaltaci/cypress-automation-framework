describe("API - Get All Books", () => {
  it("should return a list of books", () => {
    cy.allure().feature("Books");
    cy.allure().severity("critical");

    cy.request("https://demoqa.com/BookStore/v1/Books").its("status").should("eq", 200);
  });
});
