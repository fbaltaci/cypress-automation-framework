describe("API - Get All Books", () => {
  it("should return a list of books", () => {
    cy.request("https://demoqa.com/BookStore/v1/Books")
      .its("body.books")
      .should("be.an", "array")
      .and("have.length.greaterThan", 0);
  });
});
