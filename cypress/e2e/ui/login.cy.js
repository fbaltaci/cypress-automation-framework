describe("Login UI Test", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("/login");
  });

  it("should login with valid credentials", () => {
    cy.loginUI("testuser", "Test@1234");
    cy.url().should("include", "/profile");
  });
});
